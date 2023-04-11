import { Pessoa } from "./pessoas";

export class Animal{

    _1nome:string;
    _dono:Pessoa;


    constructor(animal:string, dono:Pessoa){
        this._1nome = animal;
        this._dono = dono;
    }

    
    public set nome(nome : string) {
        this._1nome = nome;
    }

    
    public get nome() : string {
        return this.nome
    }
        
    
}
