import Image from "next/image";
import logo from "@/../Public/Images/Hospital-Logo.jpg";
import phone from "@/../Public/Images/Call-Icon.svg";
export default function Header() {
  return (
    <div className="bg-white w-screen flex justify-center items-center text-black overflow-hidden">
      <div className="flex justify-center items-center   p-7 font-plusJakarta   w-[1500px] h-[110px] ">
        <div className="flex-1">
          <Image src={logo} alt="logo" className="h-32 w-32" />
        </div>
        <div className="flex flex-1 font-bold gap-10 text-xl">
          <div>Home</div>
          <div>About Us</div>
          <div>Services</div>
          <div>Results</div>
        </div>
        <div className="flex-1 flex justify-end gap-4 items-center">
          <div>
            <Image
              src={phone}
              alt="phone"
              className="bg-[#5e5eee] h-12 w-12 p-2 rounded-full"
            />
          </div>
          <div>
            <p className="text-xl">Need Help?</p>
            <p className="font-bold text-xl">(+91) 8356-858428</p>
          </div>
        </div>
      </div>
    </div>
  );
}
