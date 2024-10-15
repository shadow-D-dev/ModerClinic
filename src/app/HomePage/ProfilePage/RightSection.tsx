import Image from "next/image";
import image from "@/../Public/Images/hero-img.jpg";
import star from "@/../Public/Images/star.svg";
export default function RightSection() {
  return (
    <div className=" relative flex justify-end mr-1">
      <div className="">
        <Image
          src={image}
          alt="treatment image"
          className=" relative rounded-[40px] h-[670px] w-[630px] "
        />
      </div>
      <div className="absolute  bg-white bottom-40 left-10 w-[300px] p-6 rounded-3xl  text-black">
        <div className="flex justify-start gap-2">
          <Image src={star} alt="star" />
          <Image src={star} alt="star" />
          <Image src={star} alt="star" />
          <Image src={star} alt="star" />
          <Image src={star} alt="star" />
        </div>
        <p className="text-xl pt-4 font-plusJakarta font-bold">
          Best Services & 5 Star
        </p>
        <p className="text-lg font-plusJakarta">
          Hospital are crucial institutions in our society
        </p>
      </div>
    </div>
  );
}
