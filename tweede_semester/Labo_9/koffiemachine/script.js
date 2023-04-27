['espresso', 'cappuccino', 'latte'].forEach(koffieType => {
  document.getElementById(koffieType).addEventListener('click', () => {
    updateVerkochteKoffies(koffieType);
  });
});
const updateVerkochteKoffies = (koffieType) => {
  let verkochteKoffies = JSON.parse(localStorage.getItem('verkochteKoffies')) || {};
  verkochteKoffies[koffieType] = verkochteKoffies[koffieType] + 1 || 1;
  localStorage.setItem('verkochteKoffies', JSON.stringify(verkochteKoffies)); 
  displayVerkochteKoffies(verkochteKoffies); 
}

const displayVerkochteKoffies = (verkochteKoffies) => {
  const verkochteKoffieLijst = document.getElementById('verkochteKoffieLijst');
  verkochteKoffieLijst.innerHTML = ''; 
  for (const koffie in verkochteKoffies) {
    const listItem = document.createElement('li');
    listItem.textContent = `${koffie}: ${verkochteKoffies[koffie]} verkocht`;
    verkochteKoffieLijst.appendChild(listItem);
  }
}
