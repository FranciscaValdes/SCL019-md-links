const path = require('path');
const fs = require('fs');
const { readFile } = require('fs/promises');
const colors = require('colors/safe');
const { exit } = require('process');
const { resolve } = require('path');
const { error } = require('console');
const markdownIt = require('markdown-it')();
const jsdom = require('jsdom');
const { get } = require('https');
const { JSDOM } = jsdom;
const functions = require('./functions.js');
const nodeType = require('jsdom/lib/jsdom/living/node-type');
const { rejects } = require('assert');
const { options } = require('markdown-it/lib/presets/default');
const status = functions.status;
const { existRoute, questionAbsoluteRoute, absoluteRoute, normalizeRoute, questionMdExtension, linkStatus } = require('../functiontest.js')

const stdout = process.stdout;
//recibiendo la ruta
let receivedRoute = process.argv[2].toString().trim();
const validate = process.argv[3];
const stats = process.argv[4];



//pasandola la ruta a absoluta
receivedRoute = path.resolve(receivedRoute);


// stdout.write(colors.cyan('Ingrese la ruta a su archivo:'));

//no existe la ruta? => error
//existe? => sigue adelante


// const mdLinks = (enteredPath, options) => {
//     return new promise((resolve, rejects) => {
//         if (!existRoute(enteredPath)) {
//             throw new Error('Ruta no existe');
//         } else {
//             questionAbsoluteRoute(enteredPath) ? enteredPath : absoluteRoute(enteredPath);
//             normalizeRoute(enteredPath);
//         };
//         if (questionMdExtension(enteredPath) !== '.md') {
//             throw new Error('Archivo no contiene formato md');
//         }
//         resolve(readFile(enteredPath, 'utf-8'));
//         rejects(stdout('Archivo no se puede leer'));
        


//     })
// }










// }

// const readingFileEnteredPath = (enteredPath) => {
//     return new promise((resolve, rejects) => {
//         if (!existRoute(enteredPath)) {
//             throw new Error('Ruta no existe');
//         } else {
//             questionAbsoluteRoute(enteredPath) ? enteredPath : absoluteRoute(enteredPath);
//             normalizeRoute(enteredPath);
//         };
//         if (questionMdExtension(enteredPath) !== '.md') {
//             throw new Error('Archivo no contiene formato md');
//         }
//         resolve(readFile(enteredPath, 'utf-8'));
//         rejects(stdout('Archivo no se puede leer'));
//     })

//         .then((readingFile) => {
//             return readingFile;
//         })
// }
console.log(readFile(receivedRoute, 'utf-8'));
// .then((readingfileString) => {
//     const convertHtml = markdownIt.render(readingfileString); //convierte md a html
//     const domContent = new JSDOM(convertHtml); //biblioteca que analiza e interactúa con html ensamblado como un navegador
//     const linksCrudos = Array.from(domContent.window.document.querySelectorAll('a')); //array de elementos 'a'
//     const links = linksCrudos.map((linkCrudo) => {
//         return linkCrudo.href
//     })
//     // console.log(linksCrudos);
//     return linksCrudos;


// const readingDataFile = (dataFile) => {
//     const convertHtml = markdownIt.render(dataFile); //convierte md a html
//     const domContent = new JSDOM(convertHtml); //biblioteca que analiza e interactúa con html ensamblado como un navegador
//     const linksCrudos = Array.from(domContent.window.document.querySelectorAll('a')); //array de elementos 'a'
//     const links = linksCrudos.map((linkCrudo) => {
//         return linkCrudo.href
//     })
//     //     // console.log(linksCrudos);
//     return linksCrudos;
// }


    // .then((linksCrudos) => {
    //     let obtainedLinks = [];
    //     linksCrudos.forEach((link) => {
    //         if (link.href.includes("http", "https")) {
    //             infoLinks = {
    //                 href: link.href,
    //                 text: link.text,
    //                 file: receivedRoute,
    //             }
    //             obtainedLinks.push(infoLinks);
    //         }
    //     });
    //     // console.log(obtainedLinks);
    //     console.log(obtainedLinks.length);

    //     return obtainedLinks;
    // })
    // .then((obtainedLinks) => {
    //     let linkStatus = [];
    //     obtainedLinks.map((link) => {
    //         let url = link.href;
    //         status(url).then((res => {
    //             url.status = res;
    //             //  console.log(hrefLinks);
    //             linkStatus.push(hrefLinks);
    //         })).catch(res => {
    //             res
    //         })

    //     }); //return linkStatus;
    // })
    // .then((linkStatus) => {
    //     console.log(linkStatus)
    // })



