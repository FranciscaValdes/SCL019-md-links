const enteredPath = process.argv[2].toString().trim();
const colors = require('colors/safe');
const { readFile } = require('fs/promises');
const { getLinks, statusLinks } = require('./functions.js');
const { existRoute,
    questionAbsoluteRoute,
    absoluteRoute,
    normalizeRoute,
    questionMdExtension } = require('./functiontest.js');


const readingFileEnteredPath = (enteredPath) => {
    return new Promise((resolve, reject) => {
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

       
        resolve(readFile(enteredPath, 'utf-8'))
        
        reject('No fue posible leer el archivo')

    })
};



const readingFile = (enteredPath) => {
    return new Promise((resolve, reject) => {
        readingFileEnteredPath(enteredPath)
            .then((dataFile) => {
                let arrayLinks = getLinks(dataFile, enteredPath);
                resolve(arrayLinks)
                //  return arrayLinks
            });


    }
    )
}

const status = (enteredPath) => {
    readingFileEnteredPath(enteredPath)
        .then((readingFile) => {
            let arrayLinks = getLinks(readingFile, enteredPath);
            console.log(arrayLinks.length);
            let status = statusLinks(arrayLinks);
            return status;
        })
        .then((status) => {
            console.log(status)
            return status;
        })
}

status(enteredPath);


const totalLinks = (enteredPath) => {
    readingFile(enteredPath)
        .then(res => {
            console.log('TOTAL:', res.length)
        })
        .catch(err => {
            console.log(err)
        })
}

//totalLinks(enteredPath)

// Funcion que obtiene los links Unicos
const uniqueLinks = (enteredPath) => {
    const unique = [];
    readingFile(enteredPath)
        .then(res => {
            res.map((link) => {
                unique.push(link.href)
            })
            const mySet = new Set(unique);
            console.log("Unique:", mySet.size)
        })
        .catch(err => {
            console.log(err)
        })
}
//uniqueLinks

const totalAndBrokenLinks = (enteredPath) => {
    readingFile(enteredPath)
        .then(res => {
            const broken = [];
            res.forEach((link) => {
                broken.push(statusLinks(link.href));
            })
            Promise.all(broken)
                .then(response => {
                    const result = response.filter(status => {
                        if (status >= 400) {
                            return status;
                        }
                    })
                    console.log('Total:', res.length)
                    console.log('Broken:', result.length)
                })
        })
        .catch(err => {
            console.log(err)
        })
}


totalAndBrokenLinks(enteredPath)

module.exports = {
    readingFile,
    status,
    totalLinks,
    uniqueLinks
}