const setup = () => {
	// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
let arrayOpdracht = ["Wout","Tuur","Yentl","Sophie","Rik"];

console.log(arrayOpdracht.length); 

console.log(arrayOpdracht[0]);
console.log(arrayOpdracht[2]);
console.log(arrayOpdracht[4]);

let naam = prompt();
function voegNaamToe(naam) {
		arrayOpdracht.push(naam);
	}

voegNaamToe(naam)

console.log(arrayOpdracht);
console.log(arrayOpdracht.toString());
}


window.addEventListener("load", setup);