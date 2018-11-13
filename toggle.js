var defaultState = true;
var allTrueText = 'Yes';
var allFalseText = 'No';
var slideTrueText = 'Hide Answer';
var slideFalseText = 'Show Answer';
var legendText = 'Show Answers';

var targets = document.getElementsByClassName('toggle');
var buttons = document.getElementsByClassName('slide-toggler');
var container = document.getElementsByClassName('slides')[0]
var sections = document.getElementsByTagName('section')

for (let i = 0; i < buttons.length; i++) {
  buttons[i].style.visibility = 'hidden';
}

var toggleAllTrueButton = document.getElementById('toggle-all-true');
toggleAllTrueButton.type = 'radio';
toggleAllTrueButton.name = 'toggle';

var toggleAllFalseButton = document.getElementById('toggle-all-false');
toggleAllFalseButton.type = 'radio';
toggleAllFalseButton.name = 'toggle';


document.addEventListener('click', function (event) {
  if (event.target.matches('#toggle-all-true')) {
		toggleAllTrue();
    event.target.blur();
	}
	if (event.target.matches('#toggle-all-false')) {
		toggleAllFalse();
    event.target.blur();
	}
  if (event.target.matches('.slide-toggler')) {
		toggleSlide(event.target);
	}
  if (event.target.matches('.shuffle')) {
    shuffle(container, sections)
  }
}, false);



// Make toggle class elements visible and hide slide toggle buttons
function toggleAllTrue(){
  for (let i = 0; i < targets.length; i++) {
    targets[i].style.visibility='visible';
  }
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.visibility = 'hidden';
  }
}


// Make toggle class elements hidden and make slide toggle buttons visible
// with false state text displayed
function toggleAllFalse(){
  for (let i = 0; i < targets.length; i++) {
    targets[i].style.visibility = 'hidden';
  }
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.visibility = 'visible';
    buttons[i].innerHTML = slideFalseText;
  }
}


// Toggle content of current slide and toggle slideTogglerText
function toggleSlide(t){
  var parent = t.parentNode;
  var slideTargets = parent.getElementsByClassName('toggle');
  if (t.innerHTML == slideTrueText) {
    t.innerHTML = slideFalseText;
    for (let i = 0; i < slideTargets.length; i++) {
      slideTargets[i].style.visibility='hidden';
    }
  }
  else {
    t.innerHTML = slideTrueText;
    for (let i = 0; i < slideTargets.length; i++) {
      slideTargets[i].style.visibility='visible';
    }
  }
}


// Shuffle slides 
function shuffle(container, elements){
  var start = 1
  for (var i = elements.length - start; i >= start; i--) {
    container.appendChild(elements[Math.random() * i | start]);
  Reveal.slide(0)
  }
}
