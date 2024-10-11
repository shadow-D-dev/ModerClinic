import Image from "next/image";
import image from "@/../Public/images/hero-img.jpg";
import star from "@/../Public/images/star.svg";
export default function RightSection() {
  return (
    <div className=" mt-16">
      <Image
        src={image}
        alt="treatment image"
        className="rounded-[40px] h-[650px] w-[570px] absolute right-8 "
      />
      <div className="relative z-10 bg-white shadow-md top-80 left-32 w-[300px] p-6 rounded-3xl  text-black">
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
