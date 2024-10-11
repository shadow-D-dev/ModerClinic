import CountUpComp from "../../../../Components/countUP";
export default function StatsHomePage() {
  return (
    <div>
      {" "}
      <div className=" border-t border-b border-white mt-14 flex p-7 text-5xl gap-14 mr-24">
        <div className="flex gap-5 flex-col">
          <div className="font-plusJakarta font-bold">
            <CountUpComp end={24} duration={5} suffix={"X 7"} />
          </div>
          <p className="text-xl font-bold">Emergency Service</p>
        </div>

        <div className="flex gap-5 flex-col">
          <div className="font-plusJakarta font-bold">
            <CountUpComp end={25} duration={5} suffix={"K"} />
          </div>
          <p className="text-xl font-bold">Recover Patient</p>
        </div>
        <div className="flex gap-5 flex-col">
          <div className="font-plusJakarta font-bold">
            <CountUpComp end={15} duration={5} suffix={"+"} />
          </div>
          <p className="text-xl font-bold">Market Experiences</p>
        </div>
      </div>
    </div>
  );
}
