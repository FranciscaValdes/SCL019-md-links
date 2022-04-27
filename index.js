const { options } = require('markdown-it/lib/presets/default');
const { readingFile, status, totalLinks, uniqueLinks, brokenLinks } = require('./promises.js');
const enteredPath = process.argv[2].toString().trim();
let validate = process.argv[3];
let validateStats = validate + process.argv[4];


const mdLinks = (enteredPath, options) => {

    if (enteredPath) {
        switch (options) {
            case undefined:
                readingFile(enteredPath)
                    .then((res) => {
                        console.log(res)
                    })
                break;

            case '--validate':
                status(enteredPath);
                // .then((res) => {
                //     console.log(res)
                // })
                break;

            case '--stats':
                totalLinks(enteredPath);
                uniqueLinks(enteredPath)
                    ;
                break;

            case '--validate--stats':
                totalLinks(enteredPath);
                uniqueLinks(enteredPath);
                brokenLinks(enteredPath);

                break;
        }



    }
}

 mdLinks(enteredPath, validate);
module.exports = {
    mdLinks
}

