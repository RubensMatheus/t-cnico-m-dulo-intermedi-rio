import { Cidade } from "./cidade";
import { Pessoa } from "./pessoas";
import{ Animal } from "./animal";

const natal = new Cidade("Natal");
const joao = new Pessoa("João", natal);
const toto = new Animal("Totó", joao);
