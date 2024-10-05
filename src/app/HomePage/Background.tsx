import Image from "next/image";
import favicon from "@/../Public/images/background3.jpg";
export default function Background() {
  return (
    <div className="bg-black opacity-40">
      <Image src={favicon} alt="background" className="w-full h-[800px]" />
    </div>
  );
}
