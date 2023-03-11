const setup = () => {
	// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
	document.addEventListener("click", maakMetSpaties);
}
const maakMetSpaties = () => {
	let tekst = document.getElementById("textinput").value;
	const spaties = tekst.split('').join(' ');
    console.log(spaties);
}

window.addEventListener("load", setup);