import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
export default function ProfilePage() {
  return (
    <div className="flex border border-red-900 w-[1500px] ">
      <div className="w-1/2 mt-32 border border-green-900">
        <LeftSection />
      </div>
      <div className="w-1/2 mt-32  border border-purple-900 ">
        <RightSection />
      </div>
    </div>
  );
}
