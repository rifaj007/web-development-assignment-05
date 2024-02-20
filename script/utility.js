// get element by Id function
function getElementById (elementId) {
   const element = document.getElementById(elementId);
   element.innerText;
};

// used
// display or change the element
function displayElementById (elementId, value) {
   const element = document.getElementById(elementId);
   element.innerText = value;
}

// used
// get element value by Id 
function getElementValueById (elementId) {
   const element = document.getElementById(elementId);
   const elementText = element.innerText;
   const value = parseInt(elementText);
   return value;
}


// to get element text 
function getElementTextById (elementId) {
   const element = document.getElementById(elementId);
   const text = element.innerText;
   return text;
 }

