let zoekopdrachten = []; // ARRAY VOOR OPSLAAN VAN ALLE ZOEKOPDRACHTEN

const setup = () => {
	document.getElementById("button").addEventListener("click", isGeldig);
    
    document.addEventListener("keydown", event => {
        if (event.key === "Enter") {
        document.getElementById("button").click();}
      });      

    toonZoekopdrachten();
}

const isGeldig = () => {
    let zoekOpdracht = document.getElementById("zoekopdracht").value;
    if(zoekOpdracht.startsWith("/")){
        controleerSite(zoekOpdracht);
    }
    else if(zoekOpdracht.toLowerCase().trimEnd() === "refresh pagina"){
        location.reload();
    }
    else{
        alert('Invalid command');
    }
}

const controleerSite = (zoekopdracht) => {
    if(zoekopdracht.toLowerCase().startsWith("/y")){ //---------- YOUTUBE ----------
        zoekterm = zoekopdracht.slice(2).trimStart();
        zoekYoutube(zoekterm);
        clearInput();
    }
    else if(zoekopdracht.toLowerCase().startsWith("/t")){ //---------- TWITTER ----------
        zoekterm = zoekopdracht.slice(2).trimStart();
        zoekTwitter(zoekterm);
        clearInput();
    }
    else if(zoekopdracht.toLowerCase().startsWith("/i")){ //---------- INSTAGRAM ----------
        zoekterm = zoekopdracht.slice(2).trimStart();
        zoekInstagram(zoekterm)
        clearInput();
    }
    else if(zoekopdracht.toLowerCase().startsWith("/g")){ //---------- GOOGLE ----------
        zoekterm = zoekopdracht.slice(2).trimStart();
        zoekGoogle(zoekterm);
        clearInput();
    }
    else{ // VERKEERDE PREFIX ----- BLIJFT ACHTERAAN!
        alert('Unknown command prefix');
    }
}



//---------- YOUTUBE ----------
const zoekYoutube = (zoekterm) => {
    let zoeken = zoekterm.replace(" ","+");
    let url = 'https://www.youtube.com/results?search_query='+ zoeken;
    window.open(url);
    voegZoekopdrachtToe("Youtube",zoekterm,url);
}

//---------- INSTAGRAM ----------
const zoekInstagram = (zoekterm) => {
    let zoeken = zoekterm.replace(" ","_");
    let url = 'https://www.instagram.com/'+ zoeken +'/';
    window.open(url);
    voegZoekopdrachtToe("Instagram",zoekterm,url);
}

//---------- TWITTER ----------
const zoekTwitter = (zoekterm) => {
    let url = 'https://twitter.com/' + zoekterm;
    window.open(url);
    voegZoekopdrachtToe("Twitter",zoekterm,url);
}

//---------- GOOGLE ----------
const zoekGoogle = (zoekterm) => {
    let url = 'http://google.com/search?q='+zoekterm;
    window.open(url);
    voegZoekopdrachtToe("Google",zoekterm,url);
}

const clearInput = () => { // CLEART INPUTVELD NA ->SUCCESVOL<- ZOEKEN
    let clearInput = document.getElementById("zoekopdracht");
    clearInput.value = "";
}



// ----- TOEVOEGEN EN TONEN VAN OPGESLAGEN ZOEKOPDRACHTEN

const toonZoekopdrachten = () => {
  let zoekopdrachtenDiv = document.getElementById('History');
  zoekopdrachtenDiv.innerHTML = '';

  let zoekopdrachten = JSON.parse(localStorage.getItem('zoekopdrachten')) || [];

  if (zoekopdrachten.length === 0){
    zoekopdrachtenDiv.innerHTML = '<p>Er zijn nog geen zoekopdrachten opgeslagen.</p>';
  } 
  else{
    for (let zoekopdracht of zoekopdrachten) {
      let div = document.createElement('div');
      div.classList.add('col-sm-4');
      div.classList.add('card');

      let h3 = document.createElement('h3');
      h3.innerText = zoekopdracht.website;

      let p = document.createElement('p');
      p.innerText = zoekopdracht.zoekterm;

      let goButton = document.createElement('button');
      goButton.classList.add('go-button');
      goButton.innerText = 'Go';
      goButton.onclick = () => {
        window.open(zoekopdracht.url, '_blank');
      }

      switch (zoekopdracht.website) {
        case 'Youtube':
          div.classList.add('youtube');
          break;
        case 'Twitter':
          div.classList.add('twitter');
          break;
        case 'Instagram':
          div.classList.add('instagram');
          break;
        case 'Google':
          div.classList.add('google');
          break;
      }

      div.appendChild(h3);
      div.appendChild(p);
      div.appendChild(goButton);
      zoekopdrachtenDiv.appendChild(div);
    }
  }
};



const voegZoekopdrachtToe = (website, zoekterm, url) => {
  let zoekopdracht = {
    website: website,
    zoekterm: zoekterm,
    url: url
  };
  zoekopdrachten.push(zoekopdracht);
  localStorage.setItem('zoekopdrachten', JSON.stringify(zoekopdrachten));
  toonZoekopdrachten();
};


window.addEventListener("load", setup);