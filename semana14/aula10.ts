// export class Adicionalinvalidoerror implements Error{

//     name: string;
//     message: string;

//     public constructor(){
//         this.name = "Adicionalinvalidoerror";
//         this.message = "Somente valores positivos devem ser adicionados ao valor inicial";
//     }
// }




function adicionar_valor(inicial:number, adicional: number) : number{
    
    if(adicional < 0){
        throw new Error("Somente valores positivos devem ser adicionados ao valor inicial");
    }else{
        return inicial + adicional;
    }
}

try {
    console.log(adicionar_valor(20, 100));
} catch (e) {
    console.log(e.message);
}
try {
    console.log(adicionar_valor(20, -5));
} catch (e) {
    console.log(e.message);
}