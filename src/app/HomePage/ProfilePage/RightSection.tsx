import Image from "next/image";
import image from "@/../Public/images/background3.jpg";
export default function RightSection() {
  return (
    <div className="w-full">
      <div className="flex absolute p-10 ">
        <Image
          src={image}
          alt="treatment image"
          className="rounded-3xl h-[650px] w-[570px]"
        />
      </div>
      <div className="relative top-96">Best services</div>
    </div>
  );
}
