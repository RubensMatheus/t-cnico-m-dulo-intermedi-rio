"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Computadores = void 0;
class Computadores {
    constructor(processador, memoria) {
        this._processador = processador;
        this._memoria = memoria;
    }
    get processador() {
        return this._processador;
    }
    set processador(processador) {
        this._processador = processador;
    }
    get memoria() {
        return this._memoria;
    }
    set memoria(memoria) {
        this._memoria = memoria;
    }
}
exports.Computadores = Computadores;
