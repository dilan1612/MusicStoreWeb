import { useInstruments } from '../context/InstrumentContext';
import { Link, useLocation } from 'react-router-dom';

function InstrumentCard({ instrument }) {
  const { deleteInstrument } = useInstruments();
  const location = useLocation();

  const isCatalogPage = location.pathname === '/catalog';

  const handleSaveToUser = () => {
    // Aquí va la lógica para guardar este instrumento al usuario actual (carrito o perfil)
    console.log(`Instrumento ${instrument._id} guardado para el usuario`);
    // Podrías usar un contexto, fetch o axios aquí para hacer la petición al backend
  };

  return (
    <div className="bg-gray-600 shadow-md rounded-lg p-4">
      <div className="w-full h-48 flex justify-center items-center mb-4 bg-gray-100 rounded">
        <img
          src={instrument.imag}
          alt={`${instrument.type} de ${instrument.marca}`}
          className="max-h-40 object-contain"
        />
      </div>
      <h2 className="text-xl font-bold text-gray-800">{instrument.type}</h2>
      <p className="text-black-600"><strong>Marca:</strong> {instrument.marca}</p>
      <p className="text-black-600"><strong>Color:</strong> {instrument.color}</p>
      <p className="text-black-600"><strong>Valor:</strong> ${instrument.value}</p>

      <div className='flex gap-x-10 gap-y-12 mt-5'>
        {isCatalogPage ? (
          <button
            className="bg-green-500 px-4 py-1 rounded-sm content-between"
            onClick={handleSaveToUser}
          >
            Guardar
          </button>
        ) : (
          <>
            <button
              className="bg-red-500 px-4 py-1 rounded-sm"
              onClick={() => deleteInstrument(instrument._id)}
            >
              Delete
            </button>
            <Link to={`/instrument/${instrument._id}`}>
              <button className="bg-blue-500 px-4 py-1 rounded-sm">Edit</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default InstrumentCard;
