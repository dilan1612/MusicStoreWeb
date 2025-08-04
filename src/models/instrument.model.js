import mongoose from 'mongoose';

const { Schema } = mongoose;

const schemaInstrument = new Schema({
  
  type: {
    type: String,
    required: true,
  },
  marca: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: [true, 'El valor es requerido'],
    validate: {
      validator: function (v) {
        return /\d+/.test(v);
      },
      message: (props) => `${props.value} is not valid!`,
    },
  },
  imag: {
    type: String,
    required: true,
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    
  },
});

const instrument = mongoose.model('instrument', schemaInstrument);
export default instrument;
