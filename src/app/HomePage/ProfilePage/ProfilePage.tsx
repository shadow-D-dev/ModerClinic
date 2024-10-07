import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
export default function ProfilePage() {
  return (
    <div className=" flex text-5xl gap-4 w-full h-[700px]">
      <div className="w-1/2">
        <LeftSection />
      </div>
      <div className="w-1/2">
        <RightSection />
      </div>
    </div>
  );
}
