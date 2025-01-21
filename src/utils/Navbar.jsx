import MiddleNav from "../components/Navbar/MiddleNav";
import NavigationLinks from "../components/Navbar/NavigationLinks";
import UpperNav from "../components/Navbar/UpperNav";

const Navbar = () => {
  return (
    <nav className="relative z-50">
      <div>
        <UpperNav/>
        <MiddleNav/>
        <NavigationLinks/>
      </div>
    </nav>
  );
};

export default Navbar;
