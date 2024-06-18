'use client';
import ArrowDownIcon from '@/icons/arrow-down-icon';
import SunIcon from '@/icons/sun-icon';
import CurrentTimeDetails from './current-time-details';
import React from 'react';

export default function CurrentTime() {
  const [showDetails, setShowDetails] = React.useState(false);

  React.useEffect(() => {
    window.scrollTo({
      top: showDetails ? document.documentElement.scrollHeight : 0,
      behavior: 'smooth',
    });
  }, [showDetails]);

  return (
    <section className="text-color-white w-full">
      <div className="flex content-between items-end uppercase max-w-[1200px] mx-auto px-4 mt-8 mb-20">
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
          className="group flex items-center gap-4 font-bold tracking-[0.1rem]
           text-color-dark-grey bg-color-ligh-grey pl-4 pr-2 py-2 rounded-3xl cursor-pointer"
          onClick={() => setShowDetails(!showDetails)}
        >
          <span>{showDetails ? 'less' : 'more'}</span>
          <span
            className="grid place-content-center bg-color-dark-grey w-8 h-8 rounded-full 
          transition-all duration-200 ease-in-out group-hover:bg-opacity-50"
          >
            <span
              className={`${
                showDetails ? '-scale-100' : ''
              } transition-all duration-200 ease-in-out`}
            >
              <ArrowDownIcon />
            </span>
          </span>
        </div>
      </div>
      <CurrentTimeDetails />
    </section>
  );
}
