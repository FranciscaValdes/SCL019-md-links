const path = require('path');
const fs = require('fs');
const {readFile} = require('fs/promises');
const colors = require('colors/safe');
const { exit } = require('process');
const { resolve } = require('path');
const { error } = require('console');
const markdownIt= require('markdown-it')();
const jsdom = require('jsdom');
const { get } = require('https');
const { JSDOM } = jsdom;
// // const readline = require('readline');
// // const prompts = readline.createInterface(process.stdin, process.stdout);
//  const stdin = process.openStdin(); //función openStdin() para aceptar entradas por teclado
const stdout = process.stdout;
let receivedRoute= process.argv[2].toString().trim()
let obtainedLinks = [];
let infoLinks = {};


// const receivedRouteS = receivedRoute.toString().trim()
receivedRoute = path.resolve(receivedRoute); //ruta absoluta
receivedRoute= path.normalize(receivedRoute); //normaliza la ruta
console.log(receivedRoute);
// stdout.write(colors.cyan('Ingrese la ruta a su archivo:'));


if(!fs.existsSync(receivedRoute)){
    throw new Error('Ruta no existe');
}
if(path.extname(receivedRoute) !== '.md'){
throw new Error('Archivo no contiene formato md');
}

readFile(receivedRoute, 'utf-8')
.then((readingFile) => {
return readingFile;
})
.then((readingfileString) => {
    const convertHtml = markdownIt.render(readingfileString); //convierte md a html
                       const domContent = new JSDOM(convertHtml);
                       const linksCrudos = Array.from(domContent.window.document.querySelectorAll('a'));
                       const links = linksCrudos.map((linkCrudo)=>{
                       return linkCrudo.href
                       })
                    
                     return linksCrudos;
                       
})
 .then ( (linksCrudos) => {
     obtainedLinks = [];
    linksCrudos.forEach((link) => {
                            if (link.href.includes("http", "https")){              
                              infoLinks = {
                                   href: link.href,
                                   text: link.text,
                                   file: receivedRoute,
                               }
                            obtainedLinks.push(infoLinks);
                             }
                       });
                       console.log(obtainedLinks);
                       console.log(obtainedLinks.length);
                       return obtainedLinks;
})

 

