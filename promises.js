const colors = require('colors/safe');
const { readFile } = require('fs/promises');
const { getLinks, statusLinks } = require('./functions.js');
const { existRoute,
    questionAbsoluteRoute,
    absoluteRoute,
    normalizeRoute,
    questionMdExtension } = require('./functiontest.js');
const fetch = require('node-fetch');


//función inicial que retorna una promesa que lee la data del archivo
const readingFileEnteredPath = (enteredPath) => {
    if (!existRoute(enteredPath)) {
        throw new Error(colors.red('Ruta no existe, asegúrese de haber ingresado la ruta correcta'));
    };

    if (!questionAbsoluteRoute(enteredPath)) {
        absoluteRoute(enteredPath);
        normalizeRoute(enteredPath);
    };

    if (questionMdExtension(enteredPath) === false) {
        throw new Error(colors.red('Archivo no contiene formato md, verifique el formato de su archivo'));
    };

    return new Promise((resolve, reject) => {
        resolve(readFile(enteredPath, 'utf-8'))
        reject('No fue posible leer el archivo')

    })
};


//función que retorna una promesa que se resuelve leyendo links contenidos en el archivo
const readingFile = (enteredPath) => {
    return new Promise((resolve, reject) => {
        readingFileEnteredPath(enteredPath)
            .then((dataFile) => {
                let arrayLinks = getLinks(dataFile, enteredPath);
                resolve(arrayLinks);
                reject('Error:No se pudo acceder a los links');

            })
    }
    )
}
//  readingFile(enteredPath)

//función que obtiene status de links
const status = (enteredPath) => {
    readingFileEnteredPath(enteredPath)
        .then((readingFile) => {
            let arrayLinks = getLinks(readingFile, enteredPath);
            // console.log(arrayLinks.length);
            let status = statusLinks(arrayLinks);

            return status;
        })
        .then((status) => {
            console.log(status)
            return status;
        })
}

//   status(enteredPath);


//función que obtiene el total de links
const totalLinks = (enteredPath) => {
    readingFile(enteredPath)
        .then(res => {
            console.log(colors.blue('Total:', res.length))
        })
        .catch(err => {
            console.log(err)
        })
}

//  totalLinks(enteredPath)

// Funcion que obtiene los links Unicos                          
const uniqueLinks = (enteredPath) => {
    const links = [];
    readingFile(enteredPath)
        .then(res => {
            res.map((link) => {
                links.push(link.href)
            })
            const unique = new Set(links);
            console.log(colors.cyan("Unique:" + unique.size))
        })
        .catch(err => {
            console.log(err)
        })
}
//  uniqueLinks(enteredPath)

//función que muestra links rotos
const brokenLinks = (enteredPath) => {

    readingFile(enteredPath)
        .then(res => {
            res.map(link =>
                fetch(link)
                    .then(res => {
                        return res.status
                    })
                    .then(res => {
                        if (res >= 399) {
                            let broken = [];
                            broken.push(res);
                            console.log(colors.red('Broken: ' + broken.length))
                        }

                    })

            )
        })
}
//  brokenLinks(enteredPath)

module.exports = {
    readingFile,
    status,
    totalLinks,
    uniqueLinks,
    brokenLinks
}




