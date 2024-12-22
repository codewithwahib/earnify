import Image from "next/image";
import Link from "next/link";  // Use Link without <a> tag

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center">
      {/* Logo Section */}
      <div className="mb-8">
        <Image
          src="/logo.png"  // Your logo image
          alt="Logo"
          width={150}
          height={150}
        />
      </div>

      {/* Heading */}
      <h1 className="text-4xl font-semibold text-blue-600 mb-4">
        Welcome to Our Website
      </h1>

      {/* Subheading */}
      <p className="text-xl text-gray-700 mb-6">
        Discover our services and join us today!
      </p>

      {/* Sign Up Button */}
      <Link href="/signup">
        <button className="bg-blue-500 text-white py-3 px-6 rounded-lg text-lg hover:bg-blue-600 transition">
          Sign Up Now
        </button>
      </Link>
    </div>
  );
}
