const setup = () => {
    const sliders = document.querySelectorAll(".slider");

    sliders.forEach(slider => {
        slider.addEventListener("change", update);
        slider.addEventListener("input", update);
    });
    update();
}


const update = () => {
    const sliders = document.getElementsByClassName("slider"); /*COLLECTIE V/D BALKEN*/
    const pTags = document.getElementsByTagName("p"); /*TEKST EN WAARDEN VERANDEREN VAN DE KLEUREN*/
    const swatch = document.getElementsByClassName("swatch");  /*BLOK KLEUR*/

    const rood = sliders[0].value;
    const groen = sliders[1].value;
    const blauw = sliders[2].value;

    pTags[0].innerText = "Red " + rood;
    pTags[1].innerText = "Green " + groen;
    pTags[2].innerText = "Blue " + blauw;

    swatch[0].style.backgroundColor = `rgb(${rood}, ${groen}, ${blauw})`;
}

window.addEventListener("load", setup);