import Image from "next/image";
import doc from "@/../Public/Images/why-choose-doc-image.png";
import back from "@/../Public/Images/hero-bg.svg";
import Reason1 from "@/../Public/Images/icon-why-choose-1.svg";
import WhyUsRight from "./WhyusRight";

import WhyUsReasons from "./WhyUsReasons";
export default function WhyUs() {
  return (
    <div className="h-[900px] overflow-hidden">
      <div className="opacity-60  bg-gradient-to-r from-black to-black ">
        <Image
          src={back}
          alt="background"
          className="w-screen h-[900px] absolute  bg-gradient-to-r from-[#5e5eee] to-black "
        />
      </div>
      <div className="flex flex-col justify-center items-center ">
        <div className="relative w-[1500px]">
          <div className="flex flex-col justify-center items-center font-plusJakarta font-bold pt-20 pb-10 text-white gap-2 ">
            <p className="text-3xl ">Why Choose Us</p>
            <p className="text-6xl">
              <span className="text-[#5e5eee]">Excellence results</span> you can
              trust
            </p>
          </div>
        </div>
        <div className="flex relative  ">
          <div className="flex w-[1500px] mt-10 gap-12 ">
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
            <div className="flex-1 flex flex-col gap-20 mt-36  ">
              <WhyUsRight
                heading={"Experienced Doctor"}
                subtext1="The goal of our clinic is to provide"
                subtext2=" friendly, caring dentistry and the."
                image={Reason1}
              />
              <WhyUsRight
                heading={"Experienced Doctor"}
                subtext1="The goal of our clinic is to provide"
                subtext2=" friendly, caring dentistry and the."
                image={Reason1}
              />
              <WhyUsRight
                heading={"Experienced Doctor"}
                subtext1="The goal of our clinic is to provide"
                subtext2=" friendly, caring dentistry and the."
                image={Reason1}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
