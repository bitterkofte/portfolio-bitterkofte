import { useEffect, useState } from "react";
import { FaRegMoon } from "react-icons/fa";
import { BsSun } from "react-icons/bs"

const Navbar = () => {
  // const [isMenu, setIsMenu] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY) setShow(false);
      else setShow(true);
      setLastScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className={`${!show && "-translate-y-24"} fixed z-10 w-full p-4 flex top-0 justify-between items-center bg-l-nav-bg dark:bg-d-nav-bg backdrop-blur-lg drop-shadow-lg transition-all duration-500`}>
      <div className="dark:text-neutral-200 font-black text-3xl select-none transition-all duration-500">
        Hasan Çelik
      </div>

      {theme === "dark" ? (
        <div
          className="p-3 bg-neutral-200 dark:bg-neutral-700 text-neutral-200 hover:text-yellow-400 rounded-2xl transition-all duration-500 cursor-pointer select-none"
          onClick={handleThemeSwitch}
        >
          <BsSun
            size={32}
            weight="bold"
            className=""
          />
        </div>
      ) : (
        <div
          className="p-3 bg-neutral-200 hover:dark:bg-neutral-700 hover:text-sky-800 transition-all duration-500 rounded-2xl cursor-pointer select-none"
          onClick={handleThemeSwitch}
        >
          <FaRegMoon
            size={32}
            weight="bold"
            className=""
          />
        </div>
      )}
    </div>
  )
}
export default Navbar