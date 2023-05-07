import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import library from "../../assets/library.jpg";
import inventory from "../../assets/inventory.png";
import attendance from "../../assets/attendance.png";
import Profile1 from "../../assets/rahul.jpg";
import Profile2 from "../../assets/harshit.jpg";
import Profile3 from "../../assets/rohit.jpg";

import { useAuth0 } from "@auth0/auth0-react";
const navigation = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "AboutUs", href: "#aboutus" },
  { name: "FAQ", href: "#faq" },
  { name: "ContactUs", href: "#contactus" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  return (
    <div className="bg-white" id="home">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your ContactUs</span>
              <img className="h-[5rem] w-[5rem]" src="/logo.png" alt="" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {isAuthenticated && (
              <p className="mr-[13px] text-black-600 font-semibold">
                {user.name}
              </p>
            )}
            {isAuthenticated ? (
              <button
                type="button"
                className="text-sm font-semibold leading-6 text-gray-900"
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Log Out <span aria-hidden="true">&rarr;</span>
              </button>
            ) : (
              <button
                type="button"
                className="text-sm font-semibold leading-6 text-gray-900"
                onClick={() => loginWithRedirect()}
              >
                Log in <span aria-hidden="true">&rarr;</span>
              </button>
            )}
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your ContactUs</span>
                {/* <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                /> */}
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  {isAuthenticated ? (
                    <button
                      onClick={() =>
                        logout({
                          logoutParams: { returnTo: window.location.origin },
                        })
                      }
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Log Out
                    </button>
                  ) : (
                    <button
                      onClick={() => loginWithRedirect()}
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Log in
                    </button>
                  )}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      {/* <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div> */}
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Multiple Management System in One Place.{" "}
            <a href="#services" className="font-semibold text-indigo-600">
              <span className="absolute inset-0" aria-hidden="true" />
              Read more <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Welcome To All In One Management System
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Library Management System, Inventory Management System, Attendance
            Management System
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Login
            </a>
            <a
              href="#services"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
      {/* <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div> */}
      <div className="text-center md:mb-[40px] sm:mb-[5px]" id="services">
        <h2 className="text-xl font-bold mb-12  tracking-tight text-gray-900 sm:text-6xl">
          Services
        </h2>
      </div>
      <div class="relative p-4 bg-white dark:bg-white-800">
        <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center">
          <div class="lg:col-start-2 md:pl-20">
            <h4 class="text-2xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-black sm:leading-9">
              We Provide Three Management Systems
            </h4>
            <ul class="mt-10">
              <li>
                <div class="flex">
                  <div class="flex-shrink-0">
                    <div class="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="w-6 h-6"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <h5 class="text-lg font-bold leading-6 text-gray-900 dark:text-black">
                      Library Management System
                    </h5>
                    <p class="mt-2 text-base leading-6 text-gray-500 dark:text-gray-900">
                      Maintain Customer Book Records and balances on single
                      dashboard.
                    </p>
                  </div>
                </div>
              </li>
              <li class="mt-10">
                <div class="flex">
                  <div class="flex-shrink-0">
                    <div class="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="w-6 h-6"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <h5 class="text-lg font-bold leading-6 text-gray-900 dark:text-black">
                      Attendance Management System
                    </h5>
                    <p class="mt-2 text-base leading-6 text-gray-500 dark:text-gray-900">
                      Students can track their attendance through this system
                      and Teachers can maintain record of students attendance.
                    </p>
                  </div>
                </div>
              </li>
              <li class="mt-10">
                <div class="flex">
                  <div class="flex-shrink-0">
                    <div class="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="w-6 h-6"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <h5 class="text-lg font-bold leading-6 text-gray-900 dark:text-black">
                      Inventory Management System
                    </h5>
                    <p class="mt-2 text-base leading-6 text-gray-500 dark:text-gray-900">
                      An organization can maintain the record of the incoming &
                      outgoing stock.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="relative mt-10 -mx-4 md:mx-5 lg:mt-0 lg:col-start-1">
            <img
              src={library}
              alt="illustration"
              class="relative w-auto mx-auto rounded shadow-lg"
            />
          </div>
        </div>
        <div className="my-[10rem]" id="aboutus">
          <div className="text-center ">
            <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              About Us
            </h2>
          </div>
          <p class="mb-12 text-xl font-normal text-center text-gray-500 dark:text-gray-900">
            Meet the developers who have made your life easy
          </p>
          <div class="flex flex-col items-center md:flex-row justify-center">
            <div class="p-4">
              <div class="mb-4 text-center opacity-90">
                <a href="#" class="relative block">
                  <img
                    alt="profil"
                    src={Profile1}
                    class="mx-auto object-cover rounded-full h-40 w-40 "
                  />
                </a>
              </div>
              <div class="text-center">
                <p class="text-2xl text-gray-800 dark:text-black">
                  Rahul Dahra
                </p>
                <p class="text-xl font-light text-gray-500 dark:text-gray-700">
                  Full Stack Developer
                </p>
                <p class="max-w-xs py-4 font-light text-gray-500 text-md dark:text-gray-900">
                  Rahul dahra, born November 4, 2002 in Sonipat, Haryana
                </p>
              </div>
              <div class="flex items-center justify-between pt-8 mx-auto text-gray-500 border-t border-gray-200 w-44">
                <a href="#">
                  <svg
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-black"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
                  </svg>
                </a>
                <a href="#">
                  <svg
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-black"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z"></path>
                  </svg>
                </a>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-black"
                    viewBox="0 0 1792 1792"
                  >
                    <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
                  </svg>
                </a>
                <a href="#">
                  <svg
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-black"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"></path>
                  </svg>
                </a>
                {/* <a href="#">
                    <svg width="30" height="30" fill="currentColor" class="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-black" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1551 1476q15-6 26-3t11 17.5-15 33.5q-13 16-44 43.5t-95.5 68-141 74-188 58-229.5 24.5q-119 0-238-31t-209-76.5-172.5-104-132.5-105-84-87.5q-8-9-10-16.5t1-12 8-7 11.5-2 11.5 4.5q192 117 300 166 389 176 799 90 190-40 391-135zm207-115q11 16 2.5 69.5t-28.5 102.5q-34 83-85 124-17 14-26 9t0-24q21-45 44.5-121.5t6.5-98.5q-5-7-15.5-11.5t-27-6-29.5-2.5-35 0-31.5 2-31 3-22.5 2q-6 1-13 1.5t-11 1-8.5 1-7 .5h-10l-3-.5-2-1.5-1.5-3q-6-16 47-40t103-30q46-7 108-1t76 24zm-394-443q0 31 13.5 64t32 58 37.5 46 33 32l13 11-227 224q-40-37-79-75.5t-58-58.5l-19-20q-11-11-25-33-38 59-97.5 102.5t-127.5 63.5-140 23-137.5-21-117.5-65.5-83-113-31-162.5q0-84 28-154t72-116.5 106.5-83 122.5-57 130-34.5 119.5-18.5 99.5-6.5v-127q0-65-21-97-34-53-121-53-6 0-16.5 1t-40.5 12-56 29.5-56 59.5-48 96l-294-27q0-60 22-119t67-113 108-95 151.5-65.5 190.5-24.5q100 0 181 25t129.5 61.5 81 83 45 86 12.5 73.5v589zm-672 21q0 86 70 133 66 44 139 22 84-25 114-123 14-45 14-101v-162q-59 2-111 12t-106.5 33.5-87 71-32.5 114.5z">
                        </path>
                    </svg>
                </a> */}
              </div>
            </div>
            <div class="p-4">
              <div class="mb-4 text-center opacity-90">
                <a href="#" class="relative block">
                  <img
                    alt="profil"
                    src={Profile2}
                    class="mx-auto object-cover rounded-full h-40 w-40 "
                  />
                </a>
              </div>
              <div class="text-center">
                <p class="text-2xl text-gray-800 dark:text-black">Harshit</p>
                <p class="text-xl font-light text-gray-500 dark:text-gray-700">
                  Front End Developer
                </p>
                <p class="max-w-xs py-4 font-light text-gray-500 text-md dark:text-gray-900">
                  Harshit Chhabra, born July 10, 2002 in Sonipat, Haryana
                </p>
              </div>
              <div class="flex items-center justify-between pt-8 mx-auto text-gray-500 border-t border-gray-200 w-44">
                <a href="#">
                  <svg
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-black"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
                  </svg>
                </a>
                <a href="#">
                  <svg
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-black"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z"></path>
                  </svg>
                </a>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-black"
                    viewBox="0 0 1792 1792"
                  >
                    <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
                  </svg>
                </a>
                <a href="#">
                  <svg
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-black"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"></path>
                  </svg>
                </a>
                {/* <a href="#">
                    <svg width="30" height="30" fill="currentColor" class="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-black" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1551 1476q15-6 26-3t11 17.5-15 33.5q-13 16-44 43.5t-95.5 68-141 74-188 58-229.5 24.5q-119 0-238-31t-209-76.5-172.5-104-132.5-105-84-87.5q-8-9-10-16.5t1-12 8-7 11.5-2 11.5 4.5q192 117 300 166 389 176 799 90 190-40 391-135zm207-115q11 16 2.5 69.5t-28.5 102.5q-34 83-85 124-17 14-26 9t0-24q21-45 44.5-121.5t6.5-98.5q-5-7-15.5-11.5t-27-6-29.5-2.5-35 0-31.5 2-31 3-22.5 2q-6 1-13 1.5t-11 1-8.5 1-7 .5h-10l-3-.5-2-1.5-1.5-3q-6-16 47-40t103-30q46-7 108-1t76 24zm-394-443q0 31 13.5 64t32 58 37.5 46 33 32l13 11-227 224q-40-37-79-75.5t-58-58.5l-19-20q-11-11-25-33-38 59-97.5 102.5t-127.5 63.5-140 23-137.5-21-117.5-65.5-83-113-31-162.5q0-84 28-154t72-116.5 106.5-83 122.5-57 130-34.5 119.5-18.5 99.5-6.5v-127q0-65-21-97-34-53-121-53-6 0-16.5 1t-40.5 12-56 29.5-56 59.5-48 96l-294-27q0-60 22-119t67-113 108-95 151.5-65.5 190.5-24.5q100 0 181 25t129.5 61.5 81 83 45 86 12.5 73.5v589zm-672 21q0 86 70 133 66 44 139 22 84-25 114-123 14-45 14-101v-162q-59 2-111 12t-106.5 33.5-87 71-32.5 114.5z">
                        </path>
                    </svg>
                </a> */}
              </div>
            </div>
            <div class="p-4">
              <div class="mb-4 text-center opacity-90">
                <a href="#" class="relative block">
                  <img
                    alt="profil"
                    src={Profile3}
                    class="mx-auto object-cover rounded-full h-40 w-40 "
                  />
                </a>
              </div>
              <div class="text-center">
                <p class="text-2xl text-gray-800 dark:text-black">
                  Rohit Chugh
                </p>
                <p class="text-xl font-light text-gray-500 dark:text-gray-700">
                  Front End Developer
                </p>
                <p class="max-w-xs py-4 font-light text-gray-500 text-md dark:text-gray-900">
                  Rohit Chugh, born November 14, 2001 in Sonipat, Haryana
                </p>
              </div>
              <div class="flex items-center justify-between pt-8 mx-auto text-gray-500 border-t border-gray-200 w-44">
                <a href="#">
                  <svg
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-black"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
                  </svg>
                </a>
                <a href="#">
                  <svg
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-black"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z"></path>
                  </svg>
                </a>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-black"
                    viewBox="0 0 1792 1792"
                  >
                    <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
                  </svg>
                </a>
                <a href="#">
                  <svg
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-black"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"></path>
                  </svg>
                </a>
                {/* <a href="#">
                    <svg width="30" height="30" fill="currentColor" class="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-black" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1551 1476q15-6 26-3t11 17.5-15 33.5q-13 16-44 43.5t-95.5 68-141 74-188 58-229.5 24.5q-119 0-238-31t-209-76.5-172.5-104-132.5-105-84-87.5q-8-9-10-16.5t1-12 8-7 11.5-2 11.5 4.5q192 117 300 166 389 176 799 90 190-40 391-135zm207-115q11 16 2.5 69.5t-28.5 102.5q-34 83-85 124-17 14-26 9t0-24q21-45 44.5-121.5t6.5-98.5q-5-7-15.5-11.5t-27-6-29.5-2.5-35 0-31.5 2-31 3-22.5 2q-6 1-13 1.5t-11 1-8.5 1-7 .5h-10l-3-.5-2-1.5-1.5-3q-6-16 47-40t103-30q46-7 108-1t76 24zm-394-443q0 31 13.5 64t32 58 37.5 46 33 32l13 11-227 224q-40-37-79-75.5t-58-58.5l-19-20q-11-11-25-33-38 59-97.5 102.5t-127.5 63.5-140 23-137.5-21-117.5-65.5-83-113-31-162.5q0-84 28-154t72-116.5 106.5-83 122.5-57 130-34.5 119.5-18.5 99.5-6.5v-127q0-65-21-97-34-53-121-53-6 0-16.5 1t-40.5 12-56 29.5-56 59.5-48 96l-294-27q0-60 22-119t67-113 108-95 151.5-65.5 190.5-24.5q100 0 181 25t129.5 61.5 81 83 45 86 12.5 73.5v589zm-672 21q0 86 70 133 66 44 139 22 84-25 114-123 14-45 14-101v-162q-59 2-111 12t-106.5 33.5-87 71-32.5 114.5z">
                        </path>
                    </svg>
                </a> */}
              </div>
            </div>
          </div>
        </div>

        <div class="max-w-screen-xl p-8 mx-auto">
          <h2 class="mb-12 text-3xl font-extrabold leading-9 text-gray-900 border-b-2 border-gray-100" id="faq">
            FAQs
          </h2>
          <ul class="flex flex-wrap items-start gap-8">
            <li class="w-2/5">
              <p class="text-lg font-medium leading-6 text-gray-900">
                How to download attendance sheet?
              </p>
              <p class="mt-2">
                <p class="text-base leading-6 text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                  delectus sit voluptates magnam at voluptate nulla quidem quis
                  accusamus. Corrupti distinctio nulla unde labore architecto
                  optio blanditiis. Sapiente doloremque tempora voluptate non
                  consequatur? Blanditiis maiores voluptatem magnam illo ipsum
                  dolorum.
                </p>
              </p>
            </li>
            <li class="w-2/5">
              <p class="text-lg font-medium leading-6 text-gray-900">
                How to add new stock item?
              </p>
              <p class="mt-2">
                <p class="text-base leading-6 text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                  earum molestiae eligendi, qui vitae facilis quae, minima nobis
                  similique nisi expedita quidem ab facere beatae error.
                  Voluptatum distinctio corrupti sapiente.
                </p>
              </p>
            </li>
            <li class="w-2/5">
              <p class="text-lg font-medium leading-6 text-gray-900">
                How to generate excel sheet for stock?
              </p>
              <p class="mt-2">
                <p class="text-base leading-6 text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat harum laboriosam officiis molestiae ex, dolores nemo
                  earum quos eius. Unde delectus aliquid eligendi impedit ad
                  consequatur laborum veritatis? Nostrum, asperiores!
                </p>
              </p>
            </li>
            <li class="w-2/5">
              <p class="text-lg font-medium leading-6 text-gray-900">
                How to update profile pic?
              </p>
              <p class="mt-2">
                <p class="text-base leading-6 text-gray-500">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Debitis sed amet nostrum cum voluptas provident corrupti,
                  obcaecati itaque modi, ex, blanditiis non ducimus! Fugit
                  exercitationem assumenda iure nemo voluptatum. Quidem!
                </p>
              </p>
            </li>
            <li class="w-2/5">
              <p class="text-lg font-medium leading-6 text-gray-900">
                How to issue fine to defaulter?
              </p>
              <p class="mt-2">
                <p class="text-base leading-6 text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  inventore quam doloribus quaerat, aut voluptatem earum id
                  eligendi, vero error maxime corporis quo, alias officia magni
                  modi quod voluptatum commodi.
                </p>
              </p>
            </li>
            <li class="w-2/5">
              <p class="text-lg font-medium leading-6 text-gray-900">
                How to send reminder to students with low attendance?
              </p>
              <p class="mt-2">
                <p class="text-base leading-6 text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus error nisi nam quis voluptates consectetur aut
                  explicabo tempora quia adipisci.
                </p>
              </p>
            </li>
          </ul>
        </div>
        <div class="container my-24 px-6 mx-auto">
          <section class="mb-32 text-gray-800">
            <div class="flex justify-center">
              <div class="text-center lg:max-w-3xl md:max-w-xl">
                <h2 class="text-3xl font-bold mb-12 px-6">Contact us</h2>
              </div>
            </div>

            <div class="flex flex-wrap">
              <div class="grow-0 shrink-0 basis-auto mb-12 lg:mb-0 w-full lg:w-5/12 px-3 lg:px-6">
                <form>
                  <div class="form-group mb-6">
                    <input
                      type="text"
                      class="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none"
                      id="exampleInput7"
                      placeholder="Name"
                    />
                  </div>
                  <div class="form-group mb-6">
                    <input
                      type="email"
                      class="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none"
                      id="exampleInput8"
                      placeholder="Email address"
                    />
                  </div>
                  <div class="form-group mb-6">
                    <textarea
                      class="
            form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none
          "
                      id="exampleFormControlTextarea13"
                      rows="3"
                      placeholder="Message"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    class="
          w-full
          px-6
          py-2.5
          bg-indigo-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-indigo-700 hover:shadow-lg
          focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-indigo-800 active:shadow-lg
          transition
          duration-150
          ease-in-out"
                  >
                    Send
                  </button>
                </form>
              </div>
              <div class="grow-0 shrink-0 basis-auto w-full lg:w-7/12">
                <div class="flex flex-wrap">
                  <div class="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
                    <div class="flex items-start">
                      <div class="shrink-0">
                        <div class="p-4 bg-indigo-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                          <a href="mailto:support@aiomanagement.com">
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="headset"
                              class="w-5 text-white"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                            >
                              <path
                                fill="currentColor"
                                d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z"
                              ></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                      <div class="grow ml-6">
                        <p class="font-bold mb-1">Technical support</p>
                        <p class="text-gray-500">support@aiomanagement.com</p>
                        <p class="text-gray-500">+91 989634****</p>
                      </div>
                    </div>
                  </div>
                  <div class="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
                    <div class="flex items-start">
                      <div class="shrink-0">
                        <div class="p-4 bg-indigo-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                          <a href="mailto:sales@aiomanagement.com">
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="dollar-sign"
                              class="w-3 text-white"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 288 512"
                            >
                              <path
                                fill="currentColor"
                                d="M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z"
                              ></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                      <div class="grow ml-6">
                        <p class="font-bold mb-1">Sales questions</p>
                        <p class="text-gray-500">sales@aiomanagement.com</p>
                        <p class="text-gray-500">+91 749489****</p>
                      </div>
                    </div>
                  </div>
                  <div class="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
                    <div class="flex align-start">
                      <div class="shrink-0">
                        <div class="p-4 bg-indigo-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                          <a href="mailto:feedback@aiomanagement.com">
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="newspaper"
                              class="w-5 text-white"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                            >
                              <path
                                fill="currentColor"
                                d="M552 64H88c-13.255 0-24 10.745-24 24v8H24c-13.255 0-24 10.745-24 24v272c0 30.928 25.072 56 56 56h472c26.51 0 48-21.49 48-48V88c0-13.255-10.745-24-24-24zM56 400a8 8 0 0 1-8-8V144h16v248a8 8 0 0 1-8 8zm236-16H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm-208-96H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm0-96H140c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h360c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12z"
                              ></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                      <div class="grow ml-6">
                        <p class="font-bold mb-1">Feedback</p>
                        <p class="text-gray-500">feedback@aiomanagement.com</p>
                        <p class="text-gray-500">+91 893021****</p>
                      </div>
                    </div>
                  </div>
                  <div class="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
                    <div class="flex align-start">
                      <div class="shrink-0">
                        <div class="p-4 bg-indigo-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                          <a href="mailto:bugs@aiomanagement.com">
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="bug"
                              class="w-5 text-white"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                            >
                              <path
                                fill="currentColor"
                                d="M511.988 288.9c-.478 17.43-15.217 31.1-32.653 31.1H424v16c0 21.864-4.882 42.584-13.6 61.145l60.228 60.228c12.496 12.497 12.496 32.758 0 45.255-12.498 12.497-32.759 12.496-45.256 0l-54.736-54.736C345.886 467.965 314.351 480 280 480V236c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v244c-34.351 0-65.886-12.035-90.636-32.108l-54.736 54.736c-12.498 12.497-32.759 12.496-45.256 0-12.496-12.497-12.496-32.758 0-45.255l60.228-60.228C92.882 378.584 88 357.864 88 336v-16H32.666C15.23 320 .491 306.33.013 288.9-.484 270.816 14.028 256 32 256h56v-58.745l-46.628-46.628c-12.496-12.497-12.496-32.758 0-45.255 12.498-12.497 32.758-12.497 45.256 0L141.255 160h229.489l54.627-54.627c12.498-12.497 32.758-12.497 45.256 0 12.496 12.497 12.496 32.758 0 45.255L424 197.255V256h56c17.972 0 32.484 14.816 31.988 32.9zM257 0c-61.856 0-112 50.144-112 112h224C369 50.144 318.856 0 257 0z"
                              ></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                      <div class="grow ml-6">
                        <p class="font-bold mb-1">Bug report</p>
                        <p class="text-gray-500">bugs@aiomanagement.com</p>
                        <p class="text-gray-500">0130-8810****</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
