"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
class Animal {
    constructor(animal, dono) {
        this._1nome = animal;
        this._dono = dono;
    }
    set nome(nome) {
        this._1nome = nome;
    }
    get nome() {
        return this.nome;
    }
}
exports.Animal = Animal;
