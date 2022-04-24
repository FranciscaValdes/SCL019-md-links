const fs = require('fs');
const path = require('path');
const fetchUrl = require("fetch").fetchUrl;

const existRoute = (route) => fs.existsSync(route); //ruta existe?


const questionAbsoluteRoute = (route) => path.isAbsolute(route); // ruta es absoluta? true/false

const absoluteRoute = (route) => path.resolve(route); //ruta relativa la convierte en absoluta

const normalizeRoute = (route) => path.normalize(route); // normalizando la ruta


const questionMdExtension = (route) => path.extname(route) === '.md'; //true si extensión es md

//función que obtiene status de links
let url = 'https://www.npmjs.com';
const linkStatus = (url) => {
  // return new Promise((resolve, rejects) => {
    fetchUrl(url, (error, meta) => {
      if (meta) {
        // resolve(meta.status);
       console.log( meta.status)
      } else {
        // rejects(error)
        console.log(error)
      }
    })
  // })
}


console.log(linkStatus(url))

  module.exports = {
    existRoute,
    questionAbsoluteRoute,
    absoluteRoute,
    normalizeRoute,
    questionMdExtension,
    
  }
  