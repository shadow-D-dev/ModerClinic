import smile from "@/../public/images/smile.jpg";
import smile1 from "@/../public/images/smileCare.jpg";
import Image from "next/image";
import StatsHomePage from "./StatsHomepage";
export default function LeftSection() {
  return (
    <>
      <div className="flex flex-col pr-16 pt-10 h-full font-plusJakarta ml-4 w-[1000px]">
        {/* Heading starts here */}
        <div
          id="heading"
          className="font-bold text-[64px] flex flex-col gap-2 "
        >
          <div className="flex  gap-3 ">
            <p className="flex gap-3">
              <span>Your</span>
              <span> smile</span>
            </p>
            <Image
              src={smile}
              alt="smile"
              className="h-[50px] w-[138px] mt-3 rounded-[100px]"
            />
            <p>matters</p>
          </div>

          <div className="flex">
            <p className="flex gap-4">
              <span>expert</span>
              <span>dental</span>
            </p>
            <Image
              src={smile1}
              alt="smile"
              className="h-[49px] w-[138px] mt-4 rounded-[100px] ml-2"
            />
            <p className="ml-2">care</p>
          </div>

          <p>a bright tommorrow</p>
        </div>
        {/* Heading ends here  */}
        <p className="text-xl mt-12 font-bold">
          Experience top-quality dental care focused on your smile&apos;s health
          and beauty. Trust us to create a brighter, healthier tomorrow
        </p>
        <StatsHomePage />
        <div className=" p-2 gap-4 flex text-xl mt-9">
          <button className=" font-plusJakarta font-bold flex gap-4 bg-[#5e5eee] rounded-[100px] px-8 py-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              width="24"
              height="24"
            >
              <g transform="translate(1.41 1.41) scale(2.81 2.81)">
                <path
                  d="M47.286 59.801L30.199 42.715c-4.37-4.37-4.37-11.455 0-15.825 2.596-2.596 2.86-6.715.618-9.621L22.844 6.934c-3.304-4.283-9.62-4.689-13.445-.864-12.532 12.532-12.532 32.85 0 45.382l29.149 29.149c12.532 12.532 32.85 12.532 45.382 0 3.825-3.825 3.42-10.14-.864-13.445l-10.335-7.973c-2.906-2.242-7.026-1.978-9.621.618C58.74 64.171 51.655 64.171 47.286 59.801z"
                  fill="#fff"
                />
                <path
                  d="M86.557 50.164c-1.901 0-3.443-1.542-3.443-3.443 0-21.965-17.87-39.836-39.836-39.836-1.901 0-3.443-1.541-3.443-3.443S41.377 0 43.279 0C69.041 0 90 20.959 90 46.721c0 1.901-1.542 3.443-3.443 3.443z"
                  fill="#fff"
                />
                <path
                  d="M71.699 50.164c-1.901 0-3.443-1.542-3.443-3.443 0-13.772-11.205-24.977-24.977-24.977-1.901 0-3.443-1.541-3.443-3.443 0-1.901 1.541-3.443 3.443-3.443 17.569 0 31.863 14.294 31.863 31.863 0 1.901-1.542 3.443-3.443 3.443z"
                  fill="#fff"
                />
              </g>
            </svg>
            Book Now
          </button>

          <button className=" font-plusJakarta font-bold flex gap-4  rounded-[100px] px-8 py-3 border border-white text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 -10 256 256"
            >
              <g transform="translate(1.41 1.41) scale(2.81 2.81)">
                <path
                  d="M 45 90 c -2.761 0 -5 -2.238 -5 -5 V 5 c 0 -2.761 2.239 -5 5 -5 c 2.762 0 5 2.239 5 5 v 80 C 50 87.762 47.762 90 45 90 z"
                  fill="#ffffff"
                />
                <path
                  d="M 85 50 H 5 c -2.761 0 -5 -2.238 -5 -5 c 0 -2.761 2.239 -5 5 -5 h 80 c 2.762 0 5 2.239 5 5 C 90 47.762 87.762 50 85 50 z"
                  fill="#ffffff"
                />
              </g>
            </svg>{" "}
            Enquries
          </button>
        </div>
      </div>
    </>
  );
}
