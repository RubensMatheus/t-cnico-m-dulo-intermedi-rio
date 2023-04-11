export class Computadores{

    _processador:string;
    _memoria:number;

    constructor(processador: string, memoria:number){
        this._processador = processador;
        this._memoria = memoria;
    }
    
    public get processador():string {
        return this._processador;
    }
    
    public set processador(processador:string) {
        this._processador = processador;
    }
    
    public get memoria() : number {
        return this._memoria;
    }

    public set memoria(memoria : number) {
        this._memoria = memoria;
    }
    
}