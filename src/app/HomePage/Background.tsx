import Image from "next/image";
import favicon from "@/../Public/images/LinesBackground.svg";
export default function Background() {
  return (
    <div className=" opacity-40  bg-gradient-to-r from-black to-black">
      <Image
        src={favicon}
        alt="background"
        className="w-full bg-[#5e5eee] h-[1000px] absolute bg-gradient-to-r from-[#5e5eee] to-black "
      />
    </div>
  );
}
