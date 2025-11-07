const ServicesSection = () => {
  const services = [
    {
      title: "Jellyfin",
      description:
        "Jellyfin est un serveur de streaming qui permet aux BoutPop de visionner des médias comme des séries, des films ou des animes à distance (depuis ma chambre).",
      icon: "",
      url: "http://jellyfin.home",
      color: "text-red-600",
    },
    {
      title: "Jellyseerr",
      url: "http://jellyseerr.home",
      description:
        "Jellyseerr est un serveur de gestion de requête, en gros c'est là que vous allez quand vous cherchez à ajouter un nouveau média. Il fait la connexion avec Radarr et Sonarr, et propose une interface plus intuitive, mais offrant moins de controle sur le téléchargement",
      icon: "󰅢",
      color: "text-blue-600",
    },
    {
      title: "Radarr",
      description:
        "Radarr est le serveur de recherche de torrent dédié aux films. Vous pouvez y cherchez un film, lancer la recherche de torrent et soit laisser Radarr choisir, soit choisir vous même lequel prendre. De plus, vous pouvez ajouter des films pour le moment indisponible ou qui vont sortir et Radarr le téléchargera quand il sera disponible.",
      icon: "󰟞",
      url: "http://radarr.home",
      color: "text-purple-600",
    },
    {
      title: "Sonarr",
      description:
        "Sonarr est le serveur de recherche de torrent dédié aux séries. Vous pouvez y cherchez une série, lancer la recherche de torrent et soit laisser Sonarr choisir, soit choisir vous même lequel prendre. De plus, si la série est en cours, vous pouvez regler un téléchargement automatique calé sur la sortie des épisodes.",
      icon: "󰠹",
      url: "http://sonarr.home",
      color: "text-green-600",
    },
  ];
  return (
    <section className="bg-gradient-to-br from-purple-50 to-red-50 px-4">
      <div className="text-center">
        <h2 className="font-bold text-xl">Services</h2>
        <p className="text-gray-700">
          Découvrez les délices du serveur BoutPop
        </p>
        <div className="mt-12 grid md:grid-cols-2 gap-8 py-4">
          {services.map((service, index) => (
            <a
              href={service.url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition-transform transition-shadow duration-300"
            >
              <div className={`text-4xl mb-4 font-recursive-mono-casual ${service.color}`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ServicesSection;
