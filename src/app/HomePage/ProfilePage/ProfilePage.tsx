import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
export default function ProfilePage() {
  return (
    <div className=" flex text-5xl gap-4">
      <div className="flex-1">
        <LeftSection />
      </div>
      <div className="flex-1">
        <RightSection />
      </div>
    </div>
  );
}
