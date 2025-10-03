import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
        className="w-[2rem] lg:hidden md:hidden"
        onClick={toggleMenu}
      />

      <ul
        className={`${
          isOpen ? "translate-y-[15rem]" : "translate-y-[-100rem]"
        } grid justify-items-start gap-4 py-12 lg:block md:hidden absolute left-0 right-0 w-[90%] pl-6 mx-auto bg-white backdrop-blur-md rounded-lg transition-all duration-300 ease-in-out z-10`}
      >
        <li className="flex items-center gap-2 text-xl font-medium">
          <span className="text-black font-bold">00</span>
          <a
            href="#"
            className="uppercase text-black/70 font-light tracking-wider"
          >
            Home
          </a>
        </li>
        <li className="flex items-center gap-2 text-xl font-medium">
          <span className="textblacke font-bold">01</span>
          <a
            href="/about"
            className="uppercase text-black/70 font-light tracking-wider"
          >
            Destination
          </a>
        </li>
        <li className="flex items-center gap-2 text-xl font-medium">
          <span className="text-black font-bold">02</span>
          <a
            href="/about"
            className="uppercase text-black/70 font-light tracking-wider"
          >
            Crew
          </a>
        </li>
        <li className="flex items-center gap-2 text-xl font-medium">
          <span className="text-black font-bold">03</span>
          <a
            href="/about"
            className="uppercase text-black/70 font-light tracking-wider"
          >
            Technology
          </a>
        </li>
      </ul>

      <div className="bg-white/10 backdrop-blur-md  lg:rounded-l-lg md:rounded-bl-lg py-8 px-12 lg:w-1/2 md:w-2/3 relative hidden md:inline-block shadow-lg">
        <ul className="flex items-center justify-center gap-6 font-barlow-condensed">
          <li className="flex items-center gap-2 text-xl font-medium ">
            <span className="text-white font-bold">00</span>
            <a
              href="/about"
              className="uppercase text-white/70 font-light tracking-wider"
            >
              Home
            </a>
          </li>
          <li className="flex items-center gap-2 text-xl font-medium">
            <span className="text-white font-bold">01</span>
            <a
              href="/about"
              className="uppercase text-white/70 font-light tracking-wider"
            >
              Destination
            </a>
          </li>
          <li className="flex items-center gap-2 text-xl font-medium">
            <span className="text-white font-bold">02</span>
            <a
              href="/about"
              className="uppercase text-white/70 font-light tracking-wider"
            >
              Crew
            </a>
          </li>
          <li className="flex items-center gap-2 text-xl font-medium">
            <span className="text-white font-bold">03</span>
            <a
              href="/about"
              className="uppercase text-white/70 font-light tracking-wider"
            >
              Technology
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
