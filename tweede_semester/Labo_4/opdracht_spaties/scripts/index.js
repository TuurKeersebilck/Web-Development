const setup = () => {
	// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
	document.addEventListener("click", maakMetSpaties);
}
const maakMetSpaties = () => {
	var tekst = document.getElementById("textinput").value;
        console.log(tekst);
}

window.addEventListener("load", setup);