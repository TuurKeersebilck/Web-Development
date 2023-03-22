const setup = () => {

  const listItems = document.querySelectorAll('li');

  listItems.forEach(item => {
    item.className = 'listitem';
    item.style.color = 'red';
  });

  const afbeelding = document.createElement('img');
  afbeelding.src = 'img/foto.png';
  document.body.appendChild(afbeelding);


}

window.addEventListener("load", setup);