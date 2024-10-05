import smile from "@/../public/images/smile.jpg";
import smile1 from "@/../public/images/smileCare.jpg";
import Image from "next/image";
export default function LeftSection() {
  return (
    <>
      <div className="flex flex-col pt-10 h-full">
        {/* Heading starts here */}
        <div id="heading">
          <div className="flex overflow-hidden gap-3 ">
            <p>Your</p>
            <p>smile</p>
            <Image src={smile} alt="smile" className="h-10 w-40 rounded-xl" />
            <p>matters</p>
          </div>
          <div className="flex">
            <p>care</p>
            <Image src={smile1} alt="smile" className="h-10 w-40 rounded-xl" />
          </div>
          <p>A bright tommorrow</p>
        </div>
        {/* Heading ends here  */}

        <p className="text-xl">
          Experience top-quality dental care focused on your smile&apos;s health
          and beauty.
        </p>
        <div>stats comp</div>
        <div className="m-2 p-2 gap-4 flex text-3xl">
          <button className="bg-purple-900 p-2 rounded-3xl ">Book Now</button>
          <button className="border-white rounded-3xl border p-2 ">
            Enquries
          </button>
        </div>
      </div>
    </>
  );
}
