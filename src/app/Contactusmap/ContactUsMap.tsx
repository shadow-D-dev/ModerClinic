import Image from "next/image";
import map from "@/../Public/Images/hero-img.jpg";
export default function ContactUsMap() {
  return (
    <div className="bg-white  flex justify-center  items-center font-plusJakarta">
      <div className="w-[1500px] h-[1000px] p-4">
        <div className="">
          <div className="flex">
            <div className="flex-1 text-black">
              <Image src={map} alt="map" className="rounded-3xl" />
            </div>
            {/* { */}
            {/*   "            -----------------------------------------------------------" */}
            {/* } */}
            <div>
              <div className="flex-1 text-black">
                <p className="text-[#5e5eee] text-xl font-bold">Contact Now</p>
                <div className="text-5xl font-bold">
                  <span className="text-[#5e5eee] ">Get Free</span>
                  Professional<p> Consultation</p>
                </div>
              </div>
              <div className="text-black text-lg flex flex-col gap-4 mt-10">
                <div>24/11 Robert Road, New York, USA</div>
                <div>24/11 Robert Road, New York, USA</div>
                <div>24/11 Robert Road, New York, USA</div>
                <div>24/11 Robert Road, New York, USA</div>
                <button className="bg-[#5e5eee] rounded-xl p-4 w-30">
                  Make an appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
