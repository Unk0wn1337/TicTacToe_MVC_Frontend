export default class Kartya {
    #szuloELEM;
    #OBJEKTUM_LISTA = [];
    #elem;
    #jeloles;

    constructor(OBJEKTUM_LISTA, szuloELEM){
        this.#OBJEKTUM_LISTA = OBJEKTUM_LISTA;
        this.#szuloELEM = szuloELEM;
        this.#elem = null;  // Elem null-al inicializálva
        this.#jeloles = " ";
        this.megjelen();  // Elem megjelenítése
        this.esemeny();   // Események kezelése
    }

    megjelen(){
        // Létrehozzuk az új elemet és eltároljuk az #elem adattagban
        this.#elem = $(`
            <div class="kocka">
                <p>${this.#jeloles}</p>
            </div>
        `);

        // Az újonnan létrehozott elemet hozzáadjuk a szülőhöz
        this.#szuloELEM.append(this.#elem);
    }

    esemeny(){
        this.#elem.on("click", () => {
            console.log(this);
            const e = new CustomEvent("valasztas", { detail: this.#elem });
            window.dispatchEvent(e);
        })
   
    }

    setJeloles(jeloles){
        this.#jeloles = jeloles;
        this.#elem.find("p").text(this.#jeloles);
    }

    getObjektum(){
        return this.#OBJEKTUM_LISTA;
    }
}
