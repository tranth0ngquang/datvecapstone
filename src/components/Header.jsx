import React from "react";
import { NavLink } from "react-router-dom";
import LogoZahaSvg from "../pages/HomePage/LogoZahaSvg";


// {/* NavLink sẽ truyền tham số props.isActive
//                     3 ngôi : isActive ? "nav-link myActive" : "nav-link" */}
//   <NavLink
//   className={({ isActive }) =>
//     isActive ? "nav-link myActive" : "nav-link"
//   }
//   style={({ isActive }) =>
//     isActive ? { border: "1px solid red" } : {}
//   }
//   to="/home"
// >
//   Home
// </NavLink>


export default function Header() {
  return (
    <nav className="border-stone-200 fixed z-40 w-full header_nav rounded-b-2xl">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <LogoZahaSvg/>
        </a>

        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button type="button" className="flex text-sm bg-stone-900 rounded-full md:me-0 focus:ring-4 focus:ring-stone-800" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
            <span className="sr-only">Open user menu</span>
            <img className="w-8 h-8 rounded-full" src="./imgVideo/ava.jpg" alt="user photo" />
          </button>

          {/* Dropdown menu */}
          <div className="z-50 hidden my-4 text-base list-none rounded-lg shadow bg-stone-900 divide-stone-800" id="user-dropdown">
            <div className="px-4 py-3">
              <span className="block text-sm text-white">Zaha Việt Nam</span>
              <span className="block text-sm truncate text-stone-400">zaha@gmail.com</span>
            </div>
            <ul className="py-2" aria-labelledby="user-menu-button">
              <li>
                <a href="#" className="block px-4 py-2 text-sm hover:bg-stone-600 text-stone-200 hover:text-white">Quản lý Tài khoản</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 text-sm hover:bg-stone-600 text-stone-200 hover:text-white">Đăng xuất</a>
              </li>
            </ul>
          </div>

          <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-stone-400 hover:bg-stone-700 focus:ring-stone-800" aria-controls="navbar-user" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 border-stone-800">
            <li>
              <a href="#" className="block py-2 px-3 text-white bg-stone-900 rounded md:bg-transparent md:p-0" aria-current="page">Trang chủ</a>
            </li>
            <li>
              <a href="#" className="NavFooter_text_a block py-2 px-3 rounded md:hover:bg-transparent md:p-0 hover:bg-stone-700">Lịch chiếu</a>
            </li>
            <li>
              <a href="#" className="NavFooter_text_a block py-2 px-3 rounded md:hover:bg-transparent md:p-0 hover:bg-stone-700">Cụm rạp</a>
            </li>
            <li>
              <a href="#" className="NavFooter_text_a block py-2 px-3 rounded md:hover:bg-transparent md:p-0 hover:bg-stone-700">Tin tức</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
}
