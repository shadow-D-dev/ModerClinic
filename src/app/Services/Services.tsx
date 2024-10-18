import ServiceComp from "./ServicesComp";
import Image from "next/image";
import tick from "@/../Public/Images/tick.svg";
import brush from "@/../Public/Images/BrushoverTeeth.svg";
import service1 from "@/../Public/Images/Service3.jpg";
import arrow from "@/../Public/Images/RightArrow.svg";

export default function Services() {
  return (
    <div className="bg-[#F7F7FF] w-screen h-[1000px] pt-10 flex justify-center items-center">
      <div className="w-[1500px]">
        <div className="text-black flex justify-center items-center flex-col gap-4">
          <p className="text-[#5e5eee]">OUR SERIVCES</p>
          <p className="text-6xl font-bold">
            <span className="text-[#5e5eee]">High Quality</span> Services for
            you
          </p>
          <p className="text-xl mt-2">
            We are comitted to sustainability. eco-friendly initiatives
          </p>
        </div>
        <div className="flex justify-evenly mt-12">
          {" "}
          <div>
            <ServiceComp
              icon={brush}
              treatment="General Dentistry"
              arrow={arrow}
              service={service1}
              subtext="We are excited to meet you and provide the best dental care for your family"
            />
          </div>
          <div>
            <ServiceComp
              icon={brush}
              treatment="General Dentistry"
              arrow={arrow}
              service={service1}
              subtext="We are excited to meet you and provide the best dental care for your family"
            />
          </div>
          <div>
            <ServiceComp
              icon={brush}
              treatment="General Dentistry"
              arrow={arrow}
              service={service1}
              subtext="We are excited to meet you and provide the best dental care for your family"
            />
          </div>
        </div>
        <div className="text-2xl flex flex-col items-center mt-10 text-[#5e5eee]">
          <p>We believe in using the latest technology and technique to</p>
          <p> ensure the best outcomes for our patient</p>
          <div className="flex flex-1 gap-2 bg-gray-400 p-4 rounded-3xl text-white mt-4">
            View All Services
            <Image src={tick} alt="tick" className="h-8 w-8" />
          </div>
        </div>
      </div>
    </div>
  );
}
