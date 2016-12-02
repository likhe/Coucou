"use strict";

/* DEBUT
Creéation d'une fonction qui initialise une donnée*/

var fn_init = function() {
    //création d'un tableau vide à charger*/
    let ligneCdes = [];
    let clients = [{
        name: "Client 1",
        code: "Cl1"
    }, {
        name: "Client 2",
        code: "Cl2"
    }, {
        name: "Client 3",
        code: "Cl3"
    }];

    let TVA = [2, 10, 20.6];

    //construction 1000 lignes de commandes
    for (let i = 0; i < 1000; i++) {
        //Math.round arrondi la valeur et Math random prend la valeur des tableaux au hasard * 2 correspond à la position des valeurs des clients
        let idxTVA = Math.round(Math.random() * 2);
        //intégrer les éléments dans une nouvelle variable
        let myTVA = TVA[idxTVA];

        let idxClt = Math.round(Math.random() * 2); //ou Math.random * (clients.length - 1 car clients.length c'est le nombre d'éléments)
        let myClt = clients[idxClt];

        //création d'une variable où le montant varie de 0 à 1000
        let montHT = Math.round(Math.random() * 1000);

        //Intégrer les myTVA, myClt et les montHT
        ligneCdes.push([myClt, myTVA, montHT]);
    }
    //FIN Boucle For
    return ligneCdes;
};





var fn_iterate = function() {
    //Création d'un objet avant chaque boucle
    var collector = {};
    //début boucle for de la variable lign avec of(la chopeuse de clé) de la fonction fn_init()
    for (lign of fn_init()) {
        //fn_init() pas d'argument entre la parenthèse
        // check that client exists in collector
        if () {
            /*collector.
              it exists : check new min max values
              ajouter les valeurs min et max du client venue la première fois
              var x = 10, y = -20; var z = Math.min(x, y);
              */
        } else {}
    }
    //afficher le collector de cette manière {Client,[min,max]};
}
fn_iterate();
