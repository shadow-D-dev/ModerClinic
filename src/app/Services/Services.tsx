import ServiceComp from "./ServicesComp";
import Image from "next/image";
import brush from "@/../Public/Images/icon-why-choose-1.svg";
import service1 from "@/../Public/Images/Service1.jpg";
import service2 from "@/../Public/Images/Service2.jpg";
import service3 from "@/../Public/Images/Service3.jpg";
import arrow from "@/../Public/Images/voilet-arrow-accent.svg";
import whitearrow from "@/../Public/Images/RightArrow.svg";

export default function Services() {
  return (
    <div className="bg-[#F7F7FF] w-screen h-[1050px] pt-10 flex justify-center items-center">
      <div className="w-[1500px]">
        <div className="text-black flex justify-center items-center flex-col gap-4">
          <p className="text-[#5e5eee] font-bold text-xl">OUR SERIVCES</p>
          <p className="text-6xl font-bold">
            <span className="text-[#5e5eee]">High Quality</span> Services for
            you
          </p>
          <p className="text-2xl mt-2">
            We are comitted to sustainability. eco-friendly initiatives
          </p>
        </div>
        <div className="flex  mt-12 ml-4 mr-4 gap-10">
          {" "}
          <div className="flex-1 flex items-center justify-center">
            <ServiceComp
              icon={brush}
              treatment="General Dentistry"
              arrow={arrow}
              service={service1}
              subtext="We are excited to meet you and provide the best dental care for your family"
            />
          </div>
          <div className="flex-1 flex items-center justify-center">
            <ServiceComp
              icon={brush}
              treatment="Dental Implants"
              arrow={arrow}
              service={service2}
              subtext="We are excited to meet you and provide the best dental care for your family"
            />
          </div>
          <div className="flex-1 flex items-center justify-center">
            <ServiceComp
              icon={brush}
              treatment="Cosmetic Dentistry"
              arrow={arrow}
              service={service3}
              subtext="We are excited to meet you and provide the best dental care for your family"
            />
          </div>
        </div>
        <div className="text-3xl  flex flex-col items-center mt-10 text-black">
          <p>We believe in using the latest technology and technique to</p>
          <p className="mb-4"> ensure the best outcomes for our patient</p>
          <div className="flex items-center  bg-[#5e5eee] p-3 rounded-3xl w-60 mt-2">
            <p className="text-lg font-bold text-white">Read More About Us</p>
            <div className=" bg-[#5e5eee]  rounded-3xl ml-4">
              <Image src={whitearrow} alt="arrow" className="h-5 w-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
