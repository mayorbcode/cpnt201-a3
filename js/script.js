// Declare and Assign variables
let button = document.querySelector('.page-button');
let svgFace = document.querySelector('.face');
let svgFeaturesText = document.querySelector('.features-text');
let svgEarsNeck = document.querySelector('.ears-neck');
let mainBackground = document.querySelector('.main-wrapper');

// Function declaration 
function changeColors() {
  svgFace.classList.toggle('svg-face');
  svgEarsNeck.classList.toggle('svg-ears-neck');
  svgFeaturesText.classList.toggle('svg-features-text');
  mainBackground.classList.toggle('main-background');
}

// Add click handler using event listener and pass earlier function as an argument (callback)
button.addEventListener('click', changeColors);