const setup = () => {
	// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
	let classBelangrijk = document.getElementsByClassName("belangrijk");
	for(let i = 0; i < classBelangrijk.length; i++){
		classBelangrijk[i].classList.add("opvallend");
	}
}

window.addEventListener("load", setup);