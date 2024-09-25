export default function Header() {
  return (
    <div className="flex justify-center items-center  p-7 backdrop-blur-md rounded-[50px] text-3xl shadow-4xl  ">
      <div className="flex-1">LOGO</div>
      <div className="flex flex-1 justify-evenly">
        <div>About Us</div>
        <div>Services</div>
        <div>Contact Us</div>
      </div>
      <div className="flex-1 flex justify-end">Help</div>
    </div>
  );
}
