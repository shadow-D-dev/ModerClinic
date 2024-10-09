import LeftCommit from "./LeftCommit";
import RightCommit from "./RightCommit";
export default function CommitmentPage() {
  return (
    <div className="flex w-full h-[900px] border border-white rounded">
      <div className="w-1/2">
        <LeftCommit />
      </div>
      <div className="w-1/2">
        <RightCommit />
      </div>
    </div>
  );
}
