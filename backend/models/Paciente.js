import mongoose from 'mongoose';

const pacientesSchema = mongoose.Schema({
    nombre: {
        type: String,
        reqired: true,
    },
    propietario: {
        type: String,
        reqired: true,
    },
    email: {
        type: String,
        reqired: true,
    },
    fecha: {
        type: Date,
        reqired: true,
        default: Date.now(),
    },
    sintomas: {
        type: String,
        reqired: true,
    },
    veterinario: { // Se almacena la referencia del veterinario quien atendió al cliente
        type: mongoose.Schema.Types.ObjectId,
        ref: "Veterinario",
    },
},
    {
        timestamps: true,
    }
);

const Paciente = mongoose.model("Paciente", pacientesSchema);

export default Paciente;