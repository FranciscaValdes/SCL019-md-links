const markdownIt = require('markdown-it')();
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const fetch = require('node-fetch');



//función que obtiene array con objeto que contiene información de links
const getLinks = (mdFile, route) => {
  const convertHtml = markdownIt.render(mdFile); //convierte md a html
  const domContent = new JSDOM(convertHtml); //biblioteca que analiza e interactúa con html ensamblado como un navegador
  const links = Array.from(domContent.window.document.querySelectorAll('a')); //array de elementos 'a'
  const obtainedLinks = [];
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
  // console.log(obtainedLinks);
  return obtainedLinks;
}


//función que retorna status de links
const statusLinks = links => {
  const objectDetailsLinks = links.map(link => {
    return fetch(link)
      .then((response) => {
        return {
          file: link.file,
          text: link.text,
          href: link.href,
          status: response.status,
          ok: 'ok',
        }
      })
      .catch((error) => {
        return {
          file: link.file,
          text: link.text,
          href: link.href,
          status: error.status === undefined ? 'El estado del status es indefinido' : error.status,
          ok: 'fail',
        }
      })
  });
  return Promise.all(objectDetailsLinks)
}


module.exports = {
  getLinks,
  statusLinks,
}