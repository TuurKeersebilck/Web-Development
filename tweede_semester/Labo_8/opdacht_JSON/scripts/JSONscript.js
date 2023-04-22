    let student1 = {
      voornaam: "Tuur",
      familienaam: "Keersebilck",
      geboorteDatum: new Date("2004-09-25")
    };

    let tekst = JSON.stringify(student1);
    console.log(tekst);

    let jsonTekst = '{"voornaam":"Tuur","familienaam":"Keersebilck","geboorteDatum":"2004-09-25T00:00:00.000Z"}'; // Plak de gekopieerde JSON-string hier

    let student2 = JSON.parse(jsonTekst);
    console.log(student2.voornaam);