export default function Header() {
  return (
    <div className="bg-white w-screen flex justify-center items-center text-black">
      <div className="flex justify-center items-center   p-7 text-3xl font-plusJakarta font-bold border border-white w-[1500px] h-[110px] ">
        <div className=" flex flex-1">shree Balaji clinic</div>
        <div className="flex flex-1 justify-evenly">
          <div>About Us</div>
          <div>Services</div>
          <div>Contact Us</div>
        </div>
        <div className="flex-1 flex justify-end">Help</div>
      </div>
    </div>
  );
}
