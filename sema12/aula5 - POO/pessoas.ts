import { Cidade } from "./cidade";

export class Pessoa{

  _nome:string;
  cidade:Cidade
  
  constructor(nome:string, cid:Cidade){  
    this._nome = nome;
    this.cidade = cid;
    
  }

  public set nome(nome : string) {
    this._nome = nome;
  }
  
  public get nome() : string {
    return this._nome;
  }
  
}



// let a = new pessoa("João", "Natal")

// console.log(a._nome);
// console.log(a.cidade._nome);