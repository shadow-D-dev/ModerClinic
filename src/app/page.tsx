import HomePage from "./HomePage/HomePage";
import AppointmentComp from "../../Components/Appointment";
export default function Home() {
  return (
    <div className="">
      <div className="flex">
        <HomePage />
      </div>
      <div className="ml-5 mr-5 relative mt-10  max-h-[1500px]">
        <AppointmentComp />
      </div>
    </div>
  );
}
