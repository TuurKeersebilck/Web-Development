const setup = () => {
	// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
	debugger;
	let pElement=document.getElementById("txtOutput");
pElement.innerHTML="Welkom!";
let btnWijzig = document.getElementById("btnWijzig");
	btnWijzig.addEventListener("click", wijzig);

}


const wijzig = () => {
	let txtInput = document.getElementById("txtInput");
	let tekst = txtInput.value;
	document.getElementById("txtOutput").innerHTML = tekst;
	}


window.addEventListener("load", setup);