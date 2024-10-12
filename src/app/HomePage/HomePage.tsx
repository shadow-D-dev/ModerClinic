import Background from "./Background";
import FooTer from "./Header";
import ProfilePage from "./ProfilePage/ProfilePage";
function HomePage() {
  return (
    <div className="absolute mt-[1400px]">
      <div className=" ">
        <Background />
      </div>
      <div className="relative ">
        <FooTer />
      </div>
      <div className="relative">
        <ProfilePage />
      </div>
    </div>
  );
}
export default HomePage;
