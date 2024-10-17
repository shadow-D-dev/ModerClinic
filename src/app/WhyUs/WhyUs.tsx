import Image from "next/image";
import doc from "@/../Public/Images/why-choose-image.png";
import back from "@/../Public/Images/LinesBackground.svg";
import Reason1 from "@/../Public/Images/whitening.svg";
import WhyUsReasons from "./WhyUsReasons";
export default function WhyUs() {
  return (
    <div className="w-screen h-[1000px] relative ">
      <div className="opacity-60  bg-gradient-to-r from-black to-black ">
        <div className="absolute  bg-gradient-to-r from-[#5e5eee] to-black ">
          <Image src={back} alt="background" className="w-screen h-[830px]" />
        </div>
      </div>
      <div className="relative">
        <div className="flex flex-col justify-center items-center font-plusJakarta font-bold pt-10 text-white gap-2">
          <p className="text-2xl ">Why Choose Us</p>
          <p className="text-6xl">
            <span className="text-[#5e5eee]">Excellence results</span> you can
            trust
          </p>
        </div>
      </div>
      <div className="flex relative   justify-center items-center">
        <div className="flex w-[1500px] mt-10 ">
          <div className="flex-1 flex flex-col gap-20 mt-36 ml-6">
            <WhyUsReasons
              heading={"Experienced Doctor"}
              subtext1="The goal of our clinic is to provide"
              subtext2=" friendly, caring dentistry and the."
              image={Reason1}
            />
            <WhyUsReasons
              heading={"Experienced Doctor"}
              subtext1="The goal of our clinic is to provide"
              subtext2=" friendly, caring dentistry and the."
              image={Reason1}
            />
            <WhyUsReasons
              heading={"Experienced Doctor"}
              subtext1="The goal of our clinic is to provide"
              subtext2=" friendly, caring dentistry and the."
              image={Reason1}
            />
          </div>
          <div className="flex-1">
            <Image src={doc} alt="doc" className="h-[650px] w-[450px]" />
          </div>
          <div className="flex-1 flex flex-col gap-20 mt-36 mr-6">
            <WhyUsReasons
              heading={"Experienced Doctor"}
              subtext1="The goal of our clinic is to provide"
              subtext2=" friendly, caring dentistry and the."
              image={Reason1}
            />
            <WhyUsReasons
              heading={"Experienced Doctor"}
              subtext1="The goal of our clinic is to provide"
              subtext2=" friendly, caring dentistry and the."
              image={Reason1}
            />
            <WhyUsReasons
              heading={"Experienced Doctor"}
              subtext1="The goal of our clinic is to provide"
              subtext2=" friendly, caring dentistry and the."
              image={Reason1}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
