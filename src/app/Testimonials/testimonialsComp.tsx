import Image from "next/image";
import exc from "@/../Public/Images/quote.svg";
export default function TestimonialsComp() {
  return (
    <div className="flex flex-col gap-4 font-plusJakarta">
      <div>
        <Image src={exc} alt="exclamation" />
      </div>
      <p className="font-bold text-[22px] text-gray-500 mt-6">
        Dr. Smith and the team were amazing! From the moment I walked in, I felt
        at ease. The care and attention to detail were outstanding. My smile has
        never looked better! I&apos;ve always been nervous about visiting the
        dentist, but the staff here made me feel so comfortable. They explained
        everything clearly and made sure I was okay throughout the procedure.
        The best dental experience I&apos;ve ever had! The hygienists are
        gentle.
      </p>
      <div className="flex">
        <div className="flex gap-4 items-center flex-1">
          <div>
            <Image
              src={exc}
              alt="user"
              className="bg-gray-300 p-2 rounded-full"
            />
          </div>
          <div>
            <p className="font-bold text-xl">Krushna Gutte </p>
            <p className="text-lg">Software Engineer</p>
          </div>
        </div>
        <div className="flex gap-2 flex-1 justify-end mr-10">
          <div className="h-10 w-10 bg-[#5e5eee] rounded"></div>
          <div className="h-10 w-10 bg-[#5e5eee] rounded"></div>
        </div>
      </div>
    </div>
  );
}
