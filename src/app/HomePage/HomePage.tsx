import Background from "./Background";
import FooTer from "./Header";
import ProfilePage from "./ProfilePage/ProfilePage";
function HomePage() {
  return (
    <div className="relative">
      <div className="">
        <FooTer />
      </div>
      <div className="absolute w-screen ">
        <Background />
      </div>
      <div className="relative flex flex-col w-screen justify-center items-center">
        <div className="">
          <ProfilePage />
        </div>
      </div>
    </div>
  );
}
export default HomePage;
