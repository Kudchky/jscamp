const products = [
    {
        id: 1,
        name: "Laptop Gamer",
        price: 1200.0,
        category: "Tecnología",
        stock: 5,
        description: "Laptop para gaming de alta gama",
    },
    {
        id: 2,
        name: "Mouse Inalámbrico",
        price: 25.99,
        category: "Accesorios",
        stock: 15,
        description: "Mouse ergonómico inalámbrico",
    },
    {
        id: 3,
        name: "Teclado Mecánico",
        price: 89.5,
        category: "Accesorios",
        stock: 8,
        description: "Teclado mecánico RGB",
    },
    {
        id: 4,
        name: 'Monitor 24"',
        price: 199.99,
        category: "Tecnología",
        stock: 3,
        description: "Monitor Full HD 24 pulgadas",
    },
    {
        id: 5,
        name: "Auriculares Bluetooth",
        price: 45.0,
        category: "Audio",
        stock: 12,
        description: "Auriculares con cancelación de ruido",
    },
];

function getProducts() {
    return products;
}

function searchProduct(id) {
    return products.find(product => product.id === id);
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
    return products.filter(product => product.stock > 0)
}
