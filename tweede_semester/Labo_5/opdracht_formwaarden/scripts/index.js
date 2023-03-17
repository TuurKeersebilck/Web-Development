const setup = () => {
  const form = document.querySelector('form');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // zorgt dat de pagina niet automatisch herlaad na drukken op submit

    // alle waarden ophalen uit het formulier
    const isRoker = form.elements['is-roker'].checked;
    const moedertaal = form.elements['moedertaal'].value;
    const favobuurland = form.elements['favobuurland'].value;
    const bestelling = Array.from(form.elements['bestelling']).filter(option => option.selected).map(option => option.value);
    // .from zet alle opties in een array
    // .filter haalt er de geselecteerde opties uit
    // .map haalt de geselecteerde opties eruit
  

    if(isRoker){
      console.log('Is roker');
    }else{
      console.log('Is geen roker')
    }
    
    console.log('moedertaal is '+ moedertaal);
    console.log('favoriete buurland is '+ favobuurland);
    console.log('Bestelling bestaat uit '+ bestelling);
  });
};

window.addEventListener('load', setup);
