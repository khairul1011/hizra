/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import { createPopper } from "@popperjs/core";
import Logo from "assets/img/output-onlinepngtools.png";
// components

import IndexDropdown from "components/Dropdowns/IndexDropdown.js";
import IndexDropdown2 from "components/Dropdowns/IndexDropdown2.js";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);


  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const [dropdownPopoverShow2, setDropdownPopoverShow2] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const btnDropdownRef2 = React.createRef();
  const popoverDropdownRef2 = React.createRef();

  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow2(false);
    setDropdownPopoverShow(true);
  };

  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  const openDropdownPopover2 = () => {
    createPopper(btnDropdownRef2.current, popoverDropdownRef2.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(false);
    setDropdownPopoverShow2(true);
  };

  const closeDropdownPopover2 = () => {
    setDropdownPopoverShow2(false);
  };

  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow ">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/"
              className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            >
              <img src={Logo} width="140px" dan height="100px"
              alt="....."
            />
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          {/* <li className="flex items-center">
            <Link
              
              className="hover:text-blueGray-500 text-blueGray-700 px-2 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
            >

            </Link>
          </li> */}
          {/* <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/Index"
              className="text-blueGray-700 text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap "
            >
              Hizratech Konsultan Service
            </Link>
            

            
          </div> */}
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >

            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">

             

              

              <li className="flex items-center fas fa-home px-4">
                <Link
                  to="/Index"

                  className="hover:text-blueGray-500  text-black px-2 py-4 lg:py-2 flex items-center text-xl  font-bold"
                >
                  Home
                </Link>
              </li>
              <li className="flex items-center px-4 fas fa-user">
                <>
                  <a
                    className="hover:text-blueGray-500  text-black  px-2 py-4 lg:py-2 flex items-center text-xl font-bold"
                    href="#pablo"
                    ref={btnDropdownRef}
                    onClick={(e) => {
                      e.preventDefault();
                      dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
                    }}
                  >
                    About Us
                  </a>
                  <div
                    ref={popoverDropdownRef}
                    className={
                      (dropdownPopoverShow ? "block " : "hidden ") +
                      "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
                    }
                  >

                    <Link
                      to="/Visi-misi"
                      className="text-base fas fa-lightbulb py-2 px-4 font-semibold block w-full whitespace-nowrap bg-transparent text-black "
                    >
                      &nbsp; Visi & Misi
                    </Link>
                    <Link
                      to="/our-team"
                      className="text-base fas fa-users py-2 px-4 font-semibold block w-full whitespace-nowrap bg-transparent text-black "
                    >
                      &nbsp; Our Team
                    </Link>
                    <Link
                      to="/galery1"
                      className="text-base fas fa-images py-2 px-4 font-semibold block w-full whitespace-nowrap bg-transparent text-black "
                    >
                      &nbsp; Galery
                    </Link>

                  </div>
                </>
              </li>
              <li className="flex items-center fas fa-wrench px-4">

                <>
                  <a
                    className="hover:text-blueGray-500   text-black  px-2 py-4 lg:py-2 flex items-center text-xl font-bold"
                    href="#pablo"
                    ref={btnDropdownRef2}
                    onClick={(e) => {
                      e.preventDefault();
                      dropdownPopoverShow2 ? closeDropdownPopover2() : openDropdownPopover2();
                    }}
                  >
                    Our Service
                  </a>
                  <div
                    ref={popoverDropdownRef2}
                    className={
                      (dropdownPopoverShow2 ? "block " : "hidden ") +
                      "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
                    }
                  >

                    <Link
                      to="/Jasa-layanan"
                      className="text-base fas fa-screwdriver py-2 px-4 font-semibold block w-full whitespace-nowrap bg-transparent text-black "
                    >
                      &nbsp; Jasa Layanan Digital
                    </Link>
                    <Link
                      to="/Jasa-barang"
                      className="text-base fas fa-hammer py-2 px-4 font-semibold block w-full whitespace-nowrap bg-transparent text-black "
                    >
                      &nbsp; Jasa Pengadaan Barang
                    </Link>
                    <Link
                      to="/System-Dev"
                      className="text-base fas fa-tools py-2 px-4 font-semibold block w-full whitespace-nowrap bg-transparent text-black "
                    >
                      &nbsp; System Development
                    </Link>
                    <Link
                      to="/Web-dev"
                      className="text-base fas fa-cogs py-2 px-4 font-semibold block w-full whitespace-nowrap bg-transparent text-black "
                    >
                      &nbsp;Web Development
                    </Link>
                    <Link
                      to="/Digital-marketing"
                      className="text-base fas fa-wrench py-2 px-4 font-semibold block w-full whitespace-nowrap bg-transparent text-black "
                    >
                      &nbsp;Digital Marketing
                    </Link>

                  </div>
                </>
              </li>
              <li className="flex items-center fas fa-laptop px-4">
                <Link
                  to="/Gallery"
                  className="hover:text-blueGray-500  text-black  px-2 py-4 lg:py-2 flex items-center text-xl font-bold"
                >
                  Galery
                </Link>
              </li>
              <li className="flex items-center fas fa-user-friends px-4">
                <Link
                  to="/Mitra"
                  className="hover:text-blueGray-500  text-black  px-2 py-4 lg:py-2 flex items-center text-xl font-bold"
                >
                  Official Partners
                </Link>
              </li>
              <li className="flex items-center fas fa-comments px-4">
                <Link
                  to="/FAQ2"
                  className="hover:text-blueGray-500  text-black  px-2 py-4 lg:py-2 flex items-center text-xl font-bold"
                >
                  FAQ
                  
                </Link>
              </li>

              {/* <li className="flex items-center">
                <button
                  className="bg-lightBlue-500 text-white active:bg-lightBlue-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button"
                >
                  <i className="fas fa-arrow-alt-circle-down"></i> Download
                </button>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
