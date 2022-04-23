const fs = require('fs');
const path = require('path');

const existRoute = (route) => fs.existsSync(route); //ruta existe?


const questionAbsoluteRoute = (route) => path.isAbsolute(route); // ruta es absoluta? true/false

const absoluteRoute = (route) => path.resolve(route);

const questionMdExtension = (route) => path.extname(route) === '.md'; //true si extensión es md

//función que obtiene status de links

const linkStatus = (url) => {
    urlStatusCode(url, (error, statusCode) => {
      if (error) {
        console.log(error)
      } else {
        return statusCode;
      }
    })
  }
  