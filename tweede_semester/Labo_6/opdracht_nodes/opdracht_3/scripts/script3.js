const setup = () => {
  const nieuweP = document.createElement('p');
		
  // set some text for the new paragraph
  nieuweP.textContent = 'Nieuwe paragraaf';

  // get a reference to the div element
  const div = document.getElementById('myDIV');
  
  // append the new paragraph to the div element
  div.appendChild(nieuweP);
 
}

window.addEventListener("load", setup);