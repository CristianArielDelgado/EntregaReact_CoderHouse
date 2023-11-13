const products = [
    {id: "1", name:"Camisa", description: "Una camisa", stock: 4},
    {id: "2", name:"Corbata", description: "Una corbata", stock: 8},
    {id: "3", name:"Pantalon", description: "Un Pantalon", stock: 10},
    {id: "4", name:"Zapatilla", description: "Una Zapatilla", stock: 12 },
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