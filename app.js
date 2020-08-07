const { argv } = require('./config/yargs');

const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];


switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => {
            console.log(`Archivo creado: ${colors.green(archivo)}`);
        }).catch(console.log);
        break;

    default:
        console.log('Comando no reconocido');
        break;
}


// console.log(process.argv);

// let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];

// console.log('límite', argv.limite);
// console.table(argv2);

// crearArchivo(base).then(archivo => {
//     console.log(`Archivo creado: ${archivo}`);
// }).catch(console.log);