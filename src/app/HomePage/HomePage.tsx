import Background from "./Background";
import FooTer from "./Header";
import ProfilePage from "./ProfilePage/ProfilePage";
function HomePage() {
  return (
    <div className=" border border-white rounded  h-[1000]">
      <div className="absolute">
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
