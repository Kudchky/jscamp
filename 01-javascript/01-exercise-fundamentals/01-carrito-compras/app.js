import { ShoppingCar } from "./shopping-car";
import { products } from "./products";

class App {
    constructor() {
        this.car = new ShoppingCar();
        this.products = products;
        this.running = true;
    }

    start() {
        console.clear();
        console.log(" 🛒 Welcome to our grocery store 🛒 \n");

        while(this.running) {
            
        }
    }
}
