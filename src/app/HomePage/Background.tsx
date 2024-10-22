import Image from "next/image";
import background from "@/../Public/Images/hero-bg.svg";
export default function Background() {
  return (
    <div className="relative ">
      <div className=" opacity-60  bg-gradient-to-r from-black to-black">
        <Image
          src={background}
          alt="background"
          className="bg-[#5e5eee]  bg-gradient-to-r from-[#5e5eee] to-violet-950 w-screen h-screen"
        />
      </div>
    </div>
  );
}
