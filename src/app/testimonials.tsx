import Image from "next/image";
import test from "@/../Public/Images/hero-img.jpg";
import star from "@/../Public/Images/star.svg";
import CountUpComp from "../../components/countUP";
export default function Testimonials() {
  return (
    <div className="w-screen bg-white h-[1000px] text-black">
      <div className=" flex justify-center items-center">
        <div className="w-[1500px]">
          <div className="flex justify-center items-center">
            <p>TESTIMONIALS</p>
            <p>What Our Client Say</p>
            <p>We are commited to sustainability. eco-friendly initiatives</p>
          </div>
          <div className="flex">
            <div className="flex-1 overflow-hidden">
              <Image
                src={test}
                alt="test"
                className="h-[500px] w-[500px] rounded-[50px] relative"
              />
              <div className="rounded-[40px] bg-[#5e5eee] p-4 text-white w-[550px] border-8 border-white font-plusJakarta absolute top-96 left-16">
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
                  <div className="text-xl font-bold ml-4">
                    For Excellence Services
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1">testimonials</div>
          </div>
        </div>
      </div>
    </div>
  );
}
