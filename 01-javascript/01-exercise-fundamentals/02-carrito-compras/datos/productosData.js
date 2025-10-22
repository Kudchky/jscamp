const productos = [
    {
        id: 1,
        name: "Arroz Costeño",
        price: 18.5,
        category: "Granos",
        stock: 25,
        description: "Arroz extra 1kg",
    },
    {
        id: 2,
        name: "Aceite Primor",
        price: 32.8,
        category: "Aceites",
        stock: 18,
        description: "Aceite vegetal 1L",
    },
    {
        id: 3,
        name: "Azúcar Rubia",
        price: 12.3,
        category: "Endulzantes",
        stock: 32,
        description: "Azúcar rubia 1kg",
    },
    {
        id: 4,
        name: "Leche Gloria",
        price: 8.2,
        category: "Lácteos",
        stock: 45,
        description: "Leche evaporada 400g",
    },
    {
        id: 5,
        name: "Atún Florida",
        price: 14.5,
        category: "Enlatados",
        stock: 20,
        description: "Atún en aceite 140g",
    },
    {
        id: 6,
        name: "Frijol Canario",
        price: 16.75,
        category: "Legumbres",
        stock: 15,
        description: "Frijol canario 1kg",
    },
    {
        id: 7,
        name: "Aceituna Rellena",
        price: 9.8,
        category: "Conservas",
        stock: 28,
        description: "Aceitunas rellenas 200g",
    },
    {
        id: 8,
        name: "Harina Blanca Flor",
        price: 11.4,
        category: "Harinas",
        stock: 22,
        description: "Harina sin polvos 1kg",
    },
    {
        id: 9,
        name: "Fideo Don Vittorio",
        price: 7.9,
        category: "Pastas",
        stock: 38,
        description: "Fideo tallarín 400g",
    },
    {
        id: 10,
        name: "Sal Sol",
        price: 5.6,
        category: "Condimentos",
        stock: 50,
        description: "Sal refinada 1kg",
    },
];

function obtenerProductos() {
    return [...productos];
}

function mostrarProductos() {
    return productos
        .filter((producto) => producto.stock > 0)
        .map((producto) => ({ ...producto }));
}

function verificarStock(productId, cantidadSolicitada) {
    if (typeof cantidadSolicitada !== "number" || cantidadSolicitada <= 0) {
        return false;
    }
    return productos.some(
        (el) => el.id === productId && el.stock >= cantidadSolicitada
    );
}

function actualizarStock(id, cantidadVendida) {
    if (verificarStock(id, cantidadVendida)) {
        productos.find((producto) => producto.id === id).stock -=
            cantidadVendida;
        return true;
    }

    return false;
}

function buscarProducto(id) {
    const producto = productos.find((producto) => producto.id === id);
    return producto ? { ...producto } : null;
}

export {
    obtenerProductos,
    mostrarProductos,
    verificarStock,
    actualizarStock,
    buscarProducto,
};
