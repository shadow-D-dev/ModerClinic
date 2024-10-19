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
    <div className="bg-white rounded-[40px] flex flex-col  font-plusJakarta p-10  text-black shadow-sm">
      {/* --------------------------- */}
      {/* ------------------ */}

      <div className="flex items-center  pb-8 border-b-2 border-gray-200">
        <div className="flex-1">
          <Image
            src={icon}
            alt="brush"
            className="bg-[#5e5eee] h-16 w-16 p-2 rounded-xl"
          />
        </div>
        <div className=" flex flex-2 ">
          <p className="text-2xl font-bold">{treatment}</p>
        </div>
        <div className="flex-1 ml-4 flex justify-end items-end">
          <Image src={arrow} alt="arrow" className="h-10 w-10" />
        </div>
      </div>

      {/* ---------------------- */}
      {/*       ---------------------- */}
      <div className="text-lg mt-8">{subtext}</div>
      <div className="mt-8">
        <Image
          src={service}
          alt="service1"
          className="h-[250px] w-full rounded-[45px]"
        />
      </div>
    </div>
  );
}
