const { readingFile, status, totalLinks, uniqueLinks } = require('./promises.js');
const enteredPath = process.argv[2].toString().trim();
options = process.argv[3] , process.argv[4];

const mdLinks = (enteredPath, options) => {
    return new Promise((resolve, reject) => {

        switch (options) {
            case undefined:
                resolve(readingFile(enteredPath));
                break;

            case --validate:
                resolve(status(enteredPath));
                break;

            case --stats:
                resolve(totalLinks(enteredPath), uniqueLinks(enteredPath));
                break;

            case --validate, --stats:
                resolve();
                break;
        }


        reject('No se pudo leer el archivo')
    })
}

module.exports= {
    mdLinks
}

