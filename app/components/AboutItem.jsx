'use client';

export default function AboutItem({
  id,
  title,
  description,
}) {
  return (
    <article className="bg-white h-full rounded-md shadow-md flex flex-col">
      <div className="flex-1 p-4 pb-2 flex flex-col justify-between">
        <div>
          <h3 className="text-orange text-lg mb-1 font-bold">{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </article>
  );
}
