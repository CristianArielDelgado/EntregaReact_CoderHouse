const products = [
  // Cervezas
  { id: "1", name: "Cerveza Lata Quilmes", img: "../src/assets/images/producto01.jpg", alt:"Cerveza Lata Quilmes", price: 550, category: "cerveza", description: "Cerveza Lata Quilmes 473 Ml. Ideal para tomar bien fria.", stock: 5 },
  { id: "2", name: "Cerveza Andes Rubia", img: "../src/assets/images/producto02.jpg", alt:"Cerveza Andes Rubia", price: 580, category: "cerveza", description: "Cerveza Andes Rubia en lata 473 Ml. Ideal para tomar con amigos.", stock: 8 },
  { id: "3", name: "Cerveza Brahma", img: "../src/assets/images/producto03.jpg", alt:"Cerveza Brahma", price: 590, category: "cerveza", description: "Cerveza Brahma 473 Ml. Ideal para tomar si te dejo tu ex.", stock: 9 },
  
  // Vinos
  { id: "4", name: "Vino La Celia", img: "../src/assets/images/producto04.jpg", alt:"Vino La Celia", price: 2385, category: "vino", description: "Vino La Celia Reserva Malbec 750cc. Ideal para tomar despues de un partido de futbol.", stock: 11 },
  { id: "5", name: "Vino Rosado Dulce", img: "../src/assets/images/producto05.jpg", alt:"Vino Rosado Dulce", price: 1790, category: "vino", description: "Vino Rosado Dulce Cosecha Tardia 750 Ml. Sirve para ahogar penas.", stock: 12 },
  { id: "6", name: "Vino Blanco", img: "../src/assets/images/producto06.jpg", alt:"Vino Blanco", price: 1860, category: "vino", description: "Vino Blanco New Age 750 Ml. El mejor de la epoca.", stock: 3 },
  
  //Champagnes
  { id: "7", name: "Champagne Navarro", img: "../src/assets/images/producto07.jpg", alt:"Champagne Navarro", price: 3100, category: "champagne", description: "Champagne Navarro Correa Extra Brut 750 Ml. Champagne ATR.", stock: 6 },
  { id: "8", name: "Champagne Novecento", img: "../src/assets/images/producto08.jpg", alt:"Champagne Novecento", price: 1700, category: "champagne", description: "Champagne Novecento Extra Brut 750 ml. Dale que va.", stock: 5 },
  { id: "9", name: "Champagne Fresita", img: "../src/assets/images/producto09.jpg", alt:"Champagne Fresita", price: 4000, category: "champagne", description: "Champagne Fresita Con Fresas 750 Ml. Rosa rosa tan maravillosa.", stock: 1 },

];
  export const getProducts = () => {
    return new Promise((resolve, reject) => {

      if (products.length > 0) {
        setTimeout(() => {
          resolve(products);
        }, 2000);
      } else {
        reject("No hay productos");
      }
    });
  };

  export const getProduct = ( id ) => {
    return new Promise((resolve, reject) => {

      const product = products.find( product => product.id === id);
      setTimeout( () => { 
        if(!product) {
          reject("No se encontró el producto solicitado")
        } else {
          resolve(product);
        }
}, 2000 )
    });
  };
