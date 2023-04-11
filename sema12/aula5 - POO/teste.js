"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cidade_1 = require("./cidade");
const pessoas_1 = require("./pessoas");
const animal_1 = require("./animal");
const natal = new cidade_1.Cidade("Natal");
const joao = new pessoas_1.Pessoa("João", natal);
const toto = new animal_1.Animal("Totó", joao);
console.log(joao.cidade._nome);
