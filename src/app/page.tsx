import HomePage from "./HomePage/HomePage";
import AppointmentComp from "../../components/Appointment";
import CommitMentComp from "./CommitMentComp/CommitMentComp";
import Services from "./Services/Services";
import WhyUs from "./WhyUs/WhyUs";
export default function Home() {
  return (
    <div className="">
      <div className="flex ">
        <HomePage />
      </div>
      <div className=" z-20  relative flex justify-center items-center ml-4 mr-4 mt-10 ">
        <AppointmentComp />
      </div>
      <div className="relative -top-20 w-screen">
        <CommitMentComp />
      </div>
      <div className="relative -top-20 w-screen">
        <Services />
      </div>
      <div className="relative -top-20 w-screen">
        <WhyUs />
      </div>
    </div>
  );
}
