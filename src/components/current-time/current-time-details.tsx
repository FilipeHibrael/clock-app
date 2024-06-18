export default function CurrentTimeDetails() {
  return (
    <div className="bg-color-ligh-grey text-color-dark-grey">
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 gap-y-12 gap-x-8 grid-rows-2 py-16 px-4">
        <div>
          <h2 className="uppercase tracking-[0.1875rem] mb-1">
            Current Timezone
          </h2>
          <span className="font-bold text-5xl">America/location</span>
        </div>
        <div>
          <h2 className="uppercase tracking-[0.1875rem] mb-1">
            Day of the week
          </h2>
          <span className="font-bold text-5xl">2</span>
        </div>
        <div>
          <h2 className="uppercase tracking-[0.1875rem] mb-1">
            Day of the year
          </h2>
          <span className="font-bold text-5xl">170</span>
        </div>
        <div>
          <h2 className="uppercase tracking-[0.1875rem] mb-1">Week number</h2>
          <span className="font-bold text-5xl">25</span>
        </div>
      </div>
    </div>
  );
}
