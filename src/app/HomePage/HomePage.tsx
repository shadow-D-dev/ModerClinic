import Background from "./Background";
import FooTer from "./Header";
import ProfilePage from "./ProfilePage/ProfilePage";
function HomePage() {
  return (
    <div className="relative">
      <div className=" relative">
        <FooTer />
      </div>
      <div className="">
        <Background />
      </div>
      <div className="relative flex  w-screen justify-center items-center">
        <div className="">
          <ProfilePage />
        </div>
      </div>
    </div>
  );
}
export default HomePage;
