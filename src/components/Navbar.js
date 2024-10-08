"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Cookies from "js-cookie";
import UserCard from "./UserCard";


const Navbar = () => {
  const [userToken, setUserToken] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const [showModal, setShowModal] = useState(false)
  const [showLOgModal, setShowLogModal] = useState(false)

  const toggleModal = ()=>{
    setShowModal(true)
  }

  const toggleLogModal = ()=>{
    setShowLogModal(true)
  }

  useEffect(() => {
    // Only run on the client side
    const token = Cookies.get("token");
    console.log(token);
    setUserToken(token);
  }, []);

  const showLink = userToken ? "block" : "hidden";
  const hideLink = userToken ? "hidden" : "block";

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="sticky top-0 z-50" ref={menuRef}>
      <nav className="bg-[#FFFFFFCC] py-1 lg:py-2 shadow-lg">
        <div className="w-11/12 container mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex space-x-7">
              <div>
                <Link
                  href="/"
                  className="flex items-center py-4 px-2"
                  onClick={handleLinkClick}
                >
                  <Image src="/JOBME.png" width={100} height={100} alt="logo" />
                </Link>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-1 gap-4">
              
              <Link
                href="/"
                className={`${hideLink} py-4 px-2 text-black text-hover transition duration-300`}
              >
                Home
              </Link>
              <Link
                href="/joblisting"
                className="py-4 px-2 text-black text-hover transition duration-300"
              >
                Job Listings
              </Link>
              <Link
                href="/AppliedJob"
                className={`${showLink} py-4 px-2 text-black text-hover transition duration-300`}
              >
                Applied Jobs
              </Link>

              <Link
                href="/contact"
                className="py-4 px-2 text-black text-hover transition duration-300"
              >
                Contact Us
              </Link>
            </div>

            {userToken ? (
              <UserCard />
            ) : (
              <div className="hidden md:flex justify-center gap-3">
                <Link
                  href="/login"
                  className="flex justify-center items-center w-16 h-10 my-auto rounded-lg btn-color text-white hover:bg-white hover:text-black ease-in-out duration-500"
                >
                  Log In
                </Link>
                <Link
                  href="/signup"
                  className="flex justify-center items-center w-16 ml-2 h-10 my-auto rounded-lg hover-btn hover:text-white ease-in-out duration-500"
                >
                  Sign Up
                </Link>
              </div>
            )}

            <div className="md:hidden flex items-center">
              <button
                className="outline-none mobile-menu-button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg
                  className="w-6 h-6 text-gray-500 hover:text-gray-900"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} mb-2`}>
          <Link
            href="/"
            className="block py-2 px-4 text-sm text-black text-hover"
            onClick={handleLinkClick}
          >
            Home
          </Link>
          <Link
            href="/joblisting"
            className="py-4 px-2 text-black text-hover transition duration-300"
          >
            Job Listings
          </Link>
          <Link
            href="/contact"
            className="block py-2 px-4 text-sm text-black text-hover"
            onClick={handleLinkClick}
          >
            Contact Us
          </Link>

          {userToken ? (
            <button
              onClick={() => {
                logout();
                handleLinkClick();
              }}
              className="block py-2 px-4 text-sm text-black text-hover"
            >
              LOGOUT
            </button>
          ) : (
            <>
              <Link
                href="/login"
                className="block py-2 px-4 text-sm text-black text-hover"
                onClick={handleLinkClick}
              >
                Log In
              </Link>
              <Link
                href="/signup"
                className="block py-2 px-4 text-sm text-black text-hover"
                onClick={handleLinkClick}
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
