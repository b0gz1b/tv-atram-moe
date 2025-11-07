import CTAButton from "../ui/CTAButton";
import { openInNewTab } from "@/utils/helpers.js";
import { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed w-full bg-white shadow-md p-4">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto md:px-5 md:px-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed md:hidden font-recursive-mono-casual"
        >
          {!isOpen ? "" : ""}
        </button>
        {isOpen && (
          <div
            className={`md:hidden bg-white px-4 pb-4 space-y-2 absolute left-0 top-full shadow-md rounded-br z-40 w-full transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}`}
          >
            <a
              href="#"
              className="block py-2 text-gray-700 hover:text-blue-600 transition"
            >
              Accueil
            </a>
            <a
              href="#"
              className="block py-2 text-gray-700 hover:text-blue-600 transition"
            >
              Utilisation
            </a>
            <a
              href="#"
              className="block py-2 text-gray-700 hover:text-blue-600 transition"
            >
              Statistiques
            </a>
          </div>
        )}
        <div>
          <h1 className="text-xl font-recursive-mono-casual font-bold text-blue-600 pl-6 md:pl-0">
            tv.atram.moe
          </h1>
        </div>
        <div className="hidden md:flex space-x-6 items-center">
          <a href="#" className="text-gray-700 hover:text-blue-600 transition">
            Accueil
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition">
            Utilisation
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition">
            Statistiques
          </a>
          <CTAButton
            onClick={() => {
              openInNewTab("http://jellyseerr.home");
            }}
            variant="blue"
          >
            󰅢
          </CTAButton>
          <CTAButton
            onClick={() => {
              openInNewTab("http://jellyfin.home");
            }}
            variant="red"
          >
            
          </CTAButton>
        </div>
        <div className="flex md:hidden items-center space-x-1 pl-2">
          <CTAButton
            onClick={() => {
              openInNewTab("http://jellyseerr.home");
            }}
            variant="blue"
          >
            󰅢
          </CTAButton>
          <CTAButton
            onClick={() => {
              openInNewTab("http://jellyfin.home");
            }}
            variant="red"
          >
            
          </CTAButton>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
