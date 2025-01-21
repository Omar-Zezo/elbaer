import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavigationLinks = () => {
  return (
    <div className='container flex items-center gap-[10px]'>
        <div className='w-[calc(100%-223px)] pr-[85px] bg-secondryColor rounded-tr-full rounded-br-full'>
            <ul className='navbar flex items-center gap-5'>
                <li>
                    <NavLink to="/" className='block py-6 text-[#9e9e9e] text-[15px] font-medium hover:text-white duration-300'>الرئيسية</NavLink>
                </li>

                <li>
                    <NavLink to="/a" className='block py-6 text-[#9e9e9e] text-[15px] font-medium hover:text-white duration-300'>تعرف علينا</NavLink>
                </li>

                <li>
                    <NavLink to="/b" className='block py-6 text-[#9e9e9e] text-[15px] font-medium hover:text-white duration-300'>أصدقاء البر</NavLink>
                </li>

                <li>
                    <NavLink to="/c" className='block py-6 text-[#9e9e9e] text-[15px] font-medium hover:text-white duration-300'>تبرع أونلاين</NavLink>
                </li>

                <li>
                    <NavLink to="/d" className='block py-6 text-[#9e9e9e] text-[15px] font-medium hover:text-white duration-300'>إهداء تبرع</NavLink>
                </li>

                <li>
                    <NavLink to="/e" className='block py-6 text-[#9e9e9e] text-[15px] font-medium hover:text-white duration-300'>المركز الإعلامي</NavLink>
                </li>

                <li>
                    <NavLink to="/f" className='block py-6 text-[#9e9e9e] text-[15px] font-medium hover:text-white duration-300'>خدمات المُستفيدين</NavLink>
                </li>

                <li>
                    <NavLink to="/g" className='block py-6 text-[#9e9e9e] text-[15px] font-medium hover:text-white duration-300'>إتصل بنا</NavLink>
                </li>
            </ul>
        </div>
        <Link to="/" className='flex-1 h-[70.5px] text-lg flex items-center justify-center bg-mainColor text-white font-bold rounded-bl-full rounded-tl-full hover:bg-green-700 duration-300'>تسجيل الدخول</Link>
    </div>
  )
}

export default NavigationLinks