"use client";

import React, { useCallback, useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { clsx } from "@/libs/utils";
import { navigation } from "@/constant/navigation";
import TransitionLink from "../ui/link";
import Link from "next/link";

const Navbar = ({ theme }: { theme: "light" | "dark" }) => {
  const [scrollY, setScrollY] = useState(0);

  const onScroll = useCallback(() => {
    const { scrollY } = window;
    setScrollY(scrollY);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <Disclosure
        as="nav"
        className={clsx(
          "top-0 z-20 w-full fixed bg-white transition-all duration-500 ease-in-out",
          scrollY > 10 &&
            scrollY < 900 &&
            "md:bg-white border-b backdrop-blur-lg ",
          scrollY < 10 && "md:bg-transparent border-b border-transparent",
          scrollY > 900 &&
            "md:bg-white md:bg-opacity-55 border-b !border backdrop-blur-lg"
        )}
      >
        {({ open }) => (
          <>
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className=" flex h-20 items-center justify-between">
                <div className="flex">
                  <div className="-ml-2 mr-2 flex items-center md:hidden">
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="flex-shrink-0 flex items-center">
                    <Link href="/">
                      <img
                        className={clsx(
                          "h-24 w-auto block",
                          scrollY > 10 || theme == "dark"
                            ? "md:block"
                            : "md:hidden"
                        )}
                        src="/assets/logo.png"
                        alt="logo"
                      />
                      {theme != "dark" && (
                        <img
                          className={clsx(
                            "h-24 w-auto hidden",
                            scrollY > 10 ? "md:hidden" : "md:block"
                          )}
                          src="/assets/logo-white.png"
                          alt="logo"
                        />
                      )}
                    </Link>
                  </div>
                </div>

                <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
                  {navigation.map((item) => (
                    <TransitionLink
                      key={item.name}
                      href={item.href}
                      label={item.name}
                      className={clsx(
                        scrollY > 10
                          ? "!text-black"
                          : theme == "dark"
                          ? "text-black"
                          : "text-white",
                        "px-3 py-2 uppercase montserrat-600"
                      )}
                    />
                  ))}
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={clsx(
                      "block px-3 py-2 montserrat-600  text-base text-black"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
};

export default Navbar;

/* 

           <div className="flex items-center">
                <div className="flex-shrink-0">
                  <button
                    type="button"
                    className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
                  >
                    <PlusSmIcon
                      className="-ml-1 mr-2 h-5 w-5"
                      aria-hidden="true"
                    />
                    <span>New Job</span>
                  </button>
                </div>
                <div className="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center">
                  <button
                    type="button"
                    className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {/* Profile dropdown 
                  <Menu as="div" className="ml-3 relative"> 
                    <div>
                      <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src={user.imageUrl}
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {userNavigation.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <a
                                href={item.href}
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                {item.name}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
*/
