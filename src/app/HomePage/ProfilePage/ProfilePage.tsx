import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
export default function ProfilePage() {
  return (
    <div className="flex w-[1500px] sm:flex-col md:flex-col lg:flex-row">
      <div className="lg:w-1/2 md:w-full sm:w-full mt-32">
        <LeftSection />
      </div>
      <div className="lg:w-1/2 md:w-full sm:w-full mt-32  ">
        <RightSection />
      </div>
    </div>
  );
}
