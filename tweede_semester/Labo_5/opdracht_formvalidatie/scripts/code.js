const setup = () => {
  
const form = document.querySelector('form');
const voornaam = document.getElementById('voornaam');
const voornaamError = document.getElementById('voornaam-error');

const familienaam = document.getElementById('familienaam');
const familienaamError = document.getElementById('familienaam-error');

const geboortedatum = document.getElementById('geboortedatum');
const geboortedatumError = document.getElementById('geboortedatum-error');

const email = document.getElementById('email');
const emailError = document.getElementById('email-error');


const geefError = (error) =>{
  error.classList.add('invalid',);
};
const verwijderError = (error) =>{
  error.classList.remove('invalid');
};

const isCorrecteDatum = (dateString) =>{
	const [year, month, day] = dateString.split('-');
	if(year.length !== 4 || isNaN(year)){
	  return false;
	}
	if(month.length !== 2 || isNaN(month) || parseInt(month) < 1 || parseInt(month) > 12){
	  return false;
	}
	if(day.length !== 2 || isNaN(day) || parseInt(day) < 1 || parseInt(day) > 31){
	  return false;
	}
	return true;
  };

form.addEventListener('submit', (event) => {
	event.preventDefault(); // Zorgt ervoor dat het niet automatisch reload wanneer er een error is
	let error = false;	// OP TRUE ZETTEN ALS ER EEN ERROR VOORKOMT!

  // controleren voornaam
  if(voornaam.value.length > 30){
    voornaamError.textContent = 'max. 30 karakters';
    geefError(voornaam);
    error = true;
  }else{
    voornaamError.textContent = '';
    verwijderError(voornaam);
  }

  // controleren familienaam
  if(familienaam.value == ''){
    familienaamError.textContent = 'verplicht veld';
    geefError(familienaam);
    error = true;
  }else if(familienaam.value.length > 50){
    familienaamError.textContent = 'max. 50 karakters';
    geefError(familienaam);
    error = true;
  }else{
    familienaamError.textContent = '';
    verwijderError(familienaam);
  }

  // controleren geboortedatum
  if(geboortedatum.value == ''){
	geboortedatumError.textContent = 'verplicht veld';
    geefError(geboortedatum);
    error = true;
  }else if (!isCorrecteDatum(geboortedatum.value)) {
	geboortedatumError.textContent = 'formaat is niet jjjj-mm-dd';
	addErrorClass(geboortedatum);
	error = true;
  }else{
	geboortedatumError.textContent = '';
	removeErrorClass(geboortedatum);
  }

  // controleren email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(email.value == ''){
    emailError.textContent = 'verplicht veld';
    geefError(email);
    error = true;
  }else if(!emailRegex.test(email.value)) {
    emailError.textContent = 'geen geldig email adres';
    geefError(email);
    error = true;
  }else{
    emailError.textContent = '';
    verwijderError(email);
  }


})}
window.addEventListener('load', setup);