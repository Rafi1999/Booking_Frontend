import HeroSection from '@/components/HeroSection';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <HeroSection/>
      {/* <h1 className="text-4xl font-bold text-blue-500 mb-4">Welcome to Our Restaurant</h1>
      <Link href="/booking">
        <p className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Book a Table
        </p>
      </Link> */}
    </div>
  );
}
