// display or change the element
function displayElementById (elementId, value) {
   const element = document.getElementById(elementId);
   element.innerText = value;
}

// get element value by Id 
function getElementValueById (elementId) {
   const element = document.getElementById(elementId);
   const elementText = element.innerText;
   const value = parseInt(elementText);
   return value;
}
