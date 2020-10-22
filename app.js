const argv = require('./config/yargs').argv; //importacion de los comando de yargs.js
const {crearArchivo, listarTabla} = require('./Multiplicar/multiplicar.js') /*Importacion de funciones de la carptera multiplicar*/ 

let comando = argv._[0]; //extraer los valores del comando

switch(comando) { 
    case 'listar': 
        listarTabla(argv.base, argv.limite)
        break; 

    case 'crear':
        crearArchivo(argv.base, argv.limite)
        .then(archivo => console.log(`Comando crear archivo ejecutado ${archivo}`)) 
        .catch(e => console.log(e)); 
        break; 

    default: 
        console.log("comando no reconocido")
}


 /*Para recibir informacion desde el comando
 
 Pero esto es ineficiente debido a que cuando ingresemos mas comandos hay que 
 separar comando por comando para obtener la base

let argv = process.argv; 
let parametro = argv[2]; 
let base = parametro.split('=')[1] 

Separa los valores porel el =  */  
