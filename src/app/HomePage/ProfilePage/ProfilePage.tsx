import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
export default function ProfilePage() {
  return (
    <div className="flex gap-10 border border-red-900 ">
      <div className="w-1/2 mt-20">
        <LeftSection />
      </div>
      <div className="w-1/2 mt-20">
        <RightSection />
      </div>
    </div>
  );
}
