function bereken() {
    const getal1 = parseFloat(document.getElementById("getal1").value);
    const getal2 = parseFloat(document.getElementById("getal2").value);
    const bewerking = document.getElementById("bewerking").value;
    let resultaat;

    if (isNaN(getal1) || isNaN(getal2)) {
        resultaat = "Vul beide getallen in!";
    } else {
        switch(bewerking) {
            case "optellen":
                resultaat = getal1 + getal2;
                break;
            case "aftrekken":
                resultaat = getal1 - getal2;
                break;
            case "vermenigvuldigen":
                resultaat = getal1 * getal2;
                break;
            case "delen":
                if(getal2 === 0) {
                    resultaat = "Kan niet door 0 delen!";
                } else {
                    resultaat = getal1 / getal2;
                }
                break;
        }
    }

    document.getElementById("resultaat").textContent = resultaat;
}

function startSpel() {
    geheimGetal = Math.floor(Math.random() * 1000) + 1;
    pogingen = 0;
    document.getElementById("pogingen").textContent = pogingen;
    document.getElementById("feedback").textContent = "";
    document.getElementById("gok").value = "";
}

let geheimGetal = Math.floor(Math.random() * 1000) + 1; // Willekeurig getal tussen 1 en 1000
let pogingen = 0;

function checkGok() {
    const gok = parseInt(document.getElementById("gok").value);
    pogingen++;
    document.getElementById("pogingen").textContent = pogingen;

    if (isNaN(gok)) {
        document.getElementById("feedback").textContent = "Typ een geldig getal!";
        return;
    }

    if (gok < geheimGetal) {
        document.getElementById("feedback").textContent = "Te laag! Probeer opnieuw.";
    } else if (gok > geheimGetal) {
        document.getElementById("feedback").textContent = "Te hoog! Probeer opnieuw.";
    } else {
        document.getElementById("feedback").textContent = `Goed geraden! Het getal was ${geheimGetal}.`;
    }
}

// Reset het spel
function resetSpel() {
    startSpel();
}

// Start het spel bij het laden van de pagina
startSpel();