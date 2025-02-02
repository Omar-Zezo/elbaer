import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { navSocialIcons } from "../../constant/index.js";

const UpperNav = () => {
  return (
    <div className="bg-secondryColor">
      <div className="container flex py-3">
        <p className="text-[#9e9e9e] text-sm font-medium">
          اهلا بكم في جمعية البر
        </p>
        <ul className="flex gap-5 items-center w-fit mr-auto">
          {navSocialIcons.map((social) => (
            <li key={social.name}>
              <a href={social.link}>
              <FontAwesomeIcon className="size-4 text-[#9e9e9e] hover:text-white duration-300" icon={social.icon} />
              </a>
            </li>
          ))}
          
        </ul>
      </div>
    </div>
  );
};

export default UpperNav;
