import Image from "next/image";
import star from "@/../Public/Images/star.svg";
import CountUpComp from "../../../components/countUP";

export default function StatsTestimonials() {
  return (
    <div className="rounded-[40px] bg-[#5e5eee] p-4 text-white w-[550px] border-8 border-white font-plusJakarta">
      <div className="flex border-b-2 border-gray-200 ">
        <div className="text-6xl font-bold flex-1 flex justify-center ">
          <CountUpComp end={4.7} duration={5} suffix={"/5"} />
        </div>
        <div className="font-bold text-lg flex-1">
          This Rate Is Given By User After Visiting Our Location
        </div>
      </div>
      <div className="flex mt-10 mb-4">
        <div className="flex bg-white rounded p-2">
          <Image src={star} alt="star" className="bg-white" />
          <Image src={star} alt="star" className="bg-white" />
          <Image src={star} alt="star" className="bg-white" />
          <Image src={star} alt="star" className="bg-white" />
          <Image src={star} alt="star" className="bg-white" />
        </div>
        <div className="text-xl font-bold ml-4">For Excellence Services</div>
      </div>
    </div>
  );
}
