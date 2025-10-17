/*Objetivo:
Crea un carrito que gestione productos con métodos para agregar, remover, calcular total y aplicar descuentos.
 */

const { updateStock } = require("./products");

class ShoppingCar {
    constructor() {
        this._car = [];
    }

    get car() {
        return [...this._car];
    }

    set car(newCar) {
        if (Array.isArray(newCar)) {
            this._car = newCar;
        }
    }

    get quantityOfProducts() {
        return this._car.length;
    }

    get total() {
        return this._car.reduce(
            (acc, product) => acc + product.price * product.quantity,
            0
        );
    }

    addProduct(products, name, quantity) {
        const exists = this._car.find((product) => product.name === name);

        if (exists) {
            exists.quantity += quantity;
        } else {
            const product = products.find((product) => product.name === name);
            if (!product) {
                throw new Error(`Product "${name}" not found`);
            }
            if (product.stock < quantity) {
                throw new Error(`Stock unavailable`);
            }
            this._car.push({ name, price: product.price, quantity });

            updateStock(product.id, quantity);
        }
    }

    removeProduct(name) {
        this._car = this._car.filter((product) => product.name !== name);
    }


}
