let nombreUn = ""
let nombreDeux = ""
let operateur
let resultat

function displayNumber(numberToDisplay) {
    // if (numberToDisplay == '.') {
    //     if (operateur == null) {
    //         if (nombreUn == "" || nombreUn.includes('.')) {
    //             numberToDisplay = ""
    //             console.log("pas point 1")
    //         }
    //     } else {
    //         if (nombreDeux == "" || nombreDeux.includes('.')) {
    //             numberToDisplay = ""
    //             console.log("pas point 2")
    //         }
    //     }
    //}

    if(resultat != null) {
        resultat = null;
        document.getElementById("ecran").textContent = "";
    }
    document.getElementById("ecran").textContent += numberToDisplay;

    // if (operateur == null && resultat != null) {
    //     resultat = null
    //     nombreUn = numberToDisplay
    //     document.getElementById("ecran").textContent = ""
        
    // } else if (operateur == null) {
    //     nombreUn = "" + nombreUn + numberToDisplay
    // } else {
    //     nombreDeux = "" + nombreDeux + numberToDisplay
    // }

    // document.getElementById("ecran").textContent += numberToDisplay

    // console.log(numberToDisplay)
    // console.log(nombreUn)
 }

 function deleteScreen () {
    document.getElementById("ecran").textContent = "0"
    resultat = 0
 }

function displayOperator(operatorToDisplay) {
    // if (operateur == null){
    //     operateur = operatorToDisplay
        document.getElementById("ecran").textContent += operatorToDisplay
    // } 
}

function displayResultat() {
    // if (operateur == "+") {
    //     resultat = new Number(nombreUn) + new Number(nombreDeux) 
    //     operateur = null
    //     nombreUn = resultat
    //     nombreDeux = ""
    //     document.getElementById("ecran").textContent = resultat
    // } else if (operateur == "-"){
    //     resultat = new Number(nombreUn) - new Number(nombreDeux) 
    //     operateur = null
    //     nombreUn = resultat
    //     nombreDeux = ""
    //     document.getElementById("ecran").textContent = resultat
    // } else if (operateur == "/") {
    //     resultat = new Number(nombreUn) / new Number(nombreDeux) 
    //     operateur = null
    //     nombreUn = resultat
    //     nombreDeux = ""
    //     document.getElementById("ecran").textContent = resultat
    // } else {
    //     resultat = new Number(nombreUn) * new Number(nombreDeux) 
    //     operateur = null
    //     nombreUn = resultat
    //     nombreDeux = ""
    //     document.getElementById("ecran").textContent = resultat
    // }
    resultat = eval(document.getElementById("ecran").textContent)
    document.getElementById("ecran").textContent = resultat
}