import Image from "next/image";
import favicon from "@/../Public/background3.jpg";
export default function Background() {
  return (
    <div className="bg-black opacity-40">
      <Image src={favicon} alt="background" />
    </div>
  );
}
