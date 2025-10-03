import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((o) => !o);

  const menuItems = [
    { id: "home", label: "Home", number: "00", to: "/" },
    {
      id: "destination",
      label: "Destination",
      number: "01",
      to: "/destination",
    },
    { id: "crew", label: "Crew", number: "02", to: "/crew" },
    { id: "technology", label: "Technology", number: "03", to: "/technology" },
  ];

  const activeDesktop = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-2 text-xl font-medium ${
      isActive ? "border-b-2 border-white" : ""
    }`;

  const activeMobile = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-2 text-xl font-medium ${
      isActive ? "border-b-2 border-black" : ""
    }`;

  return (
    <div className="lg:my-6 md:m-0 flex justify-between items-center w-full p-4 md:p-0">
      <img
        src="/shared/logo.svg"
        alt="Space Tourism Logo"
        className="w-[5rem] relative lg:left-[10rem] md:left-[5rem]"
      />

      <img
        src="/shared/icon-hamburger.svg"
        alt="Menu"
        className="w-[2rem] lg:hidden md:hidden cursor-pointer"
        onClick={toggleMenu}
      />

      <ul
        className={`${
          isOpen ? "translate-y-[15rem]" : "translate-y-[-100rem]"
        } grid justify-items-start gap-4 py-12 lg:hidden md:hidden absolute left-0 right-0 w-[90%] pl-6 mx-auto bg-white backdrop-blur-md rounded-lg transition-all duration-300 ease-in-out z-10`}
      >
        {menuItems.map((item) => (
          <li key={item.id} className="w-full">
            <NavLink
              to={item.to}
              className={activeMobile}
              onClick={() => setIsOpen(false)}
            >
              <span className="text-black font-bold">{item.number}</span>
              <span className="uppercase text-black/70 font-light tracking-wider">
                {item.label}
              </span>
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="bg-white/10 backdrop-blur-md lg:rounded-l-lg md:rounded-bl-lg py-8 px-12 lg:w-1/2 md:w-2/3 relative hidden md:inline-block shadow-lg">
        <ul className="flex items-center justify-center gap-6 font-barlow-condensed">
          {menuItems.map((item) => (
            <li key={item.id}>
              <NavLink to={item.to} className={activeDesktop}>
                <span className="text-white font-bold">{item.number}</span>
                <span className="uppercase text-white/70 font-light tracking-wider">
                  {item.label}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
