import { SpotlightBorder } from './SpotlightBorder';

function MyPage() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-900">
      <SpotlightBorder>
        {/* Your content goes here */}
        <h2 className="text-xl text-center">Your Project Title</h2>
        <p className="text-sm text-center">
          A brief description of your project.
        </p>
      </SpotlightBorder>
    </div>
  );
}