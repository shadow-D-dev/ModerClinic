import Background from "./Background";
import FooTer from "./Header";
import ProfilePage from "./ProfilePage/ProfilePage";
function HomePage() {
  return (
    <div className="">
      <div className="relative ">
        <FooTer />
      </div>
      <div className="absolute ">
        <Background />
      </div>
      <div className="relative flex  w-screen justify-center items-center">
        <ProfilePage />
      </div>
    </div>
  );
}
export default HomePage;
