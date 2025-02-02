import React from "react";
import { AboutUs } from "../../images/imgs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { HandsHolding } from "../../images/svg";

const AboutHome = () => {
  return (
    <section className="bg-[#e1e1e1] py-[25px]">
      <div className="container flex justify-between">
        <div className="w-[45%] max-h-[500px] rounded-xl">
          <img
            src={AboutUs}
            alt="about-us"
            className="size-full object-cover rounded-xl"
          />
        </div>
        <div className="w-1/2 flex flex-col gap-5 px-4">
          <h3 className="text-lg text-[#aaa] font-medium">عن جمعية البر</h3>
          <p className="text-[36px] text-secondryColor font-bold">
            أهلا بكم في جمعية البر بجدة
          </p>
          <p className="text-lg text-[#7e7e7e] font-medium">
            تأسست جمعية البر بجدة في 25/12/1402هـ وهي جمعية خيرية ذات شخصية
            اعتبارية تشمل خدماتها محافظة جدة وما حولها من القرى .ورئيسها الفخري
            صاحب السمو الملكي أمير منطقة مكة المكرمة وتعمل تحت إشراف وزارة العمل
            والتنمية الاجتماعية ومسجلة برقم 62 .
          </p>
          <div className="flex gap-5 mt-10">
            <div className="w-1/2 flex flex-col gap-3">
              <div>
                <div className="flex items-center gap-[10px] font-bold">
                  <FontAwesomeIcon
                    className="text-xl text-mainColor"
                    icon={faCircleCheck}
                  />
                  <h3 className="text-lg text-secondryColor">كن متبرعا</h3>
                </div>
                <p className="text-lg text-[#7e7e7e]">
                  تعدّ منصة جمعية البر بجدة الحل الأسهل والأمثل لإيصال تبرعاتكم
                  إلى محتاجيها من خلال عملية تبرع آمنة وشفافة
                </p>
              </div>

              <div className="mt-10">
                <div className="flex items-center gap-[10px] font-bold">
                  <FontAwesomeIcon
                    className="text-xl text-mainColor"
                    icon={faCircleCheck}
                  />
                  <h3 className="text-lg text-secondryColor">تبرع سريع</h3>
                </div>
                <p className="text-lg text-[#7e7e7e]">
                  بدون جهد و عناء وعبر قنواتنا الرقمية اسرع حلول التبرع واوثقها
                </p>
              </div>
              <button className="w-[170px] bg-mainColor text-white py-4 px-9 rounded-tl-full rounded-bl-full text-base font-bold hover:bg-secondryColor hover:text-mainColor duration-300">أكتشف المزيد</button>
            </div>
            <div className="h-fit flex flex-col items-center gap-5 p-[60px] rounded-[15px] mr-auto bg-[#f0f0f0] text-lg">
              <img width={50} height={50} src={HandsHolding} alt="support" />
              <h3 className="text-lg text-secondryColor font-bold text-center">
                بامكانك ان تحدث فرقا في حياة شخص ما
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHome;
