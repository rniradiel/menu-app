'use client';
import AboutItem from "./AboutItem";
import Sparkles from "../assets/Sparkles";
import Globe from "../assets/Globe";
import Light from "../assets/Light";

export default function About() {
  const ABOUT_DATA = [
    {
      id: 'p1',
      title: 'Exceptional Quality',
      description:
        'Handcrafted dishes made with the finest ingredients.',
      image: <Sparkles />,
    },
    {
      id: 'p2',
      title: 'Global Flavors',
      description:
        'Our menu brings the world to your plate',
      image: <Globe />,
    },
    {
      id: 'p3',
      title: 'Cozy Ambiance',
      description:
        'A perfect blend of comfort and style for your dining experience.',
      image: <Light />,
    },
  ];

  return (
    <section id="about" className="bg-gold w-full relative px-2 py-8">
      <div className="flex justify-center items-center flex-col p-4">
        <h2 className="text-3xl text-white font-bold mb-4">Why Bite & Bliss?</h2>
        <p className="text-white mb-8">Experience Comfort and Gourmet in Every Bite</p>
        <ul className="min-w-full">
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
