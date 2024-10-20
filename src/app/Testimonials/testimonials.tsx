import Image from "next/image";
import test from "@/../Public/Images/hero-img.jpg";
import StatsTestimonials from "./statsTestimonials";
import TestimonialsComp from "./testimonialsComp";
import background from "@/../Public/Images/testimonial-bg.png";
import plus from "@/../Public/Images/Plus.svg";

export default function Testimonials() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-screen  h-[1000px] text-black">
        <div className="bg-white relative  w-screen h-[500px]"></div>
        <div className=" bg-gradient-to-r from-violet-950 to-black w-full absolute flex justify-center items-center">
          <Image src={background} alt="back" height={700} />
        </div>
        <div className="flex justify-center items-center">
          <div className=" absolute top-10 w-[1500px] ">
            <div className=" flex justify-center items-center">
              <div className="w-[1500px]">
                <div className="flex ml-10  mt-20 gap-14 items-center ">
                  <div>
                    <p className="text-lg font-bold text-[#6e5eee]">
                      TESTIMONIALS
                    </p>
                    <p className="text-6xl font-bold  flex flex-col">
                      <span className="text-[#5e5eee]">
                        Real stories of exceptional care
                      </span>{" "}
                      <span>and transformative smiles</span>
                    </p>
                  </div>
                  <div className="flex justify-end items-end ml-20">
                    <button className=" flex gap-4 bg-[#5e5eee] rounded-[100px] px-8 py-5 text-white text-xl font-plusJakarta font-bold">
                      All Our Services
                      <Image src={plus} alt="phoneicon" />
                    </button>
                  </div>
                </div>
                {/* ---------------------------------------------- */}
                {/* ---------------------------------------------- */}
                <div className="flex mt-16">
                  <div className="flex-1 overflow-hidden ml-4">
                    <div className="">
                      {" "}
                      <Image
                        src={test}
                        alt="test"
                        className="h-[500px] w-[470px] rounded-[50px] "
                      />
                    </div>
                    <div className="relative -top-20 -right-20">
                      <StatsTestimonials />
                    </div>
                  </div>
                  <div className="flex-1 mr-10 mt-2 p-14 pb-4 rounded-3xl shadow-xl h-[520px] bg-white">
                    <TestimonialsComp />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
