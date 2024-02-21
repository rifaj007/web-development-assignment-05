// select all the seat
const seats = document.querySelectorAll('.seat');

for (const seat of seats) {
   seat.addEventListener('click', function (event) {

      // seat select limitation
      const getTotalAmount = getElementValueById('total-price-display');
      if (getTotalAmount >= (4 * 550)) {
         alert("You cannot select more than 4");
         return;
      }

      // get seat name
      const seatText = event.target.innerText;

      //  *********** display the seat ***********
      // get the container where to display
      const displayContainer = document.getElementById('display-container');

      // create elements
      const newDiv = document.createElement('div');
      const p1 = document.createElement('p');
      const p2 = document.createElement('p');
      const p3 = document.createElement('p');

      // set inner text
      p1.innerText = seatText;
      p2.innerText = 'Economoy';
      p3.innerText = '550';

      // add class to div
      newDiv.classList.add('flex');
      newDiv.classList.add('justify-between');
      newDiv.classList.add('text-[#03071299]');
      newDiv.classList.add('text-base');
      newDiv.classList.add('mb-4');

      // add child to parent
      displayContainer.appendChild(newDiv);
      newDiv.appendChild(p1);
      newDiv.appendChild(p2);
      newDiv.appendChild(p3);

      // disable button to prevent double click
      event.target.setAttribute("disabled", false);

      // *********** decrease available seat ***********
      const availableSeat = getElementValueById('available-seat');
      const updatedAvailableSeat = availableSeat - 1;
      displayElementById('available-seat', updatedAvailableSeat);

      // *********** increase select total seat ***********
      const selectedTotalSeat = getElementValueById('select-total-seat');
      const updatedSecletedTotalSeat = selectedTotalSeat + 1;
      displayElementById('select-total-seat', updatedSecletedTotalSeat);

      // *********** Total Price ***********
      const totalPrice = updatedSecletedTotalSeat * 550;
      displayElementById('total-price-display', totalPrice);

      // *********** Grand Total Price ***********
      const grandTotalPrice = totalPrice;
      displayElementById('grand-total-price-display', grandTotalPrice);

      // apply button enable
      const applyButton = document.getElementById('apply-button');
      if (updatedSecletedTotalSeat == 4) {
         applyButton.removeAttribute('disabled');
      } else {
         applyButton.setAttribute('disabled', true);
      }
   })
};



// coupon
document.getElementById('coupon-inputField').addEventListener('keyup', function (event) {

   const selectedTotalSeat = getElementValueById('select-total-seat');
   if (selectedTotalSeat < 4) {
      alert('You have to select 4 seat to get discount');

      const couponInputField = document.getElementById('coupon-inputField');
      couponInputField.value = '';

      return
   }

   const text = event.target.value;
   if (text === 'NEW15' || text === 'Couple 20') {

      if (text === 'NEW15') {
         const getTotalPrice = getElementValueById('total-price-display');
         const dicountPrice = (getTotalPrice * 0.15).toFixed();
         displayElementById('discount-amount', dicountPrice)

      } else {
         const getTotalPrice = getElementValueById('total-price-display');
         const dicountPrice = (getTotalPrice * 0.20).toFixed();
         displayElementById('discount-amount', dicountPrice)
      }
   } else {
      displayElementById('discount-amount', 0)
   }
});

// apply discount 
document.getElementById('apply-button').addEventListener('click', function () {

   // discount after coupon grand total price
   const disTotalPrice = getElementValueById('total-price-display');
   const discountPriceAfterCoupon = getElementValueById('discount-amount');

   // for invalid coupon
   if (discountPriceAfterCoupon == 0) {
      alert('Invalid coupon code!')

      const couponInputField = document.getElementById('coupon-inputField');
      couponInputField.value = '';
      return;
   }

   // sum of grand total price
   const disGrandTotalPrice = disTotalPrice - discountPriceAfterCoupon;

   // display discount
   displayElementById('grand-total-price-display', disGrandTotalPrice);

   // hide the coupon input field
   const couponFieldDelete = document.getElementById('delete-coupon');
   couponFieldDelete.style.display = 'none';

   const discountcontainer = document.getElementById('discount-container');
   discountcontainer.classList.remove('hidden');

   // clear input field
   const couponInputField = document.getElementById('coupon-inputField');
   couponInputField.value = '';

   // apply button disabled
   const applyButton = document.getElementById('apply-button');
   applyButton.setAttribute('disabled', true);
});


// form button enable
const nameInput = document.getElementById('name-input-field');
const phoneInput = document.getElementById('phone-input-field');
const emailInput = document.getElementById('email-input-field');
const formNextButton = document.getElementById('form-next-button');

// Function to check if all input fields are filled
function checkInputs() {
   const name = nameInput.value.trim();
   const phone = phoneInput.value.trim();
   const email = emailInput.value.trim();
   const totalPriceDisplay = getElementValueById('total-price-display');

   // If all fields are filled, remove disabled attribute from next button
   if (name !== '' && phone !== '' && email !== '' && totalPriceDisplay > 0) {
      formNextButton.removeAttribute('disabled');
   } else {
      formNextButton.setAttribute('disabled', true);
   }
}

nameInput.value = '';
phoneInput.value = '';
emailInput.value = '';
formNextButton.setAttribute('disabled', true);

// Add event listeners to input fields to check for changes
nameInput.addEventListener('input', checkInputs);
phoneInput.addEventListener('input', checkInputs);
emailInput.addEventListener('input', checkInputs);