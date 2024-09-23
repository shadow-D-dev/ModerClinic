import Image from "next/image";
import favicon from "@/../Public/background1.jpg";
export default function Background() {
  return (
    <div className="bg-black opacity-50">
      <Image
        src={favicon}
        alt="background"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>
  );
}
