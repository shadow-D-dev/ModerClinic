import HomePage from "./HomePage/HomePage";
import AppointmentComp from "../../components/Appointment";
export default function Home() {
  return (
    <div className="mb-96">
      <div className="flex">
        <HomePage />
      </div>
      <div className=" relative mt-10  flex justify-center items-center m-4">
        <AppointmentComp />
      </div>
    </div>
  );
}
