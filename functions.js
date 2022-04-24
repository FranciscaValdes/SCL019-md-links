const fs = require('fs');
const path = require('path');

const { readFile } = require('fs/promises');
const urlStatusCode = require('url-status-code');

let route = process.argv[2].toString().trim()




// const readingMdFile = (route) => readFile(route, 'utf-8');  // lee el archivo
// console.log(readingMdFile(route));

const url = 'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Using_promises';

const urlc = (url) => {
  urlStatusCode(url, (error, statusCode) => {
    if (error) {
      console.error(error)
    } else {
      console.log(statusCode)
    }
  })
}

// console.log(urlc)

// console.log(urlStatusCode('https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Using_promises'));

//función que obtiene array con objeto de información de links
const getlinks = (mdFile, route) => {
  const convertHtml = markdownIt.render(mdFile); //convierte md a html
  const domContent = new JSDOM(convertHtml); //biblioteca que analiza e interactúa con html ensamblado como un navegador
  const links = Array.from(domContent.window.document.querySelectorAll('a')); //array de elementos 'a'
  // const links = rawLinks.map((linkCrudo) => {
  //     return linkCrudo.href
  // })
  let obtainedLinks = [];
  links.forEach((link) => {
    if (link.href.includes("http", "https")) {
      infoLinks = {
        href: link.href,
        text: link.text,
        file: route,
      }
      obtainedLinks.push(infoLinks);
    }
  })
  return obtainedLinks;
}


//función que muestra en consola links únicos
const uniqueLinks = (links) => {

  const unique = [];
  links.map((link) => {
    unique.push(link.href)
  })
  const mySet = new Set(unique);
  console.log('Unique: ', mySet.size);
}




module.exports = {
  // readingMdFile,
  getlinks,
  // linkStatus,
  uniqueLinks,

}