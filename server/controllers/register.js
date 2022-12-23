const Usuaio = require('../model/usuario');
const bcrypt = require('bcrypt');

const register = async (req, res) => {
    const { nombre, email, password } = req.body;

    Usuaio.findOne({email})
        .then(user => {
            if (user) {
                return res.json({ mensaje : "El email ya existe" })
            } else if (!nombre || !email || !password) {
                return res.json({ mensaje : "Llene todos los campos" })
            } else {
                bcrypt.hash(password, 10, (error, hashPassword) => {
                    if (error) {
                        res.json({error})
                    } else {
                        const newUser = new Usuaio ({
                            nombre,
                            email,
                            password : hashPassword
                        })

                        newUser.save()
                        .then(user => res.json({ mensaje : "Usuario Creado Exitosamnete", user}))
                        .catch(error => res.json({error}));
                    }

                    
                })
            }
        })
}

module.exports = register;