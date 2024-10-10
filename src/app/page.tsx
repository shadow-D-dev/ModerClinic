import CommitmentPage from "./CommitmentPage/CommitmentPage";
import HomePage from "./HomePage/HomePage";
import ImageSlider from "./ImageSlider/ImageSlider";
import ServicesPage from "./ServicesPage/ServicesPage";
import Appointment from "./appointment/Appointment";
import WhyUs from "./WhyUs/WhyUs";
export default function Home() {
  return (
    <div className="flex flex-col">
      <div>
        <HomePage />
      </div>
      <div>
        <Appointment />
      </div>
      <div>
        <CommitmentPage />
      </div>
      <div>
        <ServicesPage />
      </div>
      <div>
        <ImageSlider />
      </div>
      <div>
        <WhyUs />
      </div>
    </div>
  );
}
