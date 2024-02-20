// select all the seat
const seats = document.querySelectorAll('.seat');

let count = 0;

for (const seat of seats) {
   seat.addEventListener('click', function () {
      // *********** set bg color ***********


      // get seat name
      const seatText = seat.innerText;

      //  *********** display the seat ***********
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

      if (this.classList.contains('bg-[#1DD100]', 'text-white')) {
         this.classList.remove('bg-[#1DD100]');
         this.classList.remove('text-white');

         // remove child to parent
         newDiv.classList.add('hiddden');

      } else {
         this.classList.add('bg-[#1DD100]');
         this.classList.add('text-white');

         // add child to parent
         displayContainer.appendChild(newDiv);
         newDiv.appendChild(p1);
         newDiv.appendChild(p2);
         newDiv.appendChild(p3);
      }

      // *********** decrease available seat ***********
      // decrease from available seat
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


      // // no reapet add at same button
      // if (seat.classList.contains('bg-[#1DD100]')) {
      //    return;
      // }

   })
};


// discount 
document.getElementById('coupon-inputField').addEventListener('keyup', function (event) {
   const text = event.target.value;
   const applyButton = document.getElementById('apply-button');
   if (text === 'NEW15' || text === 'Couple 20') {
      applyButton.removeAttribute('disabled');

      if (text === 'NEW15') {
         const getTotalPrice = getElementValueById('total-price-display');
         const dicountPrice = getTotalPrice * 0.15;
         displayElementById('discount-amount', dicountPrice)

      } else {
         const getTotalPrice = getElementValueById('total-price-display');
         const dicountPrice = getTotalPrice * 0.20;
         displayElementById('discount-amount', dicountPrice)
      }
   } else {
      applyButton.setAttribute('disabled', true);
   }

   // discount after coupon grand total price
   const disTotalPrice = getElementValueById('total-price-display');
   console.log(disTotalPrice);
   const discountPriceAfterCoupon = getElementValueById('discount-amount');
   console.log(discountPriceAfterCoupon);
   const disGrandTotalPrice = disTotalPrice - discountPriceAfterCoupon;

   displayElementById('grand-total-price-display', disGrandTotalPrice);
});


// hide coupon code
document.getElementById('apply-button').addEventListener('click', function () {
   const couponFieldDelete = document.getElementById('delete-coupon');
   couponFieldDelete.style.display = 'none';

   const discountcontainer = document.getElementById('discount-container');
   discountcontainer.classList.remove('hidden');
})