const kmInput = document.getElementById(`km`);
const ageInput = document.getElementById(`age`);
const button = document.getElementById(`button`);
const priceInput = document.getElementById(`price`);
const resultForm = document.getElementById(`result-form`);


button.addEventListener(`click`, function (event) {
  event.preventDefault();
  const km = parseInt(kmInput.value);
  const age = parseInt(ageInput.value);
  const basePrice = km * 0.21
  let finalPrice;

  console.log(km, age, basePrice)

  if (age < 18) {
    finalPrice = basePrice - basePrice * 20 / 100
  }
  else if (age > 65) {
    finalPrice = basePrice - basePrice * 40 / 100
  }

  else {
    finalPrice = basePrice
  }

  const price = priceInput.innerHTML = `${finalPrice.toFixed(2)}`;


  resultForm.innerHTML = `<ul>
  <li><strong>Kilometri: </strong>${km}</li>
  <li><strong>Età: </strong>${age}</li>
  <li><strong>Prezzo finale: </strong>${finalPrice.toFixed(2)}€</li>
  </ul>`


  console.log(`${finalPrice.toFixed(2)}`)
})
