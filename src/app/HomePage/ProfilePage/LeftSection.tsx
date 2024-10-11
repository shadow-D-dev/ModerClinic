import smile from "@/../public/images/smile.jpg";
import smile1 from "@/../public/images/smileCare.jpg";
import Image from "next/image";
import CountUpComp from "../../../../Components/countUP";
export default function LeftSection() {
  return (
    <>
      <div className="flex flex-col pt-10 h-full font-plusJakarta ">
        {/* Heading starts here */}
        <div id="heading" className="font-bold text-[64px]">
          <div className="flex  gap-3 ">
            <p>Your</p>
            <p>smile</p>
            <Image
              src={smile}
              alt="smile"
              className="h-[50px] w-[138px] mt-3 rounded-[100px]"
            />
            <p>matters</p>
          </div>
          <div className="flex">
            <p>expert dental care</p>
            <Image
              src={smile1}
              alt="smile"
              className="h-[49px] w-[138px] mt-4 rounded-[100px] ml-2"
            />
          </div>
          <p>a bright tommorrow</p>
        </div>
        {/* Heading ends here  */}

        <p className="text-xl mt-12 font-bold">
          Experience top-quality dental care focused on your smile&apos;s health
          and beauty.
        </p>

        <div className="font-plusJakarta font-bold">
          <CountUpComp end={24} duration={5} suffix={"X7"} />
        </div>

        <div className="m-2 p-2 gap-4 flex text-3xl">
          <button className="bg-purple-900 p-2 rounded-3xl ">Book Now</button>
          <button className="border-white rounded-3xl border p-2 ">
            Enquries
          </button>
        </div>
      </div>
    </>
  );
}
