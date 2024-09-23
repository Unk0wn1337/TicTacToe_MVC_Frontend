import JatekTer from "../view/JatekTer.js";
import Kartya from "../view/Kartya.js";
import { OBJEKTUM_LISTA } from "../model/adat.js";

export default class JatekController {
    #taroloELEM;
    #jatekTer;
    constructor() {
        this.#taroloELEM = $(".container");
        const jatekTer = new JatekTer(OBJEKTUM_LISTA, this.#taroloELEM);
        jatekTer.kiir();
        this.esemenyKezelo();

    }

    esemenyKezelo(){
        let szamlalo = 0;
        $(window).on("megjelol", (event) => {
            szamlalo += 1;
            console.log("Kártya kiválasztva: ", event.detail);
            if (szamlalo % 2 === 0) {
                const kivalasztottKartya = this.#jatekTer.getKartyaByObject(event.detail);
                if (kivalasztottKartya) {
                    kivalasztottKartya.setJeloles("X"); 
                }
            }
        });
    }
}
    