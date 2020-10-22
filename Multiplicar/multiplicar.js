const fs = require('fs');/*require('fs') paquetes de node
                          require('express) paquetes afuera de node 
                          require('./fs') nosotros creamos
                          */



//Mostrar la tabla en el cmd
let listarTabla = (base,limite = 10) => { 
    for(let i=0;i<limite;i++){ 
       console.log(`${base} * ${i} = ${base * i} \n`);
    }
}


let crearArchivo = (base, limite = 10) => { 
    return new Promise ((resolve,reject) => { 
        
        if(!Number(base) && !Number(limite)){ 
            reject('No es numero!')
            return; 
        }

        let data = ''; 
        
        for(let i=0;i<=limite;i++){ 
            data += `${base} * ${i} = ${base * i} \n`;
        }
        
        fs.writeFile(`Tablas/tabla-${base}.txt`, data, (err) => {/*si queremos guardar en una carpeta se utiliza / */
            if (err) 
                reject(err)
            else                                
               resolve(`tabla-${base}.txt`)
        });
    });
}


//exportar funciones
module.exports = { 
    crearArchivo,
    listarTabla
}

/*Tambien se puede exportar escribiendo al inicio de la funcion
    module.export.crearArchivo
*/