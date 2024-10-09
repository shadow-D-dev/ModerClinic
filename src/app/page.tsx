import CommitmentPage from "./CommitmentPage/CommitmentPage";
import HomePage from "./HomePage/HomePage";
import Appointment from "./appointment/Appointment";
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
    </div>
  );
}
