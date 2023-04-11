"use strict";
var Situacao;
(function (Situacao) {
    Situacao[Situacao["EmPreparo"] = 0] = "EmPreparo";
    Situacao[Situacao["Finalizada"] = 1] = "Finalizada";
})(Situacao || (Situacao = {}));
var TipoPrato;
(function (TipoPrato) {
    TipoPrato[TipoPrato["Sopa"] = 0] = "Sopa";
    TipoPrato[TipoPrato["Sanduiche"] = 1] = "Sanduiche";
    TipoPrato[TipoPrato["Rabada"] = 2] = "Rabada";
})(TipoPrato || (TipoPrato = {}));
let sanduba = {
    situacao: Situacao.EmPreparo,
    tipo_prato: TipoPrato.Sanduiche
};
console.log(sanduba.situacao);
console.log(sanduba.tipo_prato);
