import Image from "next/image";
import tick from "@/../Public/Images/tick.svg";
import logo from "@/../Public/Images/Hospital-Logo.jpg";
import arrow from "@/../Public/Images/RightArrow.svg";

export default function RightCommitMentComp() {
  return (
    <div className="font-plusJakarta mt-16 flex flex-col gap-6 pr-10 ">
      <div className="text-xl font-bold text-[#5e5eee] flex items-center gap-4">
        <Image src={logo} alt="logo" height={40} width={40} />
        <p>ABOUT US</p>
      </div>
      <p className="text-6xl font-extrabold">
        <span className="text-[#5e5eee]">Your Journey</span> to a Healthier
        Smile Begins Here
      </p>
      <p className="text-xl">
        The goal of our clinic is to provide friendly, caring dentistry and the
        highest level of general, cosmetic, and specialist dental treatments.
        With dental practices throughout the world.
      </p>
      <div className="flex flex-col gap-6">
        <div className="flex ">
          <div className="flex flex-1 gap-2">
            <Image src={tick} alt="tick" height={32} width={32} />
            <p className="text-lg font-bold">Experienced Team</p>
          </div>
          <div className="flex flex-1 gap-2">
            <Image src={tick} alt="tick" height={32} width={32} />
            <p className="text-lg font-bold">Comprehensive Services</p>
          </div>
        </div>
        <div className="flex ">
          <div className="flex flex-1 gap-2">
            <Image src={tick} alt="tick" height={32} width={32} />
            <p className="text-lg font-bold">State-Of-The-Art Technology</p>
          </div>
          <div className="flex flex-1 gap-2">
            <Image src={tick} alt="tick" height={32} width={32} />
            <p className="text-lg font-bold">Emergency Dental Services</p>
          </div>
        </div>
      </div>
      <div className="flex items-center  bg-[#5e5eee] p-3 rounded-3xl w-60 mt-2">
        <p className="text-lg font-bold text-white">Read More About Us</p>
        <div className=" bg-[#5e5eee]  rounded-3xl ml-4">
          <Image src={arrow} alt="arrow" className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
}
