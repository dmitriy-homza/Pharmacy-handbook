var form = document.querySelector('.prescription-form');
var pulvNumber = document.querySelector('#recipe-number');
var message = document.querySelector('.answer');
var card = document.querySelector('.card-flip');
var front = document.querySelector('.pulv .front')
var number = 0;
//функция расчета номеров
var prescriptionNumber = function(pulvNumber) {
  var advise = document.createElement('h3');
  //добавляем класс для удаления повторяющихся элементов
  advise.classList.add('advise');

  if (pulvNumber<=20 && pulvNumber>0) {
    number=1;
  }

  else if (pulvNumber>20 ) {
    number = 1+Math.ceil((pulvNumber-20)/20)*0.5;
  }

  else if (pulvNumber<=0 ) {
    number = -1;
    console.log(number)
  }

let rPulvNumber = pulvNumber%10;
let pulvText = 0;

if (rPulvNumber<5 && rPulvNumber>1) {
  pulvText = ' порошка ';
}
else if (pulvNumber<20 && pulvNumber>=10) {
  pulvText = ' порошков ';
}
else if (rPulvNumber==1) {
  pulvText = ' порошок ';
  console.log(rPulvNumber)
}
else  {
  pulvText = ' порошков ';
}


  if (number<5 && number>1) {
    advise.textContent = pulvNumber + pulvText + 'рассчитывается как ' + number + ' рецептурных номера.';
    message.appendChild(advise);
    front.classList.remove('plus-height649');
    card.classList.remove('plus-height649');
    card.classList.add('plus-height');
    front.classList.add('plus-height');
  }
  else if (number>=5) {
    advise.textContent = pulvNumber + pulvText + 'рассчитывается как ' + number + ' рецептурных номеров.';
    message.appendChild(advise);
    front.classList.remove('plus-height649');
    card.classList.remove('plus-height649');
    card.classList.add('plus-height');
    front.classList.add('plus-height');
  }
  else if (number == 1) {
    advise.textContent = pulvNumber + pulvText + 'рассчитывается как ' + number + ' рецептурный номер.';
    message.appendChild(advise);
    front.classList.remove('plus-height649');
    card.classList.remove('plus-height649');
    card.classList.add('plus-height');
    front.classList.add('plus-height');
  }
  else if (pulvNumber<1) {
    advise.textContent ='Порошки не берутся из ниоткуда:)';
    message.appendChild(advise);
    front.classList.remove('plus-height');
    card.classList.remove('plus-height');
    card.classList.add('plus-height649');
    front.classList.add('plus-height649');
  }


};


//обработчик события нажатия
form.addEventListener('submit', function (evt) {
  evt.preventDefault();
  abCard.classList.remove('plus-height');
  abFront.classList.remove('plus-height');
  removeAnswer();
  console.log('Схватил');
  var input = pulvNumber.value;
  prescriptionNumber(input);
});



let doseForm = document.querySelector('.ab-dose');
let medicineDose = document.querySelector('.dose-amount');
let weight = document.querySelector('#weight');
let dose = document.querySelector('#slider');
let volume = 0;
let doseBlock = document.querySelector('.ab-answer');
let abCard = document.querySelector('.ab-card');
let abFront = document.querySelector('.ab-card .front');

let getVolume = function (weight, medicineDose, dose) {
  let advise = document.createElement('h3');
  advise.classList.add('advise');
  volume = weight*dose/medicineDose/3*5;
  volume = volume.toFixed(1)
  advise.textContent = 'Ребенку необходимо принимать ' + volume + ' мл. суспензии 3 раза в день.';
  doseBlock.appendChild(advise);
}

let removeAnswer = function(){
  let removen = document.querySelector('.advise')
  if (removen) {
    removen.remove();
  }

}

doseForm.addEventListener('submit', function (evt2) {
  evt2.preventDefault();
  removeAnswer();
  front.classList.remove('plus-height649');
  card.classList.remove('plus-height649');
  front.classList.remove('plus-height');
  card.classList.remove('plus-height');
  getVolume(weight.value, medicineDose.value, dose.value);
  abCard.classList.add('plus-height');
  abFront.classList.add('plus-height');
});

//слайдер
// Clear the concole on every refresh
console.clear();

// Range Slider Properties.
// Fill : The trailing color that you see when you drag the slider.
// background : Default Range Slider Background
const sliderProps = {
	fill: "#2a8f68",
	background: "rgba(255, 255, 255, 0.214)",
};

// Selecting the Range Slider container which will effect the LENGTH property of the password.
const slider = document.querySelector(".range__slider");

// Text which will show the value of the range slider.
const sliderValue = document.querySelector(".length__title");

// Using Event Listener to apply the fill and also change the value of the text.
slider.querySelector("input").addEventListener("input", event => {
	sliderValue.setAttribute("data-length", event.target.value);
	applyFill(event.target);
});
// Selecting the range input and passing it in the applyFill func.
applyFill(slider.querySelector("input"));
// This function is responsible to create the trailing color and setting the fill.
function applyFill(slider) {
	const percentage = (100 * (slider.value - slider.min)) / (slider.max - slider.min);
	const bg = `linear-gradient(90deg, ${sliderProps.fill} ${percentage}%, ${sliderProps.background} ${percentage +
		0.1}%)`;
	slider.style.background = bg;
	sliderValue.setAttribute("data-length", slider.value);
}
