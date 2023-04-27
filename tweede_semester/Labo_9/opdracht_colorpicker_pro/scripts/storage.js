// ---------- SLIDERS ---------- //
const storeSliderValues = () => {
    let red = document.getElementById("sldRed").value;
    let green = document.getElementById("sldGreen").value;
    let blue = document.getElementById("sldBlue").value;

    localStorage.setItem("red", red);
    localStorage.setItem("green", green);
    localStorage.setItem("blue", blue);
};

const restoreSliderValues = () => {
    let red = localStorage.getItem("red");
    let green = localStorage.getItem("green");
    let blue = localStorage.getItem("blue");

    document.getElementById("sldRed").value = red;
    document.getElementById("lblRed").innerHTML = red;
    document.getElementById("sldGreen").value = green;
    document.getElementById("lblGreen").innerHTML = green;
    document.getElementById("sldBlue").value = blue;
    document.getElementById("lblBlue").innerHTML = blue;
};

// ---------- SWATCHES ---------- //
const storeSwatches = () => {
    let swatchComponents = document.getElementById("swatchComponents");
    let swatches = swatchComponents.getElementsByClassName("swatch");
    let swatchInfo = [];

    for (let i = 0; i < swatches.length; i++) {
        let swatch = swatches[i];
        let red = swatch.getAttribute("data-red");
        let green = swatch.getAttribute("data-green");
        let blue = swatch.getAttribute("data-blue");
        swatchInfo.push({ red, green, blue });
    }

    localStorage.setItem("savedSwatches", JSON.stringify(swatchInfo));
};

const restoreSwatches = () => {
    let swatchComponents = document.getElementById("swatchComponents");
    let swatchInfo = localStorage.getItem("savedSwatches");

    if (swatchInfo) {
        swatchInfo = JSON.parse(swatchInfo);
        for (let i = 0; i < swatchInfo.length; i++) {
            let swatch = buildSwatchComponent(
                swatchInfo[i].red,
                swatchInfo[i].green,
                swatchInfo[i].blue
            );
            swatchComponents.append(swatch);
        }
    }
};
