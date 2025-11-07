import CTAButton from "../ui/CTAButton";
import { openInNewTab } from '@/utils/helpers.js';
const HeroSection = () => {
  return (
  <section className="pt-22 md:pt-25 bg-gradient-to-br from-blue-50 to-purple-50 text-left p-4">
      <h1 className="font-bold text-xl">Le service de streaming BoutPop</h1>
      <p>
        Ici vous trouverez les liens vers les différents services qui composent
        notre serveur de streaming. Vous y trouverez aussi des tutoriels et
        astuces, ainsi que quelques statistiques.
      </p>
      <div className="flex space-x-6 py-3 items-center">
        <CTAButton onClick={() => {openInNewTab("http://jellyseerr.home")}} variant="blue">Télécharger 󰅢</CTAButton>
        <CTAButton onClick={() => {openInNewTab("http://jellyfin.home")}} variant="red">Regarder </CTAButton>
      </div>
    </section>
  );
};
export default HeroSection;
