import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
export default function ProfilePage() {
  return (
    <div className="flex w-[1500px] md:flex-col md:w-[1000px]">
      <div className="w-1/2 mt-32">
        <LeftSection />
      </div>
      <div className="w-1/2 mt-32  ">
        <RightSection />
      </div>
    </div>
  );
}
