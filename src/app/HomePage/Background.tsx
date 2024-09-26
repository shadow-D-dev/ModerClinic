import Image from "next/image";
import favicon from "@/../Public/background3.jpg";
export default function Background() {
  return (
    <div className="bg-black opacity-40 h-full w-full inset-0">
      <Image src={favicon} alt="background" className="" objectFit="cover" />
    </div>
  );
}
