import Image from "next/image";
import favicon from "@/../Public/images/LinesBackground.svg";
export default function Background() {
  return (
    <div className=" opacity-60  bg-gradient-to-r from-black to-black">
      <Image
        src={favicon}
        alt="background"
        className="bg-[#5e5eee]  bg-gradient-to-r from-[#5e5eee] to-black "
      />
    </div>
  );
}
