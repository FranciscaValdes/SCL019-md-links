#!/usr/bin/env nodo
const { readingFile, status, totalLinks, uniqueLinks, brokenLinks } = require('./promises.js');
const path = process.argv[2].toString().trim();
const options = process.argv[2, 3];


function mdLinks(path, options) {

    if (path) {
        return new Promise((resolve, reject) => {
            switch (options) {
                case undefined:
                    resolve(
                        readingFile(path)
                            .then((res) => {
                                console.log(res)
                            })

                    );

                    break;

                case '--validate':
                    resolve(
                        status(path));
                    break;

                case '--stats':
                    resolve(
                        totalLinks(path),
                        uniqueLinks(path))

                    break;

                case '--validate--stats':
                    resolve(
                        totalLinks(path),
                        uniqueLinks(path),
                        brokenLinks(path)
                    )
                    break;

            }reject((error) => console.log(error))

        })
    }
}



mdLinks(path, options)
.then((res)=> res)
.catch((error) => error)


module.exports = {
    mdLinks
}

