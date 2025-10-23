import { buscarProducto, verificarStock } from "../datos/productosData";

class Carrito {
    constructor() {
        this._items = [];
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

            this._items = this._items.filter(
                (el) => el.productoId !== productoId
            );
            return true;
        }

        return false;
    }

    actualizarCantidad(productoId, nuevaCantidad) {
        if (nuevaCantidad <= 0) {
            return false;
        }

        const item = this.itemExiste(productoId);

        if (item) {
            const producto = buscarProducto(productoId);

            if (producto.stock + item.cantidad >= nuevaCantidad) {
                producto.stock = producto.stock + item.cantidad - nuevaCantidad;
                item.cantidad = nuevaCantidad;
                return true;
            }
            return false;
        }

        return false;
    }

    calcularTotal() {
        return this._items.reduce((acc, val) => {
            const producto = buscarProducto(val.productoId);
            return acc + producto.price * val.cantidad;
        }, 0);
    }

    verCarrito() {
        return this._items.map((item) => {
            const producto = buscarProducto(item.productoId);
            return {
                ...item,
                nombre: producto?.name || "Producto no encontrado",
                precioUnitario: producto?.price || 0,
                subtotal: (producto?.price || 0) * item.cantidad,
            };
        });
    }

    vaciarCarrito() {
        this._items.forEach((item) => {
            const producto = buscarProducto(item.productoId);
            if (producto) {
                producto.stock += item.cantidad;
            }
        });
        this._items = [];
        return true;
    }
}
