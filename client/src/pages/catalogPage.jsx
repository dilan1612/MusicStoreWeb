import { useEffect } from 'react';
import { useInstruments } from '../context/InstrumentContext';
import InstrumentCard from '../components/InstrumentCard';

function CatalogPage() {
  const { getCatalog, catalog } = useInstruments();

  useEffect(() => {
    getCatalog();
  }, []);

  if (!catalog || catalog.length === 0) {
    return <div className="text-center mt-8">No hay instrumentos disponibles.</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {catalog.map(instrument => (
        <InstrumentCard key={instrument._id} instrument={instrument} />
      ))}
    </div>
  );
}

export default CatalogPage;
