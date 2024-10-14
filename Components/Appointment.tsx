import Image from "next/image";
import phone from "@/../Public/images/phoneicon.svg";
import plus from "@/../Public/images/plusicon.svg";
export default function AppointmentComp() {
  return (
    <div className=" flex bg-white rounded-3xl ">
      <div className="flex gap-4 flex-1 p-6  border border-r-black">
        <div className="  rounded-3xl bg-[#5e5eee] p-6 ">
          <Image src={phone} alt="phone" className="" />
        </div>
        <div>
          <p className="text-xl font-plusJakarta font-bold text-black">
            Need Dental Services?
          </p>
          <p className="text-xl font-plusJakarta text-black ">
            (+91)9764773648
          </p>
        </div>
      </div>
      <div className="flex gap-4 flex-1 p-6 border border-r-black">
        <div className="  rounded-3xl bg-[#5e5eee] p-6 ">
          <Image src={phone} alt="phone" className="" />
        </div>
        <div>
          <p className="text-xl font-plusJakarta font-bold text-black">
            Need Dental Services?
          </p>
          <p className="text-xl font-plusJakarta text-black ">
            (+91)9764773648
          </p>
        </div>
      </div>

      <div className=" flex-1 flex justify-center items-center">
        <button className=" flex gap-4 bg-[#5e5eee] rounded-[100px] px-8 py-4 text-white">
          <Image src={plus} alt="phoneicon" /> Book Now
        </button>
      </div>
    </div>
  );
}
