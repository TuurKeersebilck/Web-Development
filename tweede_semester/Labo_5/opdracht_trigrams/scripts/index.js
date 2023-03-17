const setup = () => {
	const woord = "onoorbaar";
/*	const trigrams = [];*/

	for (let i = 0; i < woord.length - 2; i++) {
	console.log(woord.substring(i,i+3));
	/*trigrams.push(woord.substring(i, i + 3));*/
	
}

/* OPLOSSING MET ARRAYLIST
  for (let i = 0; i<trigrams.length; i++){
	console.log(trigrams[i].toString());
}*/

  }
  
  window.addEventListener("load", setup);
  