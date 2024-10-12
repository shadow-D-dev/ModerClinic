import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
export default function ProfilePage() {
  return (
    <div className=" flex h-[800px]">
      <div className="">
        <LeftSection />
      </div>
      <div className="">
        <RightSection />
      </div>
    </div>
  );
}
