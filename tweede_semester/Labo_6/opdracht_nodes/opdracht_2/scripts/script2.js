const setup = () => {

  const listItems = document.querySelectorAll('li');

  const style = document.createElement('style');
  style.textContent = '.listitem { color: red; }';
  document.head.appendChild(style);
  

  listItems.forEach(item => {
    item.className = 'listitem';
  });

  const afbeelding = document.createElement('img');
  afbeelding.src = 'img/foto.png';
  document.body.appendChild(afbeelding);


}

window.addEventListener("load", setup);