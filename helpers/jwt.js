const jwt = require('jsonwebtoken');


const generarJWT = (uid, name) => {

    const payload = { uid, name };

    return new Promise((resolve, reject) => {

        jwt.sign(payload, process.env.SECRET_JWT_SEED, {
            expiresIn: '24h'
        }, (err, token) => {

            if (err) {
                // Incorrecto
                console.log(err);
                reject('generarJWT: ', err);
            } else {
                // Correcto
                resolve(token)
            }

        });

    });

}


module.exports = {
    generarJWT
}