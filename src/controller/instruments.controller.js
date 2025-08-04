import instrument from "../models/instrument.model.js";

// Obtener todos los instrumentos
export const getInstruments = async (req, res) => {
  try {
    const instruments = await instrument.find({ user: req.user.id }).populate("user");
    res.json(instruments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllInstruments = async (req, res) => {
  try {
    const instruments = await instrument.find();
    res.json(instruments);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


// Crear un nuevo instrumento
export const createInstrument = async (req, res) => {
  try {
    const { type, marca, color, value, imag } = req.body;

    const newInstrument = new instrument({ 
      type, marca, color, value, imag, user: req.user.id });

      await newInstrument.save();
    
    res.json(newInstrument);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener un instrumento por ID
export const getInstrumentById = async (req, res) => {
  try {
    const foundInstrument = await instrument.findById(req.params.id).populate("user");

    if (!foundInstrument) {
      return res.status(404).json({ message: "Instrument not found" });
    }

    res.json(foundInstrument);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Eliminar un instrumento por ID
export const deleteInstrument = async (req, res) => {
  try {
    const deletedInstrument = await instrument.findByIdAndDelete(req.params.id);

    if (!deletedInstrument) {
      return res.status(404).json({ message: "Instrument not found" });
    }

    return res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar un instrumento por ID
export const updateInstrument = async (req, res) => {
  try {
    const updatedInstrument = await instrument.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedInstrument) {
      return res.status(404).json({ message: "Instrument not found" });
    }

    res.json(updatedInstrument);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
