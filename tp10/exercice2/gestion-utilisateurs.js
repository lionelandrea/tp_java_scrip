const URL = "https://digicode.cleverapps.io/utilisateurs";

// Remplace par ton pseudo
const ID_CREATEUR = "MonPseudoIci";

let utilisateurs = [];

const tableau = document.getElementById("liste-utilisateurs");

const dialogue = document.getElementById("formulaire-dialogue");

const formulaire = document.getElementById("formulaire");

const message = document.getElementById("message");


// FONCTION POUR EFFECTUER LES REQUETES API

async function requete(url, options = {}) {

    const reponse = await fetch(url, {

        ...options,

        headers: {
            "Content-Type": "application/json"
        }

    });

    const texte = await reponse.text();

    let resultat = null;

    try {
        resultat = texte ? JSON.parse(texte) : null;
    } catch {
        resultat = texte;
    }

    if (!reponse.ok) {

        throw new Error(
            resultat?.message || resultat?.error || texte || "Erreur serveur"
        );

    }

    return resultat;

}


// 1. RECUPERER LES UTILISATEURS

async function chargerUtilisateurs() {

    try {

        utilisateurs = await requete(
            `${URL}/${ID_CREATEUR}`
        );

        if (!Array.isArray(utilisateurs)) {
            utilisateurs = utilisateurs.data || utilisateurs.utilisateurs || [];
        }

        afficherUtilisateurs();

    } catch (erreur) {

        message.textContent = "Erreur : " + erreur.message;

    }

}


// 2. AFFICHER LES UTILISATEURS

function afficherUtilisateurs() {

    tableau.innerHTML = "";

    utilisateurs.forEach(utilisateur => {

        const ligne = document.createElement("tr");

        ligne.innerHTML = `
            <td>${utilisateur.id ?? ""}</td>
            <td>${utilisateur.nom ?? ""}</td>
            <td>${utilisateur.prenom ?? ""}</td>
            <td>${utilisateur.dateNaissance ?? ""}</td>
            <td>${utilisateur.lieuNaissance ?? ""}</td>
            <td>${utilisateur.numeroRue ?? ""} ${utilisateur.libelleRue ?? ""},
                ${utilisateur.codePostal ?? ""} ${utilisateur.ville ?? ""}
            </td>
            <td>
                <button onclick="modifierUtilisateur(${utilisateur.id})">
                    Modifier
                </button>

                <button class="supprimer"
                    onclick="supprimerUtilisateur(${utilisateur.id})">
                    🗑
                </button>
            </td>
        `;

        tableau.appendChild(ligne);

    });

}


// 3. OUVRIR LE FORMULAIRE D'AJOUT

document.getElementById("ajouter").addEventListener("click", function() {

    formulaire.reset();

    document.getElementById("id").value = "";

    document.getElementById("titre").textContent = "Ajouter un utilisateur";

    dialogue.showModal();

});


// 4. RECUPERER LES DONNEES DU FORMULAIRE

function recupererDonnees() {

    return {

        id: document.getElementById("id").value || null,

        idCreateur: ID_CREATEUR,

        dateMaj: null,

        nom: document.getElementById("nom").value,

        prenom: document.getElementById("prenom").value,

        genre: document.getElementById("genre").value,

        dateNaissance: document.getElementById("dateNaissance").value,

        lieuNaissance: document.getElementById("lieuNaissance").value,

        departementNaissance: document.getElementById("departementNaissance").value,

        numeroRue: document.getElementById("numeroRue").value,

        libelleRue: document.getElementById("libelleRue").value,

        codePostal: document.getElementById("codePostal").value,

        ville: document.getElementById("ville").value

    };

}


// 5. AJOUTER OU MODIFIER UN UTILISATEUR

formulaire.addEventListener("submit", async function(event) {

    event.preventDefault();

    const utilisateur = recupererDonnees();

    const id = utilisateur.id;

    const estCreation = id === null;

    const url = estCreation
        ? URL + "/"
        : `${URL}/${id}`;

    const methode = estCreation ? "POST" : "PUT";

    try {

        const resultat = await requete(url, {

            method: methode,

            body: JSON.stringify(utilisateur)

        });

        dialogue.close();

        message.textContent = resultat?.message ||
            (estCreation ? "Utilisateur créé !" : "Utilisateur modifié !");

        chargerUtilisateurs();

    } catch (erreur) {

        message.textContent = "Erreur : " + erreur.message;

    }

});


// 6. MODIFIER UN UTILISATEUR

function modifierUtilisateur(id) {

    const utilisateur = utilisateurs.find(
        element => element.id == id
    );

    if (!utilisateur) return;

    document.getElementById("titre").textContent = "Modifier un utilisateur";

    Object.keys(utilisateur).forEach(cle => {

        const champ = document.getElementById(cle);

        if (champ) {
            champ.value = utilisateur[cle] ?? "";
        }

    });

    document.getElementById("id").value = utilisateur.id;

    dialogue.showModal();

}


// 7. SUPPRIMER UN UTILISATEUR

async function supprimerUtilisateur(id) {

    const confirmation = confirm(
        "Voulez-vous vraiment supprimer cet utilisateur ?"
    );

    if (!confirmation) return;

    try {

        const resultat = await requete(
            `${URL}/${ID_CREATEUR}/${id}`,
            {
                method: "DELETE"
            }
        );

        message.textContent = resultat?.message || "Utilisateur supprimé !";

        chargerUtilisateurs();

    } catch (erreur) {

        message.textContent = "Erreur : " + erreur.message;

    }

}


// 8. FERMER LE FORMULAIRE

document.getElementById("annuler").addEventListener("click", function() {

    dialogue.close();

});


// CHARGEMENT INITIAL

chargerUtilisateurs();