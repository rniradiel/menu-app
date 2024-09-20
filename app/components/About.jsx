'use client';
import AboutItem from "./AboutItem";

export default function About() {
  const ABOUT_DATA = [
    {
      id: 'p1',
      title: 'Exceptional Quality',
      description:
        'Handcrafted dishes made with the finest ingredients.',
    },
    {
      id: 'p2',
      title: 'Global Flavors',
      description:
        'Our menu brings the world to your plate',
    },
    {
      id: 'p3',
      title: 'Cozy Ambiance',
      description:
        'A perfect blend of comfort and style for your dining experience.',
    },
  ];

  return (
    <section id="about" className="bg-gold w-full h-screen relative">
      <div className="flex justify-center items-center flex-col p-4">
        <h2 className="text-3xl text-white font-bold">Why Bite & Bliss?</h2>
        <p className="text-white">Experience Comfort and Gourmet in Every Bite</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ABOUT_DATA.map((about) => (
            <li key={about.id}>
              <AboutItem {...about} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
