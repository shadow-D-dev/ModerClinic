import Image from "next/image";
import image from "@/../Public/images/background3.jpg";
export default function RightSection() {
  return (
    <div>
      <div className="flex  p-10 ">
        <Image
          src={image}
          alt="treatment image"
          className="rounded-3xl h-[650px] w-[570px]"
        />
      </div>
      <div className="bg-white p-10 opacity-45 rounded-3xl">Best services</div>
    </div>
  );
}
