const StatsCard = ({ title, value }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6 text-center">
      <p className="text-gray-500 uppercase font-semibold">{title}</p>
      <p className="text-4xl font-bold mt-2">{value.toLocaleString('fr-FR')}</p>
    </div>
  );
};

export default StatsCard;
