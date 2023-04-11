"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    constructor(nome, cid) {
        this._nome = nome;
        this.cidade = cid;
    }
    set nome(nome) {
        this._nome = nome;
    }
    get nome() {
        return this._nome;
    }
}
exports.Pessoa = Pessoa;
// let a = new pessoa("João", "Natal")
// console.log(a._nome);
// console.log(a.cidade._nome);
