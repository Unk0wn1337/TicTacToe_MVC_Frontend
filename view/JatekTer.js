import Kartya from "./Kartya.js";


export default class JatekTer {
    #lista = [];
    #taroloElem;
    #kartyaElemek = [];

    constructor(lista, taroloElem){
        this.#lista = lista;
        this.#taroloElem = taroloElem;
    }

    kiir(){
        this.#lista.forEach((element) => {
            console.log(element);
            const kartya = new Kartya(element, this.#taroloElem)
            this.#kartyaElemek.push(kartya);
        });
    }

    getKartyaObjektum(objektum){
        return this.#kartyaElemek.find(kartya => kartya.getObject() === objektum);
    }


    
}