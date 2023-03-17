const setup = () => {
  const zin = "Gisteren zat de jongen op de stoep en at de helft van de appel";
  const woorden = zin.split(" ");
  let bijgewerkteZin = "";

  for (let i = 0; i < woorden.length; i++) {
    if (woorden[i].toLowerCase() === "de") {
      bijgewerkteZin += "het ";
    } else {
      bijgewerkteZin += woorden[i] + " ";
    }
  }

  console.log(bijgewerkteZin.trim());
};

window.addEventListener("load", setup);

