// Création du gestionnaire
function creerGestionnaire() {

    return {

        // Tableau contenant les tâches
        taches: [],

        // Ajouter une tâche
        ajouterTache(description) {

            let tache = {
                description: description,
                terminee: false
            };

            this.taches.push(tache);
        },

        // Terminer une tâche
        terminerTache(index) {

            if (index >= 0 && index < this.taches.length) {
                this.taches[index].terminee = true;
            } else {
                console.log("Tâche introuvable.");
            }
        },

        // Afficher toutes les tâches
        afficherTaches() {

            for (let i = 0; i < this.taches.length; i++) {

                console.log(
                    i + " - " +
                    this.taches[i].description +
                    " : " +
                    (this.taches[i].terminee ? "Terminée" : "Non terminée")
                );

            }
        }
    };
}

// Création du gestionnaire
let gestionnaire = creerGestionnaire();

// Ajouter des tâches
gestionnaire.ajouterTache("Apprendre JavaScript");
gestionnaire.ajouterTache("Faire les exercices");
gestionnaire.ajouterTache("Apprendre les fonctions");

// Terminer une tâche
gestionnaire.terminerTache(0);

// Afficher les tâches
gestionnaire.afficherTaches();