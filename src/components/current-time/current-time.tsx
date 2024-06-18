import ArrowDownIcon from '@/icons/arrow-down-icon';
import SunIcon from '@/icons/sun-icon';

export default function CurrentTime() {
  return (
    <section className="text-color-white max-w-[1200px] w-full mx-auto px-4 pb-[6rem]">
      <div className="flex content-between uppercase items-end">
        <div className="w-full">
          <div className="flex gap-4 text-xl tracking-[0.2rem]">
            <SunIcon />
            <p>Good Evening, it’s currently</p>
          </div>
          <h1 className="text-[12.5rem] font-bold leading-[100%]">
            20:07<span className=" inline text-4xl font-normal">GMT</span>
          </h1>
          <p className="text-2xl font-bold tracking-[0.2rem]">
            in location, BR
          </p>
        </div>
        <div
          className="flex items-center gap-4 font-bold tracking-[0.1rem]
           text-color-dark-grey bg-color-ligh-grey pl-4 pr-2 py-2 rounded-3xl cursor-pointer"
        >
          <span>more</span>
          <span className="grid place-content-center bg-color-dark-grey w-8 h-8 rounded-full">
            <ArrowDownIcon />
          </span>
        </div>
      </div>
    </section>
  );
}
