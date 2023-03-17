const setup = () => {
    const gemeenten = [];
  let gemeente = "";
  while (gemeente !== "stop") {
    gemeente = prompt("voeg een gemeente toe of type stop");

    if (gemeente !== "stop") {
      gemeenten.push(gemeente);
    }
  }

  const lijstGemeenten = document.getElementById("gemeenten");
  for (let i = 0; i < gemeenten.length; i++) {
    let optie = document.createElement("option");
    optie.text = gemeenten[i];
    lijstGemeenten.add(optie);
  }

  }
  
  window.addEventListener("load", setup);
  
