import { FaMoon, FaSun } from "react-icons/fa";

import viteLogo from "/vite.svg";
import { Switch } from "@headlessui/react";
import { FC, useContext } from "react";
import { ThemeContext } from "@/utils/context";
import { Link } from "react-router-dom";

const Navbar: FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  function handleTheme(mode: string) {
    setTheme(mode);
  }

  return (
    <nav className="bg-slate-200 w-full h-14 flex items-center py-3 px-20 justify-between dark:bg-slate-700 ">
      <Link
        className="text-slate-800 font-semibold tracking-wider dark:text-slate-200 flex gap-2 items-center"
        to="/"
        id="nav-homepage"
      >
        <img src={viteLogo} className="logo" alt="Vite logo" />
        My TodoList
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
      </div>
    </nav>
  );
};

export default Navbar;
