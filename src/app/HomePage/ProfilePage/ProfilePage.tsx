import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
export default function ProfilePage() {
  return (
    <div className=" flex gap-2 text-5xl justify-center">
      <LeftSection />
      <RightSection />
    </div>
  );
}
