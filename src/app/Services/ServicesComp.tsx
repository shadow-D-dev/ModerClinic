import Image from "next/image";
import brush from "@/../Public/Images/BrushoverTeeth.svg";
import arrow from "@/../Public/Images/RightArrow.svg";
import service1 from "@/../Public/Images/Service3.jpg";
export default function ServiceComp() {
  return (
    <div className="bg-white rounded-[40px] flex flex-col w-[400px] font-plusJakarta p-8 text-black shadow-gray-300 shadow-lg">
      <div className="flex items-center gap-2 pb-8 border-b-2 border-gray-300">
        <div className="">
          <Image src={brush} alt="brush" className="" />
        </div>
        <p className="text-2xl font-bold">General Dentistry</p>
        <div className=" bg-[#5e5eee] p-2 rounded-3xl ml-4">
          <Image src={arrow} alt="arrow" className="h-5 w-5" />
        </div>
      </div>
      <div className="text-lg mt-8">
        We are excited to meet you and provide the best dental care for you
        family
      </div>
      <div className="mt-8">
        <Image
          src={service1}
          alt="service1"
          className="h-[200px] w-full rounded-3xl"
        />
      </div>
    </div>
  );
}
