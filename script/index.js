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
   })
};

// // discount 
document.getElementById('coupon-inputField').addEventListener('keyup', function (event) {
   const text = event.target.value;
   const applyButton = document.getElementById('apply-button');
   if (text === 'NEW15' || text === 'Couple 20') {
      applyButton.removeAttribute('disabled');

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
      applyButton.setAttribute('disabled', true);
   }
});

// apply discount 
document.getElementById('apply-button').addEventListener('click', function () {

   // discount after coupon grand total price
   const disTotalPrice = getElementValueById('total-price-display');
   const discountPriceAfterCoupon = getElementValueById('discount-amount');
   const disGrandTotalPrice = disTotalPrice - discountPriceAfterCoupon;

   displayElementById('grand-total-price-display', disGrandTotalPrice);

   // hide the coupon input field
   const couponFieldDelete = document.getElementById('delete-coupon');
   couponFieldDelete.style.display = 'none';

   const discountcontainer = document.getElementById('discount-container');
   discountcontainer.classList.remove('hidden');
});