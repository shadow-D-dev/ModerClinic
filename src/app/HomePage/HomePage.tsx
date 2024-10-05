import Background from "./Background";
import FooTer from "./Header";
import ProfilePage from "./ProfilePage/ProfilePage";
function HomePage() {
  return (
    <div>
      <div className="absolute inset-0 w-full">
        <Background />
      </div>
      <div className="relative z-10 m-5 ">
        <FooTer />
      </div>
      <div className="relative z-10 m-2">
        <ProfilePage />
      </div>
    </div>
  );
}
export default HomePage;
