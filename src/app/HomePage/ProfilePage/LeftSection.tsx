import smile from "@/../public/images/smile.jpg";
import smile1 from "@/../public/images/smileCare.jpg";
import Phoneicon from "@/../public/images/phoneicon.svg";
import Plusicon from "@/../public/images/plusicon.svg";
import Image from "next/image";
import StatsHomePage from "./StatsHomepage";
export default function LeftSection() {
  return (
    <>
      <div
        className="flex flex-col  font-plusJakarta  font-bold 
ml-12 "
      >
        {/* Heading starts here */}
        <div id="heading" className="text-[64px] flex flex-col ">
          <div className="flex  gap-3 ">
            <p className="flex gap-3">
              <span>Your</span>
              <span> smile</span>
            </p>
            <Image
              src={smile}
              alt="smile"
              className="h-[50px] w-[138px] mt-7 rounded-[100px]"
            />
            <p>matters</p>
          </div>

          <div className="flex">
            <p className="flex gap-4">
              <span>expert</span>
              <span>dental</span>
            </p>
            <Image
              src={smile1}
              alt="smile"
              className="h-[49px] w-[138px] mt-4 rounded-[100px] ml-2"
            />
            <p className="ml-2">care</p>
          </div>

          <p>a bright tommorrow</p>
        </div>
        {/* Heading ends here  */}
        <p className="text-xl">
          Experience top-quality dental care focused on your smile&apos;s health
          and beauty. Trust us to create a brighter, healthier tomorrow
        </p>
        <StatsHomePage />
        <div className=" gap-4 flex text-xl mt-9">
          <button className=" flex gap-4 bg-[#5e5eee] rounded-[100px] px-8 py-4">
            <Image src={Phoneicon} alt="phoneicon" /> Book Now
          </button>

          <button className="flex gap-4  rounded-[100px] px-8 py-3 border border-white text-center">
            <Image src={Plusicon} alt="plusicon" />
            Enquries
          </button>
        </div>
      </div>
    </>
  );
}
