const mongoose = require('mongoose');

const agendamentoSchema = new mongoose.Schema({
    data:{
        type:String,
        required:true,

    },
    hora:{
        type:String,
        required:true,
        unique:true
    },
    emailUsuario:{
        type:String,
        required:true
    }

})

const Agendamento = mongoose.model("Agendamento",agendamentoSchema);

module.exports = Agendamento;