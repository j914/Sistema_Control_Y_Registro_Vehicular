
//const Usuario = require('../models/usuario');
const User = require('../models/user.model');


const esEmailValido = async (email = '')=>{
    const existeEmain = await User.findOne({Rol});
    if(!existeEmail){
        throw new Error(`El correo ${email} ya es registrado en la BD`)
    }
   
}

const existeEmail =async(email='')=>{ 

    const existe = await User.findOne({ email });
    if (existe) {
        throw new Error(`El correo: ${email} ya esta registrado`);
        // return res.status(400).json({
        //     msg: 'El correo ya esta registrado !!'
        // })
    }
}
/*
const existeUsuarioPorId =async(id_Rol='')=>{ 

    const usuarioExiste = await Roles.findById(id);
    if ( !usuarioExiste) {
        throw new Error(`El id: ${id_Rol} no pertenece a ningun usuario`);
    }
}
*/
module.exports = {
    esEmailValido,
    existeEmail,
  //  existeUsuarioPorId
}