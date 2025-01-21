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
            <li>
              <a href={social.link}>
                <img
                  width={16}
                  height={16}
                  src={social.icon}
                  alt={social.name}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UpperNav;
