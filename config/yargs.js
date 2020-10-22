
//Para no crear 2  veces las mismas intrucciones con los mismo comando se la pone en un Objeto
const opciones = { 
    base: { 
        demand: true, /*Para que se requerido ingreso de valor*/
        alias: 'b'
    },
    limite: { 
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
            .command('listar','Imprime en consola la tabla de multiplicar', opciones)
            .command('crear','Crea la tabla de multiplicar hasta n limite', opciones)
            .help()/* EL listado de requermientos o defaults*/ 
            .argv; 


module.exports = { 
    argv
}

