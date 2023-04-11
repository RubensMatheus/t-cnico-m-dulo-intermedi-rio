interface Controlavel{
    mover: () => void;
}

export class Jogador implements Controlavel{

    mover(): void{
        console.log("Jogador se movendo");
    }
}

export class Volante implements Controlavel{
    mover(): void{
        console.log("Volante girando");
    }
}

let jogar = new Jogador;
let carro = new Volante;

jogar.mover();
carro.mover();