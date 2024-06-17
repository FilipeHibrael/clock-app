import RefreshIcon from '@/icons/refresh-icon';

export default function Quote() {
  return (
    <section className="flex gap-8 items-start text-color-white text-lg max-w-[1200px] mx-auto pt-12 px-4">
      <blockquote className="max-w-[48ch]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, corrupti!
        Laborum impedit deleniti vitae, harum ipsum cumque voluptatum at dicta
        incidunt quam facere corrupti. Asperiores ab autem beatae cupiditate
        quisquam
        <cite className="block font-bold mt-2">Athor</cite>
      </blockquote>
      <span className="group cursor-pointer p-1">
        <RefreshIcon className="group-hover:opacity-100 transition-all" />
      </span>
    </section>
  );
}
