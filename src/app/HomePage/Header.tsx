import Image from "next/image";
import logo from "@/../Public/Images/Hospital-Logo.jpg";
import phone from "@/../Public/Images/Call-Icon.svg";
import HamburgerMenu from "../../../components/Hamburger";
export default function Header() {
  const pages = ["Home", "About", "Services", "Results"];
  return (
    <div className="bg-white w-screen flex justify-center items-center text-black overflow-hidden">
      <div className="flex justify-center items-center   p-5 font-plusJakarta   w-[1500px] lg:h-[110px] md:h-[100px] sm:h-[100px] ">
        <div className="flex-1">
          <Image
            src={logo}
            alt="logo"
            className="lg:h-32 lg:w-32 md:h-22 md:w-22 sm:h-20 sm:w-20"
          />
        </div>
        <div className=" sm:hidden lg:flex md:flex flex-1 font-bold gap-10 text-xl ">
          {pages.map((page) => (
            <div key={page}>{page}</div>
          ))}
        </div>
        <div className="flex-1  justify-end gap-4 items-center lg:flex md:flex sm:hidden">
          <div>
            <Image
              src={phone}
              alt="phone"
              className="bg-[#5e5eee] h-12 w-12 p-2 rounded-full"
            />
          </div>
          <div className="">
            <p className="text-xl">Need Help?</p>
            <p className="font-bold text-xl ">(+91) 8356-858428</p>
          </div>
        </div>
        <div className="lg:hidden md:hidden sm:block">
          <HamburgerMenu />
        </div>
      </div>
    </div>
  );
}
