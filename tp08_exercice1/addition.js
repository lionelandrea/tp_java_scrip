let bouton = document.querySelector("#bouton");

bouton.addEventListener("click", function() {

    let nombre1 = document.querySelector("#nombre1").value;
    let nombre2 = document.querySelector("#nombre2").value;

    let resultat = document.querySelector("#resultat");
    let erreur = document.querySelector("#erreur");

    if (nombre1 === "" || nombre2 === "") {
        erreur.textContent = "Vous devez saisir un nombre";
        erreur.style.backgroundColor = "red";
        erreur.style.color = "white";
        resultat.textContent = "";
        return;
    }

    let a = Number(nombre1);
    let b = Number(nombre2);

    let somme = a + b;

    erreur.textContent = "";

    resultat.textContent = "Le résultat de l'addition est : " + somme;

});