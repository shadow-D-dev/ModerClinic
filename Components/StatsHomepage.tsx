import CountUpComp from "./countUP";
export default function StatsHomePage() {
  return (
    <div>
      <div className=" border-t-2 border-b-2 border-gray-400 mt-14 flex p-7 text-5xl gap-12 overflow-hidden">
        <div className="flex gap-5 flex-col justify-center items-center">
          <div className="font-plusJakarta font-bold">
            <CountUpComp end={24} duration={5} suffix={"X 7"} />
          </div>
          <p className="text-lg font-bold flex  gap-2">
            <span>Emergency </span>
            <span>Service</span>
          </p>
        </div>

        <div className="flex gap-5 flex-col  justify-center items-center">
          <div className="font-plusJakarta font-bold">
            <CountUpComp end={25} duration={5} suffix={"K"} />
          </div>
          <p className="text-lg font-bold flex  gap-2">
            <span>Recover </span>
            <span>Patient</span>
          </p>
        </div>
        <div className="flex gap-5 flex-col  justify-center items-center">
          <div className="font-plusJakarta font-bold ">
            <CountUpComp end={15} duration={5} suffix={"+"} />
          </div>
          <p className="text-lg font-bold flex  gap-2">
            <span>Market </span>
            <span>Experience</span>
          </p>
        </div>
      </div>
    </div>
  );
}
