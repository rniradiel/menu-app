'use client';
import Link from 'next/link';

export default function Home() {
  return (
    <section id="home" className="hero-section bg-cover bg-center bg-heroImage w-full h-screen relative">
      <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center flex-col p-4">
        <h1 className="text-3xl text-white font-bold">Indulge in a Journey of Flavors</h1>
        <p className="text-white">From gourmet burgers to spicy Asian delights, we’ve got something for every craving.</p>
        <Link href="#menu">
          <button className="bg-gold hover:bg-lightGold text-white font-bold py-2 px-4 rounded mt-2">
            <span className="text-white">Explore Our Menu</span>
          </button>
        </Link>
      </div>
    </section>
  );
}
