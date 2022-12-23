const Usuario = require('../model/usuario');
const bcrypt = require('bcrypt');

const login = async (req, res) => {
    const { email, password } = req.body;

    Usuario.findOne( {email} ).then( user => {
        if (!user) {
            res.json({ mensaje : "Usuario no encontrado", solicitud : false})
        } else {
            bcrypt.compare(password, user.password).then(correct => {
                if ( correct ) {
                    const { id, nombre } = user
                    res.json({
                        mensaje : "Usuario logueado",
                        solicitud : true,
                        user : {
                            id,
                            nombre
                        }
                })
                }else {
                    return res.json({ mensaje : "Contraseña incorrecta"})

                    
                }
            })
        }

        
    })
}

module.exports = login;