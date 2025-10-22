import { buscarProducto, verificarStock } from "../datos/productosData";

class Carrito {
    constructor() {
        this._items = [];
        this._total = 0;
        this._cantidadItems = this._items.length;
    }

    itemExiste(productoId) {
        return this._items.find((item) => item.productoId === productoId);
    }

    agregarProducto(productoId, cantidad) {
        const producto = verificarStock(productoId, cantidad);

        if (producto) {
            const existe = this.itemExiste(productoId);

            if (existe) {
                existe.cantidad += cantidad;
            } else {
                this._items.push({
                    productoId,
                    cantidad,
                });
            }

            producto.stock -= cantidad;
            return true;
        }

        return false;
    }

    eliminarProducto(productoId) {
        const item = this.itemExiste(productoId);

        if (item) {
            const producto = buscarProducto(productoId);
            producto.stock += item.cantidad;

            this._items = this._items.filter(el => el.productoId !== productoId);
            return true;
        }

        return false;
    }
}
