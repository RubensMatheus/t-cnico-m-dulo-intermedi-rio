"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Volante = exports.Jogador = void 0;
class Jogador {
    mover() {
        console.log("Jogador se movendo");
    }
}
exports.Jogador = Jogador;
class Volante {
    mover() {
        console.log("Volante girando");
    }
}
exports.Volante = Volante;
let jogar = new Jogador;
let carro = new Volante;
jogar.mover();
carro.mover();
