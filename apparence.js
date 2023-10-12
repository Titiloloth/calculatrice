// Conteneur

let main = document.createElement("div");
document.body.appendChild(main);

let conteneur = document.createElement("div");
main.appendChild(conteneur);
conteneur.classList.add("conteneur")

// Titre
let titre = document.createElement("h1");
conteneur.appendChild(titre);
titre.textContent = "Calculatrice";
titre.style.textAlign = "center";
titre.style.padding = "20px";

// Calculatrice

let calculatrice = document.createElement("div");
conteneur.appendChild(calculatrice);
calculatrice.classList.add("calculatrice");

// Ecran

let ecranCalculatrice = document.createElement("div");
calculatrice.appendChild(ecranCalculatrice);
ecranCalculatrice.classList.add("ecran-calculatrice")

// Clavier

let clavierCalculatrice = document.createElement("div");
calculatrice.appendChild(clavierCalculatrice);
clavierCalculatrice.classList.add("clavier-calculatrice")

// Conteneur clavier chiffres

let conteneurClavierChiffres = document.createElement("div");
clavierCalculatrice.appendChild(conteneurClavierChiffres);
conteneurClavierChiffres.classList.add("conteneur-clavier-chiffres");

    // Clavier chiffres

    let clavierChiffresCalculatrice = document.createElement("div");
    conteneurClavierChiffres.appendChild(clavierChiffresCalculatrice);
    clavierChiffresCalculatrice.classList.add("clavier-chiffres-calculatrice");

        for (let index = 1; index < 10; index++) {
            let clavierChiffresTouchesCalculatrice = document.createElement("div");
            clavierChiffresCalculatrice.appendChild(clavierChiffresTouchesCalculatrice);
            clavierChiffresTouchesCalculatrice.classList.add("clavier-chiffres-touches-calculatrice");
            clavierChiffresTouchesCalculatrice.textContent= index;}

    // Clavier chiffres 2

    let clavierChiffresCalculatrice2 = document.createElement("div");
    conteneurClavierChiffres.appendChild(clavierChiffresCalculatrice2);
    clavierChiffresCalculatrice2.classList.add("clavier-chiffres-calculatrice-2");

        for (let index = 0; index < 2; index++) {
            let grosseToucheClavierChiffre = document.createElement("div");
            clavierChiffresCalculatrice2.appendChild(grosseToucheClavierChiffre);
            grosseToucheClavierChiffre.classList.add("grosse-touche-clavier-chiffre");
        }

    // Clavier opérateurs

let clavierCalculsCalculatrice = document.createElement("div");
clavierCalculatrice.appendChild(clavierCalculsCalculatrice);
clavierCalculsCalculatrice.classList.add("clavier-calculs-calculatrice")

    // Gros conteneur clavier opérateur

    let operateurGrosConteneur = document.createElement("div");
    clavierCalculsCalculatrice.appendChild(operateurGrosConteneur);
    operateurGrosConteneur.classList.add("operateur-gros-conteneur")

        for (let index = 0; index < 4; index++) {
            let touchesOperateur = document.createElement("div")
            operateurGrosConteneur.appendChild(touchesOperateur)
            touchesOperateur.classList.add("touches-operateur")
            
        }

    // Petit conteneur clavier opérateur
    
    let operateurPetitConteneur = document.createElement("div");
    clavierCalculsCalculatrice.appendChild(operateurPetitConteneur);
    operateurPetitConteneur.classList.add("operateur-petit-conteneur")

