import Image from "next/image";
import commit1 from "@/../public/Images/commitment1.jpg";
import commit2 from "@/../public/Images/commitment2.jpg";
import Exp from "@/../public/Images/about-experience-circle.png";
export default function LeftCommitMentComp() {
  return (
    <div className="ml-6 mt-6">
      <div className="absolute">
        <Image
          src={commit1}
          alt="treatment"
          className="rounded-[50px] h-[450px] w-[450px]"
        />
      </div>
      <div className="relative top-80 left-40">
        <Image
          src={commit2}
          alt="chair"
          className="rounded-[50px] h-[350px] w-[450px]  border-white border-8"
        />
      </div>
      <div className="relative bottom-72 left-96">
        <Image src={Exp} alt="Experience" />
      </div>
    </div>
  );
}
