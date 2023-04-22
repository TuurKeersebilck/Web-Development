const setup = () => {
	// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    document.getElementById("button").addEventListener("click", dagenBerekenen);
}

const dagenBerekenen = () => {
    var gekozenDatum = document.getElementById("gekozenDatum").value;
    var gekozenDatum = new Date(gekozenDatum);
    var huidigeDatum = new Date();
    var verschilInTijd = huidigeDatum - gekozenDatum;
    var aantalDagen = Math.floor(verschilInTijd / (1000 * 60 * 60 * 24));

    printDagen(aantalDagen); 
}

// Ik wou iets testen ipv in dezelfde functie te zetten daarom staat deze functie er wat onnodig
const printDagen = (aantalDagen) => {
    console.log("Aantal dagen tussen gekozen en huidige datum: " + aantalDagen + " dag(en)");
}

window.addEventListener("load", setup);