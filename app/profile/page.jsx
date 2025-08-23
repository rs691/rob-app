import Image from 'next/image';

export default function ProfilePage() {
    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
                <Image
                    src="/my-image.jpg" // Replace with your image path
                    alt="Profile"
                    width={200}
                    height={200}
                    className="rounded-full"
                />
            </div>
        </div>
    );
}
