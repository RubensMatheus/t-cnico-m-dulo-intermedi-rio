class Pet{
    constructor(public nome:string){

    }
}

class Livro{
    constructor(public nome:string){

    }
}

class Colecao<T>{
    lista: T[] = [];

    adicionar(arg:T){
        this.lista.push(arg);
    }

    mostrarTodos(){
        this.lista.forEach(e => console.log(e));
    }
}

const meusLivrosPrediletos = new Colecao<Livro>();
const animais = new Colecao<Pet>();

const dom_quixote = new Livro("Dom Quixote")
const a_divina_comedia = new Livro("A Divina Comédia")

meusLivrosPrediletos.adicionar(dom_quixote)
meusLivrosPrediletos.adicionar(a_divina_comedia)

const toto = new Pet("Totó");
const fofo = new Pet("Fofo");

animais.adicionar(toto);
animais.adicionar(fofo);
meusLivrosPrediletos.mostrarTodos();
animais.mostrarTodos();