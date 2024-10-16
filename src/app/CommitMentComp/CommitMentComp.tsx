import LeftCommitMentComp from "./LeftCommitMentComp";
import RightCommitMentComp from "./RightCommitMentCompCommitMentComp";
export default function CommitMentComp() {
  return (
    <div className="">
      <div className="relative">
        <div className="bg-white w-screen h-[1000px] relative">{""}</div>
        <div className="absolute top-24 w-screen  flex justify-center items-center ">
          <div className="text-black w-[1500px]">
            <div className="flex">
              <div className="flex-1">
                <LeftCommitMentComp />
              </div>
              <div className="flex-1">
                <RightCommitMentComp />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
