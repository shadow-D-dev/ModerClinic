import Image from "next/image";
import whiteBackground from "@/../Public/Images/whiteBackground.svg";
import LeftCommitMentComp from "./LeftCommitMentComp";
import RightCommitMentComp from "./RightCommitMentCompCommitMentComp";
export default function CommitMentComp() {
  return (
    <div className="">
      <div className="">
        <Image src={whiteBackground} alt="white-background" className="" />
        <div>
          <LeftCommitMentComp />
        </div>
        <div>
          <RightCommitMentComp />
        </div>
      </div>
    </div>
  );
}
