import { useState, useEffect } from 'react';
import { getItemCounts } from '@/services/jellyfinApi';
import StatsCard from '@/components/ui/StatsCard';

const StatisticsSection = () => {
  const [counts, setCounts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getItemCounts()
      .then(data => {
        setCounts(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Erreur lors du chargement des statistiques');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Chargement des statistiques...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const totalMediaCount =
    (counts?.MovieCount || 0) +
    (counts?.SeriesCount || 0) +
    (counts?.EpisodeCount || 0) +
    (counts?.BoxSetCount || 0);

  return (
    <section className="p-8 bg-gray-100 rounded-lg shadow">
      <StatsCard title="Total médias" value={totalMediaCount} />
    </section>
  );
};

export default StatisticsSection;
