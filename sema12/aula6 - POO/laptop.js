"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Laptop = void 0;
const computador_1 = require("./computador");
class Laptop extends computador_1.Computadores {
    constructor() {
        super(...arguments);
        this.bateria_watts = 0;
    }
    get bateria() {
        return this.bateria_watts;
    }
    set bateria(bateria) {
        this.bateria_watts = bateria;
    }
}
exports.Laptop = Laptop;
let a = new Laptop('CORE I5', 8);
console.log(`${a._memoria} - ${a._processador} - ${a.bateria}`);
