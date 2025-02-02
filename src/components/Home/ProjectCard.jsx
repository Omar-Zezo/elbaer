import { useState } from "react";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Project1 } from "../../images/imgs";
import { Link } from "react-router-dom";

const ProjectCard = () => {
  const [price, setPrice] = useState(0);
  const [qty, setQty] = useState(1);
  return (
    <div className="w-[400px] flex flex-col mb-8 gap-5 shrink-0">
      <div className="w-full h-[302px] relative rounded-tl-xl rounded-tr-xl">
        <span className="text-white text-[12px] font-bold bg-[#00833a] absolute z-10 py-[3px] px-[10px] rounded-lg top-[10px] right-[10px]">تبرعات الأيتام</span>
        <img
          className="size-full object-cover rounded-tl-xl rounded-tr-xl"
          src={Project1}
          alt="img"
        />
      </div>
      <div className="flex flex-col gap-4">
        <p className="w-fit px-2 py-1 mr-[20%] bg-mainColor relative text-white text-sm font-bold rounded-tr-[5px] rounded-tl-[5px] percentage-arrow">
          20%
        </p>
        <div className="w-[90%] mx-auto h-[9px] bg-[#f1f1f1] relative rounded-md">
          <div className="w-[20%] h-full absolute top-0 right-0 bg-mainColor rounded-md"></div>
        </div>
        <div className="w-[90%] mx-auto flex justify-between pb-[30px] border-b border-[#e4e4e4]">
          <p className="w-fit flex font-bold items-center text-sm text-[#7e7e7e]">
            <strong className="text-black ml-1 text-[15px]">تم جمع: </strong>{" "}
            5365
          </p>
          <p className="w-fit flex items-center text-sm font-bold text-[#7e7e7e]">
            <strong className="text-black ml-1 text-[15px]">
              المبلغ المطلوب:{" "}
            </strong>{" "}
            540000 ر.س
          </p>
        </div>
        <div className="w-[90%] mx-auto flex flex-col gap-5">
          <Link
            to="/"
            className="text-lg text-secondryColor font-bold hover:text-mainColor duration-300"
          >
            علم نحو حلم
          </Link>
          <div className="w-full flex">
            <div className="w-full flex flex-col gap-2">
              <ul className="w-full flex justify-between">
                <li className="w-fit text-sm  text-[#7e7e7e]">المبلغ</li>
                <li className="w-fit text-sm text-[#7e7e7e]">الكمية</li>
              </ul>
              <div className="flex items-center">
                <FontAwesomeIcon
                  className={`text-base p-2 bg-mainColor rounded-br-md rounded-tr-md cursor-pointer text-white hover:bg-secondryColor duration-300`}
                  icon={faMinus}
                  onClick={() => {
                    if (qty > 1) {
                      setQty(qty - 1);
                    }
                  }}
                />
                <input
                  value={price}
                  type="number"
                  className="flex-1 p-1 text-center outline-none bg-[#e9ecef]"
                  onChange={(e) => setPrice(e.target.value)}
                  onFocus={() => setPrice("")}
                />
                <input
                  value={qty}
                  type="number"
                  className="w-[20%] p-1 text-center outline-none"
                  onChange={(e) => setQty(e.target.value)}
                  onFocus={() => setQty("")}
                />
                <FontAwesomeIcon
                  className="text-base p-2 bg-mainColor rounded-bl-md rounded-tl-md cursor-pointer text-white hover:bg-secondryColor duration-300"
                  icon={faPlus}
                  onClick={() => setQty(qty + 1)}
                />
              </div>
              <button className="w-fit mr-auto mt-5 py-3 px-6 rounded-tl-full rounded-bl-full bg-mainColor text-white text-lg font-bold">
                تبرع الأن
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
