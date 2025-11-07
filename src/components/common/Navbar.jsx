import CTAButton from "../ui/CTAButton";
import { openInNewTab } from "@/utils/helpers.js";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white shadow-md p-4">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto md:px-5 md:px-2">
        <button className="fixed md:hidden font-recursive-mono-casual">
          
        </button>
        <div>
          <h1 className="text-xl font-recursive-mono-casual font-bold text-blue-600 pl-6 md:pl-0">
            tv.atram.moe
          </h1>
        </div>
        <div className="hidden md:flex space-x-6 items-center">
          <a
            href="#Accueil"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Accueil
          </a>
          <a
            href="#Utilisation"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Utilisation
          </a>
          <a
            href="#Statistiques"
            className="text-gray-700 hover:text-blue-600 transition"
          >
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
