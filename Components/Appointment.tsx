import Image from "next/image";
import phone from "@/../Public/Images/phoneicon.svg";
import plus from "@/../Public/Images/PlusSign.svg";
import time from "@/../Public/Images/24x7.svg";

export default function AppointmentComp() {
  return (
    <div className=" flex bg-white rounded-3xl w-[1500px] p-10  mt-[70px] gap-6 shadow-md shadow-gray-200">
      <div className="flex flex-1 border  border-white border-r-black gap-6 ">
        <div className="rounded-2xl bg-[#5e5eee] p-6">
          <Image src={phone} alt="phone" width={35} height={40} />
        </div>
        <div className=" flex flex-col gap-4">
          <p className="text-2xl font-plusJakarta font-bold text-black">
            Need Dental Services?
          </p>
          <p className="text-xl font-plusJakarta text-black ">
            (+91)9764773648
          </p>
        </div>
      </div>
      <div className="flex flex-1 border  border-white border-r-black gap-6 ">
        <div className="rounded-2xl bg-[#5e5eee] p-6">
          <Image src={time} alt="phone" width={35} height={40} />
        </div>
        <div className=" flex flex-col gap-4">
          <p className="text-2xl font-plusJakarta font-bold text-black">
            Need Dental Services?
          </p>
          <p className="text-xl font-plusJakarta text-black ">
            (+91)9764773648
          </p>
        </div>
      </div>

      <div className=" flex-1 flex justify-center items-center">
        <button className=" flex gap-4 bg-[#5e5eee] rounded-[100px] px-8 py-5 text-white text-xl font-plusJakarta font-bold">
          Make An Appoitment
          <Image src={plus} alt="phoneicon" />
        </button>
      </div>
    </div>
  );
}
