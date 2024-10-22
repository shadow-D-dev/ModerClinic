import smile from "@/../Public/Images/smile.jpg";
import smile1 from "@/../Public/Images/smileCare.jpg";
import Phoneicon from "@/../Public/Images/Call-Icon.svg";
import Plusicon from "@/../Public/Images/Plus.svg";
import Image from "next/image";
import StatsHomePage from "../../../../components/StatsHomepage";
export default function LeftSection() {
  return (
    <>
      <div className="font-plusJakarta  font-bold  p-6 ">
        {/* Heading starts here */}

        {/* 1st heading */}
        <div id="heading" className="lg:text-7xl md:text-5xl sm:text-4xl">
          <div className="flex gap-3  items-center">
            <h2 className="flex gap-3">
              <span>Your</span>
              <span> smile</span>
            </h2>
            <Image
              src={smile}
              alt="Image depicting a smile"
              height={50}
              width={138}
              className="rounded-[100px] mt-3"
            />
            <h2>matters</h2>
          </div>

          {/* 2nd heading */}
          <div className="flex items-center">
            <h2 className="flex gap-3">
              <span>expert</span>
              <span>dental</span>
            </h2>
            <Image
              src={smile1}
              alt="Image related to dental care"
              className="h-[49px] w-[138px] rounded-[100px] ml-2 mt-3"
            />
            <h2 className="ml-2">care</h2>
          </div>

          {/* 3rd heading */}
          <div className="flex">
            <h2>a bright tomorrow</h2>
          </div>
        </div>
        {/* Heading ends here  */}
        <p className="text-xl mt-10">
          Experience top-quality dental care focused on your smile&apos;s health
          and beauty. Trust us to create a brighter, healthier tomorrow
        </p>
        <StatsHomePage />
        <div className=" gap-4 flex text-xl mt-12 align-bottom">
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
