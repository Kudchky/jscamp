const products = [
    {
        id: 1,
        name: "Arroz Extra",
        price: 25.50,
        category: "Granos",
        stock: 50,
        description: "Arroz de grano largo 1kg",
        marca: "La Guacamaya"
    },
    {
        id: 2,
        name: "Aceite Vegetal",
        price: 32.99,
        category: "Aceites",
        stock: 30,
        description: "Aceite de soya 1 litro",
        marca: "Capullo"
    },
    {
        id: 3,
        name: "Atún en Lata",
        price: 18.50,
        category: "Enlatados",
        stock: 40,
        description: "Atún en agua 140g",
        marca: "Herdez"
    },
    {
        id: 4,
        name: "Leche Entera",
        price: 24.80,
        category: "Lácteos",
        stock: 35,
        description: "Leche ultrapasteurizada 1L",
        marca: "Lala"
    },
    {
        id: 5,
        name: "Jabón de Ropa",
        price: 15.75,
        category: "Limpieza",
        stock: 25,
        description: "Jabón en polvo 1kg",
        marca: "Roma"
    },
    {
        id: 6,
        name: "Frijol Negro",
        price: 28.30,
        category: "Granos",
        stock: 45,
        description: "Frijol negro 1kg",
        marca: "La Moreña"
    },
    {
        id: 7,
        name: "Pasta Dental",
        price: 22.40,
        category: "Higiene",
        stock: 60,
        description: "Pasta dental 90ml",
        marca: "Colgate"
    },
    {
        id: 8,
        name: "Galletas María",
        price: 12.99,
        category: "Botanas",
        stock: 55,
        description: "Galletas María 400g",
        marca: "Gamesa"
    },
    {
        id: 9,
        name: "Café Instantáneo",
        price: 45.60,
        category: "Bebidas",
        stock: 20,
        description: "Café soluble 200g",
        marca: "Nescafé"
    },
    {
        id: 10,
        name: "Papel Higiénico",
        price: 38.90,
        category: "Higiene",
        stock: 28,
        description: "4 rollos de papel higiénico",
        marca: "Regio"
    }
];

function getProducts() {
    return products;
}

function searchProduct(id) {
    return products.find((product) => product.id === id);
}

function updateStock(id, quantitySold) {
    const product = searchProduct(id);

    if (product && product.stock >= quantitySold) {
        product.stock -= quantitySold;
        return true;
    }

    return false;
}

function stockProductsAvailable() {
    return products.filter((product) => product.stock > 0);
}

export default {
    products,
    getProducts,
    searchProduct,
    updateStock,
    stockProductsAvailable,
};
