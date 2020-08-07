//requireds
const fs = require('fs');
const colors = require('colors');
// const fs = require('express');
// const fs = require('./fs');


const listarTabla = (base, limite) => {
    console.log('================='.green);
    console.log(`tabla de ${base}`.green);
    console.log('================='.green);

    for (let i = 1; i < limite; i++) {



        console.log(`${base} * ${i} = ${base*i}`);

    }

}



const crearArchivo = async(base, limite = 10) => {

    let data = '';

    if (!Number(base)) {
        throw new Error('No es un número');
    }

    for (let i = 1; i <= limite; i++) {
        data += `${base} * ${i} = ${base*i}\n`;
    }

    const res = fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (error => error));

    if (!res) return `tabla-${base}.txt`;
    else
        throw new Error(`No se pudo crear la tabla-${base}-al-${limite}.txt`);

}


module.exports = {
    crearArchivo,
    listarTabla
}