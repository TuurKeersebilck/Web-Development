const setup = () => {
    const btn = document.getElementById("button");
    const txt = document.getElementsByClassName("subtotaal");
    btn.addEventListener("click", bereken);
  
    for (let i = 0; i < txt.length; i++) {
      txt[i].innerHTML = "0.00 eur";
    }
  };

  const bereken = () => {
    const collectieAantallen = document.getElementsByTagName("input");
    const collectiePrijzen = document.getElementsByClassName("prijs");
    const collectieBtw = document.getElementsByClassName("btw");
    const subtotaal = document.getElementsByClassName("subtotaal");
    const totaal = document.getElementsByClassName("totaal");
  
    const aantalProducten = [];
    const prijzen = [];
    const btwPercentages = [];

    for (let i = 0; i < collectieAantallen.length; i++) {
      aantalProducten.push(parseFloat(collectieAantallen[i].value));
    }
  
    for (let i = 0; i < collectiePrijzen.length; i++) {
      prijzen.push(parseFloat(collectiePrijzen[i].innerHTML));
    }
  
    for (let i = 0; i < collectieBtw.length; i++) {
      btwPercentages.push(parseInt(collectieBtw[i].innerHTML));
    }

    const out1 = aantalProducten[0] * prijzen[0] * (1 + btwPercentages[0] / 100);
    const out2 = aantalProducten[1] * prijzen[1] * (1 + btwPercentages[1] / 100);
    const out3 = aantalProducten[2] * prijzen[2] * (1 + btwPercentages[2] / 100);
  
    subtotaal[0].innerHTML = `${out1.toFixed(2)} Eur`;
    subtotaal[1].innerHTML = `${out2.toFixed(2)} Eur`;
    subtotaal[2].innerHTML = `${out3.toFixed(2)} Eur`;
  
    totaal[0].innerHTML = `${(out1 + out2 + out3).toFixed(2)} Eur`;
  };
  
  window.addEventListener("load", setup);

  

  
  
