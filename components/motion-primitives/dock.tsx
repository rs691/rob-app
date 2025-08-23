'use client';

import { cn } from '@/lib/utils';
import {
  AnimatePresence,
  motion,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
  type SpringOptions,
} from 'motion/react';
import React, {
  Children,
  cloneElement,
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

const DOCK_HEIGHT = 128;
const DEFAULT_MAGNIFICATION = 80;
const DEFAULT_DISTANCE = 150;
const DEFAULT_PANEL_HEIGHT = 64;

export type DockProps = {
  children: ReactNode;
  className?: string;
  distance?: number;
  panelHeight?: number;
  magnification?: number;
  spring?: SpringOptions;
};

export type DockItemProps = {
  className?: string;
  children: ReactNode;
  onClick?: () => void;
};

export type DockLabelProps = {
  className?: string;
  children: ReactNode;
  isHovered?: MotionValue<number>;
};

export type DockIconProps = {
  className?: string;
  children: ReactNode;
  width?: MotionValue<number>;
};

type DockContextType = {
  mouseX: MotionValue<number>;
  spring: SpringOptions;
  magnification: number;
  distance: number;
};

const DockContext = createContext<DockContextType | undefined>(undefined);

function DockProvider({ children, value }: { children: ReactNode; value: DockContextType }) {
  return <DockContext.Provider value={value}>{children}</DockContext.Provider>;
}

function useDock() {
  const context = useContext(DockContext);
  if (!context) throw new Error('useDock must be used within a DockProvider');
  return context;
}

/* -------------------------------------------------
   Dock (Wrapper)
--------------------------------------------------*/
function Dock({
  children,
  className,
  spring = { mass: 0.1, stiffness: 150, damping: 12 },
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  panelHeight = DEFAULT_PANEL_HEIGHT,
}: DockProps) {
  const mouseX = useMotionValue(Infinity);
  const isHovered = useMotionValue(0);

  const maxHeight = Math.max(DOCK_HEIGHT, magnification + magnification / 2 + 4);
  const heightRow = useTransform(isHovered, [0, 1], [panelHeight, maxHeight]);
  const height = useSpring(heightRow, spring);

  return (
    <motion.div
      style={{ height }}
      className="mx-2 flex max-w-full items-end overflow-x-auto scrollbar-hide"
    >
      <motion.div
        onMouseMove={({ pageX }) => {
          isHovered.set(1);
          mouseX.set(pageX);
        }}
        onMouseLeave={() => {
          isHovered.set(0);
          mouseX.set(Infinity);
        }}
        className={cn(
          'mx-auto flex w-fit gap-4 rounded-2xl bg-gray-50 px-4 dark:bg-neutral-900',
          className
        )}
        style={{ height: panelHeight }}
        role="toolbar"
        aria-label="Application dock"
      >
        <DockProvider value={{ mouseX, spring, distance, magnification }}>
          {children}
        </DockProvider>
      </motion.div>
    </motion.div>
  );
}

/* -------------------------------------------------
   DockItem
--------------------------------------------------*/
function DockItem({ children, className, onClick }: DockItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { distance, magnification, mouseX, spring } = useDock();

  const isHovered = useMotionValue(0);

  const mouseDistance = useTransform(mouseX, (val) => {
    const rect = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - rect.x - rect.width / 2;
  });

  const widthTransform = useTransform(
    mouseDistance,
    [-distance, 0, distance],
    [40, magnification, 40]
  );

  const width = useSpring(widthTransform, spring);

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      onHoverStart={() => isHovered.set(1)}
      onHoverEnd={() => isHovered.set(0)}
      onFocus={() => isHovered.set(1)}
      onBlur={() => isHovered.set(0)}
      className={cn('relative inline-flex items-center justify-center', className)}
      tabIndex={0}
      role="button"
      onClick={onClick}
    >
      {Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          if (child.type === DockIcon) {
            return cloneElement(child as ReactElement<DockIconProps>, { width });
          }
          if (child.type === DockLabel) {
            return cloneElement(child as ReactElement<DockLabelProps>, { isHovered });
          }
        }
        return child;
      })}
    </motion.div>
  );
}

/* -------------------------------------------------
   DockLabel
--------------------------------------------------*/
function DockLabel({ children, className, isHovered }: DockLabelProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isHovered) return;
    const unsub = isHovered.on('change', (val) => setIsVisible(val === 1));
    return () => unsub();
  }, [isHovered]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: -10 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.2 }}
          className={cn(
            'absolute -top-6 left-1/2 w-fit -translate-x-1/2 rounded-md border border-gray-200 bg-gray-100 px-2 py-0.5 text-xs text-neutral-700 dark:border-neutral-800 dark:bg-neutral-800 dark:text-white',
            className
          )}
          role="tooltip"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* -------------------------------------------------
   DockIcon
--------------------------------------------------*/
function DockIcon({ children, className, width }: DockIconProps) {
  const widthTransform = useTransform(width || useMotionValue(40), (val) => val / 2);

  return (
    <motion.div style={{ width: widthTransform }} className={cn('flex items-center justify-center', className)}>
      {children}
    </motion.div>
  );
}

export { Dock, DockIcon, DockItem, DockLabel };

