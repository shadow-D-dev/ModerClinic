import Background from "./Background";
import FooTer from "./Header";
import ProfilePage from "./ProfilePage/ProfilePage";
function HomePage() {
  return (
    <div className="  h-[1000]">
      <div className="absolute inset-0 w-full">
        <Background />
      </div>
      <div className="relative  m-5 ">
        <FooTer />
      </div>
      <div className="relative">
        <ProfilePage />
      </div>
    </div>
  );
}
export default HomePage;
