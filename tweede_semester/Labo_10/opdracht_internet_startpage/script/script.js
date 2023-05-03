const setup = () => {
	document.getElementById("button").addEventListener("click", isGeldig);
    
    document.addEventListener("keydown", event => {
        if (event.key === "Enter") {
        document.getElementById("button").click();}
      });      
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
    window.open('https://www.youtube.com/results?search_query='+ zoeken);
}

//---------- INSTAGRAM ----------
const zoekInstagram = (zoekterm) => {
    let zoeken = zoekterm.replace(" ","_");
    window.open('https://www.instagram.com/'+ zoeken +'/');
}

//---------- TWITTER ----------
const zoekTwitter = (zoekterm) => {
    window.open('https://twitter.com/' + zoekterm);
}

//---------- GOOGLE ----------
const zoekGoogle = (zoekterm) => {
    window.open('http://google.com/search?q='+zoekterm);
}

const clearInput = () => { // CLEART INPUTVELD NA ->SUCCESVOL<- ZOEKEN
    let clearInput = document.getElementById("zoekopdracht");
    clearInput.value = "";
}

window.addEventListener("load", setup);