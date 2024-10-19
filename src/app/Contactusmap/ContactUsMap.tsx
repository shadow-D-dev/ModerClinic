import Image from "next/image";
import map from "@/../Public/Images/hero-img.jpg";
import background from "@/../Public/Images/testimonial-bg.png";
export default function ContactUsMap() {
  return (
    <div>
      <div className=" font-plusJakarta">
        <div className="bg-violet-950 w-full">
          <Image src={background} alt="back" />
        </div>
        <div className="bg-white w-[1500px] h-[1000px] p-4">
          <div className="">
            <div className="flex">
              <div className="flex-1 text-black">
                <Image src={map} alt="map" className="rounded-3xl" />
              </div>
              <div>
                <div className="flex-1 text-black">
                  <p className="text-[#5e5eee] text-xl font-bold">
                    Contact Now
                  </p>
                  <div className="text-5xl font-bold">
                    <span className="text-[#5e5eee] ">Get Free</span>
                    Professional<p> Consultation</p>
                  </div>
                </div>
                <div className="text-black text-lg flex flex-col gap-4 mt-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
