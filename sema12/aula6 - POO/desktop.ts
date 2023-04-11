import { Computadores } from "./computador";

class Desktop extends Computadores{

    public cabinete: string = "";

    
    public get cab() : string {
        return this.cabinete;
    }
    
    public set cab(cab : string) {
        this.cabinete = cab;
    }
    
    
}