"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const computador_1 = require("./computador");
class Desktop extends computador_1.Computadores {
    constructor() {
        super(...arguments);
        this.cabinete = "";
    }
    get cab() {
        return this.cabinete;
    }
    set cab(cab) {
        this.cabinete = cab;
    }
}
