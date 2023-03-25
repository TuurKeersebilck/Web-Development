const setup = () => {
    const sliders = document.querySelectorAll(".slider");
    const colorPicker = document.querySelector("#color-picker");
  
    sliders.forEach(slider => {
      slider.addEventListener("change", update);
      slider.addEventListener("input", update);
    });
    update();
  
    //-----SWATCH TOEVOEGEN EN VERWIJDEREN
    const saveSwatch = document.querySelector('button');
    saveSwatch.addEventListener("click", () => {
  
      const nieuweSwatch = document.createElement("div");
      nieuweSwatch.classList.add("swatchSave");
      nieuweSwatch.style.backgroundColor = `rgb(${sliders[0].value}, ${sliders[1].value}, ${sliders[2].value})`;
  
      const deleteKnop = document.createElement("button");
      deleteKnop.classList.add("delete");
      deleteKnop.textContent = "X";
      deleteKnop.addEventListener("click", () => {
        nieuweSwatch.remove();
      });
  
      nieuweSwatch.appendChild(deleteKnop);
      document.body.appendChild(nieuweSwatch);
    });
  }
  
  //-----ORIGINELE CODE
  const update = () => {
    const sliders = document.getElementsByClassName("slider");
    const pTags = document.getElementsByTagName("p");
    const swatch = document.getElementsByClassName("swatch");
  
    const rood = sliders[0].value;
    const groen = sliders[1].value;
    const blauw = sliders[2].value;
  
    pTags[0].textContent = "Red " + rood;
    pTags[1].textContent = "Green " + groen;
    pTags[2].textContent = "Blue " + blauw;
  
    swatch[0].style.backgroundColor = `rgb(${rood}, ${groen}, ${blauw})`;
  }
  
  window.addEventListener("load", setup);
  