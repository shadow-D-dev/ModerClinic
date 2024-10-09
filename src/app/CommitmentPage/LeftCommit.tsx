import Image from "next/image";
import main from "@/..//Public/images/background.jpg";
export default function LeftCommit() {
  return (
    <div className="">
      <div className="absolute">
        <Image
          src={main}
          alt="commit image"
          className="w-[500px] h-[500px] rounded-3xl"
        />
      </div>
      <div className="relative top-96 left-40    ">
        <Image
          src={main}
          alt="commit image"
          className="w-[500px] h-[350px] rounded-3xl"
        />
      </div>
      <div className="relative bottom-80 left-96    ">
        <Image
          src={main}
          alt="commit image"
          className="w-[200px] h-[150px] rounded-3xl"
        />
      </div>
    </div>
  );
}
