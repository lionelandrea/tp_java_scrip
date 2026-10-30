let societe = {
    nom: "Google",

    siegeSocial: "Googleplex, Mountain View, Californie, united States",

    fondateurs: [
        {
            nom:"Larry page",
            dateNaissance:"26/03/1973",
            lieuNaissance:"East Lansing, Michigan,"
        },
        {
            nom:"Sergey Brin",
            dateNaissance:"21/08/1973",
            lieuNaissance:"Moscou, Union soviétique"
        }
    ],

    chiffreAffaire:[
        {annee: 2008, montant: 16.49},
        {annee: 2012, montant: 37.97},
        {annee: 2016, montant: 89.46},
        {annee: 2018, montant: 136.2}
    ]
};

console.log(" INFORMATIONS DE LA SOCIETE :");

console.log("Nom :", societe.nom);
console.log("Siège social :", societe.siegeSocial);

console.log(" Fondateurs ");

for (let i = 0; i < societe.fondateurs.length; i++) {
    console.log("Nom :", societe.fondateurs[i].nom);


    console.log("Date de naissance :", 
        societe.fondateurs[i].dateNaissance);


    console.log("Lieu de naissance :", 
        societe.fondateurs[i].lieuNaissance);
}


console.log(" Chiffre d'affaire ");

for (let i = 0; i < societe.chiffreAffaire.length; i++) {


    console.log("Année :", societe.chiffreAffaire[i].annee);

    
    console.log("Montant :", societe.chiffreAffaire[i].montant, "milliards de dollars");
}