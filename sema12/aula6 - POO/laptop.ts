import { Computadores } from "./computador";

export class Laptop extends Computadores{

    public bateria_watts: number = 0;

    
    public get bateria() : number {
        return this.bateria_watts;
    }

    
    public set bateria(bateria : number) {
        this.bateria_watts = bateria;
    }
    
}
