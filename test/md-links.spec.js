// const mdLinks = require('../');


// describe('mdLinks', () => {

//   it('should...', () => {
//     console.log('FIX ME!');
//   });

// });readingMdFile,getlinks 
//funciones para testear
const { existRoute, questionAbsoluteRoute,absoluteRoute, questionMdExtension, linkStatus} = require('../functiontest.js')

//Data para utilizar en test
const path = './README.md';
const absolutePath = 'C:/Users/HP Pavilio/Desktop/MD-LINKS/SCL019-md-links/PRUEBA.md'
const failPath = './prueba.ms';
const relativePath = './PRUEBA.md';
const pathPng = 'C:\Users\HP Pavilion\Desktop\MD-LINKS\SCL019-md-links\thumb.png';

//Inicio test//
//test función existRoute
describe('Función existRoute verifica si la ruta existe o no', () => {
it('is a Function', () => {
  expect(typeof existRoute).toBe('function');
});
it('Debería retornar true si la ruta existe', () => {
  expect(existRoute(path)).toBe(true);
});
it('Debería retornar false si la ruta no existe', () => {
  expect(existRoute(failPath)).toBe(false);
});
})

//testea función questionAbsoluteRoute
describe('Función questionAbsoluteRoute verifica si la ruta si la ruta es relativa o no', () => {
  it('is a Function', () => {
    expect(typeof questionAbsoluteRoute).toBe('function');
  });
  it('Debería retornar true si la ruta es absoluta', () => {
    let route = 'C:/Users/HP Pavilio/Desktop/MD-LINKS/SCL019-md-links/PRUEBA.md'
    let result = questionAbsoluteRoute(route);
    expect(result).toEqual(true);
  });
  it('Debería retornar false si la ruta no es absoluta', () => {
    let route = 'PRUEBA.md'
    let result = questionAbsoluteRoute(route);
    expect(result).toBe(false);
  });
  })

//testea función absoluteRoute
describe('Función absoluteRoute convierte una ruta relativa en absoluta', () => {      //revisar función que retorna
  it('is a Function', () => {
    expect(typeof absoluteRoute).toBe('function');
  })
  it ('Debería retornar una ruta absoluta si la ruta pasada es relativa', () => {
    let routeAbsolute = "C:\\Users\\HP Pavilion\\Desktop\\MD-LINKS\\SCL019-md-links\\PRUEBA.md"
    let result = absoluteRoute(relativePath);
    expect(result).toBe(routeAbsolute);
  })
})

//testa función questionMdExtension
describe('Función questionMdExtension comprueba si la ruta entregada contine archivo con extensión .md ', () => {
  it('is a Function', () => {
    expect(typeof questionMdExtension).toBe('function');
  })
  it ('Debería retornar true si la ruta contiene archivo extensión .md', () => {
    expect(questionMdExtension(absolutePath)).toBe(true);
  })
  it ('Debería retornar false si la ruta no contiene archivo con extensión .md', () => {
    expect(questionMdExtension(pathPng)).toBe(false);
  })
}
)

//testea función linkStatus
describe('Función linkStatus ', () => {
  it('is a Function', () => {
    expect(typeof questionMdExtension).toBe('function');
  })
  it ('Debería retornar true si la ruta contiene archivo extensión .md', () => {
    expect(questionMdExtension(absolutePath)).toBe(true);
  })
  it ('Debería retornar false si la ruta no contiene archivo con extensión .md', () => {
    expect(questionMdExtension(pathPng)).toBe(false);
  })
}
)
// //testea función readingMdFile
// describe('Función readingMdFile ', () => {
//   it('is a Promise', () => {
//     expect(typeof readingMdFile).toBe('promise');
//   })
//   it ('Debería retornar el contenido del archivo que está leyendo', () => {

//     expect(readingMdFile(absolutePath)).toBe();
//   })
//   it ('Debería retornar false si la ruta no contiene archivo con extensión .md', () => {
//     expect(questionMdExtension(pathPng)).toBe(false);
//   })
// }
// )
