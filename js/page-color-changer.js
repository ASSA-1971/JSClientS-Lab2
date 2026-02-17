// page color changer script
// changes the background color of the page based on RGB sliders

// wait for the page to load before running the script
window.addEventListener('load', function() {
  
  // grab the three slider inputs
  var redSlider = document.getElementById('red');
  var greenSlider = document.getElementById('green');
  var blueSlider = document.getElementById('blue');
  
  // grab the html element so we can change its background
  var pageElement = document.querySelector('html');
  
  // function that updates the background color
  // reads the current values from all three sliders and applies them
  function updateBackgroundColor() {
    var redValue = redSlider.value;
    var greenValue = greenSlider.value;
    var blueValue = blueSlider.value;
    
    // build the rgb string like "rgb(255, 128, 0)"
    var rgbString = 'rgb(' + redValue + ',' + greenValue + ',' + blueValue + ')';
    
    // apply it to the html element background
    pageElement.style.backgroundColor = rgbString;
  }
  
  // attach event listeners to each slider
  // when the user moves any slider, update the color
  redSlider.addEventListener('input', updateBackgroundColor);
  greenSlider.addEventListener('input', updateBackgroundColor);
  blueSlider.addEventListener('input', updateBackgroundColor);
  
});
