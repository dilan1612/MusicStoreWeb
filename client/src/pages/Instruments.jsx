
import { use, useEffect } from 'react';
import { useInstruments } from '../context/InstrumentContext';
import InstrumentCard from '../components/InstrumentCard';


function Instruments() {

   const {getInstruments, instruments} = useInstruments(); 


   
   useEffect(() => {
    getInstruments();

   }, []);

   if (!instruments || instruments.length === 0) {
    return <div>No instruments available</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4">
      {instruments.map(instrument => (
        <InstrumentCard key={instrument._id} instrument={instrument} />
      ))}
    </div>
  );
}

export default Instruments