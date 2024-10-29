'use client';

export default function AboutItem({
  id,
  title,
  description,
  image,
}) {
  return (
    <article className="h-full mb-4 md:mb-8 relative">
      <div className="bg-white shadow-md flex-1 p-4 md:p-6 md:ml-[70px] flex flex-col md:flex-row content-center justify-center flex-wrap">
        <div className="relative md:absolute md:top-0 md:left-0 p-4 mb-2 md:mb-0 md:w-28 rounded-full border bg-gold shadow-md text-white h-full flex content-center justify-center flex-wrap">
          { image }
        </div>
        <div className="text-center">
          <h3 className="text-orange text-lg mb-1 font-bold">{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </article>
  );
}
