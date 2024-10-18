import Image, { StaticImageData } from "next/image";

export interface ServicesProps {
  icon: StaticImageData;
  treatment: string;
  arrow: StaticImageData;
  service: StaticImageData;
  subtext: string;
}
export default function ServiceComp({
  icon,
  treatment,
  arrow,
  service,
  subtext,
}: ServicesProps) {
  return (
    <div className="bg-white rounded-[40px] flex flex-col w-[400px] font-plusJakarta p-8 text-black shadow-sm">
      <div className="flex items-center gap-2 pb-8 border-b-2 border-gray-300">
        <div className="">
          <Image src={icon} alt="brush" className="" />
        </div>
        <p className="text-2xl font-bold">{treatment}</p>
        <div className=" bg-[#5e5eee] p-2 rounded-3xl ml-4">
          <Image src={arrow} alt="arrow" className="h-5 w-5" />
        </div>
      </div>
      <div className="text-lg mt-8">{subtext}</div>
      <div className="mt-8">
        <Image
          src={service}
          alt="service1"
          className="h-[200px] w-full rounded-3xl"
        />
      </div>
    </div>
  );
}
