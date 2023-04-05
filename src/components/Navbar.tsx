import {
  FaSignInAlt,
  FaUserCircle,
  FaSignOutAlt,
  FaChevronDown,
  FaMoon,
  FaSun,
} from "react-icons/fa";

import { Menu, Transition, Switch } from "@headlessui/react";
import withReactContent from "sweetalert2-react-content";
import { Link, useNavigate } from "react-router-dom";
import { FC, Fragment, useContext } from "react";
import { useSelector } from "react-redux";
import { useCookies } from "react-cookie";

import { ThemeContext } from "@/utils/context";
import Swal from "@/utils/swal";

const Navbar: FC = () => {
  // useselector: get state

  const { theme, setTheme } = useContext(ThemeContext);
  // [get, set, del] = useCookies
  const [, , removeCookie] = useCookies();
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();

  function handleTheme(mode: string) {
    setTheme(mode);
  }

  return (
    <nav className="bg-slate-200 w-full h-14 flex items-center py-3 px-20 justify-between dark:bg-slate-700 ">
      <Link
        className="text-slate-800 font-semibold tracking-wider dark:text-slate-200"
        to="/"
        id="nav-homepage"
      >
        Homepage
      </Link>
      <div className="flex items-center gap-4">
        <Switch
          onChange={() => handleTheme(theme === "dark" ? "light" : "dark")}
          className={`${
            theme === "dark" ? "bg-slate-800 " : "bg-slate-300"
          } flex h-8 w-8 items-center justify-center rounded-full`}
        >
          {theme === "dark" ? (
            <FaMoon className="h-5 w-5 rounded-full" color="white" />
          ) : (
            <FaSun className="h-5 w-5 rounded-full" color="#1e293b" />
          )}
        </Switch>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              <FaChevronDown className="h-5 text-slate-200 hover:text-slate-100" />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="px-1 py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active
                          ? "bg-slate-500 text-slate-200"
                          : "text-slate-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      onClick={() => navigate(`/profile/`)}
                      id="nav-profile"
                    >
                      <FaUserCircle className="h-5 mr-2 w-5" />
                      Profile
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </nav>
  );
};

export default Navbar;
