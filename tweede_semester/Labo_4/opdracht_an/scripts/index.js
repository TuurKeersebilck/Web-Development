const setup = () => {
	const zin = "De man van An geeft geen hand aan ambetante verwanten";
	let telling = 0;
  
	let index = zin.indexOf(deelTekst);
  
	while (index !== -1) {
	  telling++;
	  index = zin.toLowerCase().indexOf('an', index + 1);
	}
	console.log(`Het deel an komt zoveel keer voor:${telling}`);
  }
  
  window.addEventListener("load", setup);
  