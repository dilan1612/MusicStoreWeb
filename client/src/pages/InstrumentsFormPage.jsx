import { useForm } from "react-hook-form"
import { useInstruments } from "../context/InstrumentContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

function InstrumentsFormPage() {

  const { register, handleSubmit, setValue } = useForm({
  defaultValues: {},
  mode: "onSubmit",
  shouldUseNativeValidation: false,
});

  const  {createInstrument, getInstrument, updateInstrument} = useInstruments();

  const params = useParams();

  useEffect(() => {
   async function loadInstrument(){
    if(params.id) {
      const instrument = await getInstrument(params.id)
      console.log(instrument);
      setValue("type", instrument.type);
      setValue("marca", instrument.marca);
      setValue("color", instrument.color);
      setValue("value", instrument.value);
      setValue("imag", instrument.imag);

   }
   }
    loadInstrument()
  },[]);


  const navigate = useNavigate();

const onSubmit = handleSubmit ((data) => {
  if (params.id) {
    updateInstrument(params.id, data);
  }else{
    createInstrument(data);
   
  }

   navigate('/instrument');
})

  return (

     <div className='flex h-[calc(100vh-100px)]  items-center justify-center'>

      

    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">

       <h1 className='text-2xl font-bold py-6'>AGREGAR INSTRUMENTOS</h1>

      <label htmlFor="Tipo">Tipo</label>

       <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Tipo"
          {...register("type")}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          autoFocus
        />

         <label htmlFor="Marca">Marca</label>
        <input
          type="text"
          placeholder="Marca"
          {...register("marca")}
           className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        />

        <label htmlFor="Color">Color</label>
        <input
          type="text"
          placeholder="Color"
          {...register("color")}
           className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        />

        <label htmlFor="Valor">Valor</label>
          <input
            type="number"
            placeholder="Valor"
            {...register("value", { valueAsNumber: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          />


        <label htmlFor="Imagen">Imagen</label>
        <input
          type="text"
          placeholder="URL de la imagen"
          {...register("imag")}
           className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        />

        <button className="bg-indigo-500 px-3 py-2 rounded-md">Guardar</button>
      </form> 
    
      </div>
    </div>
  )
}

export default InstrumentsFormPage