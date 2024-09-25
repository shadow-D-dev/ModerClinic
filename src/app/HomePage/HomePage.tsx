import Background from "./Background";
import FooTer from "./Header";
import ProfilePage from "./ProfilePage/ProfilePage";
function HomePage() {
  return (
    <div>
      <div className="absolute">
        <Background />
      </div>
      <div className="relative">
        <FooTer />
      </div>
      <div className="relative">
        <ProfilePage />
      </div>
    </div>
  );
}
export default HomePage;
