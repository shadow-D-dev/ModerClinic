import Image from "next/image";
import commit1 from "@/../Public/Images/commitment1.jpg";
import commit2 from "@/../Public/Images/commitment2.jpg";
import Exp from "@/../Public/Images/about-experience-circle.png";
export default function LeftCommitMentComp() {
  return (
    <div className="ml-6 mt-6">
      <div className="absolute">
        <Image
          src={commit1}
          alt="treatment"
          height={450}
          width={450}
          className="rounded-[50px]"
        />
      </div>
      <div className="relative top-80 left-40">
        <Image
          src={commit2}
          alt="chair"
          height={350}
          width={450}
          className="rounded-[50px] border-white border-8"
        />
      </div>
      <div className="relative bottom-72 left-96">
        <Image src={Exp} alt="Experience" />
      </div>
    </div>
  );
}
