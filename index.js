// // module.exports = () => {
// //   // ...
// // };

const path = require('path');
const fs = require('fs');
const colors = require('colors/safe');
const { exit } = require('process');
const { resolve } = require('path');
const { error } = require('console');
// // const readline = require('readline');
// // const prompts = readline.createInterface(process.stdin, process.stdout);
//  const stdin = process.openStdin(); //función openStdin() para aceptar entradas por teclado
const stdout = process.stdout;
let receivedRoute= process.argv[2].toString().trim()

file= path.isAbsolute(receivedRoute);// true or false

// const receivedRouteS = receivedRoute.toString().trim()
receivedRoute = path.resolve(receivedRoute); //ruta absoluta
receivedRoute= path.normalize(receivedRoute); //normaliza la ruta

// stdout.write(colors.cyan('Ingrese la ruta a su archivo:'));

const routeExists = (receivedRoute)  => fs.existsSync(receivedRoute);

 if (routeExists(receivedRoute)){
stdout.write(colors.cyan('La ruta existe => Buscando archivo md'))}
 else{
    stdout.write('La ruta no existe, favor verificar ruta y volver a ingresar')
 }


 //let mdExtension =  ? true_value : false_value //Si es cierto, entonces true_value se asigna a la variable, caso contrario, entonces false_value se asigna a la variable.

const readFile = new Promise((resolve, reject) => {
    if (path.extname(receivedRoute) === '.md'){
        resolve(fileContent= fs.readFile(receivedRoute, 'utf8', function(err, data){
            console.log(data);
        }))
         
    }
else{
   reject(stdout.write(colors.red('No se reconoce archivo md en la ruta ingresada, verificar extensión'))) 
}
});

readFile
.then((response) => {
    stdout.write(colors.cyan('Archivo leído correctamente, extrayendo links', response));
})
.catch((error) => {
    stdout.write(colors.red('No se pudo leer el archivo, verifique extención .md', error));
})




    // const reading = () => {
    //     //console.log(absolutePath);
    //     const fileContent = fs.readFileSync(absolutePath, 'utf-8', (error, data) => {
    //         if (!error) {
    //             return data;
    //         } else {
    //             return console.log(`Error: ${error}`);
    //         }
    //     })
    //     return fileContent;
    // }



    
 

