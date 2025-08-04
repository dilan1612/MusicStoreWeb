import { createContext, useContext, useState} from "react";
import {createInstrumentRequest, getInstrumentsRequest, deleteInstrumentRequest, getInstrumentRequest
  , updateInstrumentRequest, getCatalogRequest
} from "../api/instruments"

const InstrumentContext = createContext()

export const useInstruments = () => {
    const context = useContext(InstrumentContext);
    if (!context) {
        throw new Error("useInstruments must be used within an InstrumentContextProvider");
    }

    return context;
};

export function InstrumentContextProvider({ children }) {

  const [instruments, setInstrument] = useState([]);

  const [catalog, setCatalog] = useState([]);


  const getInstruments = async () => {
    
    try {
      const res= await getInstrumentsRequest();

    setInstrument(res.data);

    } catch (error) {
      console.error("Failed to fetch instruments:", error);
     
    }

  }


  const createInstrument = async (instruments) => {
    

    const res = await createInstrumentRequest(instruments);

    console.log(res);
  }; 


  const deleteInstrument = async (id) => {
    try {
      const res = await deleteInstrumentRequest(id);
      if (res.status === 204) setInstrument(instruments.filter(instrument => instrument._id !== id));
    } catch (error) {
      console.error("Failed to delete instrument:", error);
    }
  };

  const getInstrument = async (id) => {
    try{
      const res = await getInstrumentRequest(id);
    return res.data;
    }catch (error) {
      console.error("Failed to fetch instrument:", error);
    }
  }

  const updateInstrument = async (id, instrument) => {
   
     try{
       updateInstrumentRequest(id, instrument);
     }catch (error) {
      console.error("Failed to update instrument:", error);
  }
}

 const getCatalog = async () => {
  try {
    const res = await getCatalogRequest();
    setCatalog(res.data); // guardamos los datos en el estado
  } catch (error) {
    console.error("Failed to fetch catalog:", error);
  }
};
  return (
    <InstrumentContext.Provider value={{instruments, catalog, createInstrument, getInstruments,
      deleteInstrument, getInstrument, updateInstrument, getCatalog
    }}>
      {children}
    </InstrumentContext.Provider>
  );
}



