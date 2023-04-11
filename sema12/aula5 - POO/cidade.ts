export class Cidade{

  
  constructor(readonly _nome: string){
    
  }
  
  get nome():string{
    return this._nome;
  }
  
}