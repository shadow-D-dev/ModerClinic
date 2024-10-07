import Image from "next/image";
import image from "@/../Public/images/background3.jpg";
import FloatingDiv from "./Floating/FloatingDiv";
export default function RightSection() {
  return (
    <div className="relative">
      <Image
        src={image}
        alt="treatment image"
        className="rounded-3xl h-[650px] w-[570px] absolute right-8 "
      />
      <FloatingDiv />
    </div>
  );
}
