const setup = () => {
	// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let btnSubstring=document.getElementById("btnSubstring");
    btnSubstring.addEventListener("click", substringOpdracht);
}

const substringOpdracht = () => {
    let txtOutput=document.getElementById("txtOutput");
    let getalLinks=document.getElementById("getalLinks");
    let getalRechts=document.getElementById("getalRechts");
    let txtWoord=document.getElementById("woord");
    let getal1=parseInt(getalLinks.value, 36);
    let getal2=parseInt(getalRechts.value, 36);
    let woord = txtWoord.value;
    let resultaat = woord.substring(getal1,getal2);
    txtOutput.innerHTML=resultaat;
}


window.addEventListener("load", setup);