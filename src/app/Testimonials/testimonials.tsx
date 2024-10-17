import Image from "next/image";
import test from "@/../Public/Images/hero-img.jpg";
import StatsTestimonials from "./statsTestimonials";
import TestimonialsComp from "./testimonialsComp";
export default function Testimonials() {
  return (
    <div className="w-screen bg-white h-[1000px] text-black">
      <div className=" flex justify-center items-center">
        <div className="w-[1500px]">
          <div className="flex flex-col justify-center items-center mt-10 gap-4">
            <p className="text-lg font-bold text-[#5e5eee]">TESTIMONIALS</p>
            <p className="text-6xl font-bold ">
              <span className="text-[#5e5eee]">What Our</span> Client Say
            </p>
            <p className=" text-xl">
              We are commited to sustainability. eco-friendly initiatives
            </p>
          </div>
          <div className="flex mt-10">
            <div className="flex-1 overflow-hidden">
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
            <div className="flex-1">
              <TestimonialsComp />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
