var form = document.querySelector('.prescription-form');
var pulvNumber = document.querySelector('#recipe-number');
var message = document.querySelector('.recipe-description');
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



  if (number<5 && number>1) {
    advise.textContent = 'Получилось ' + number + ' рецептурных номера.';
    message.appendChild(advise);

  }
  else if (number>=5) {
    advise.textContent = 'Получилось ' + number + ' рецептурных номеров.';
    message.appendChild(advise);
  }
  else if (number = 1) {
    advise.textContent = 'Получился ' + number + ' рецептурный номер.';
    message.appendChild(advise);
  }
  else if (number=-1) {
    advise.textContent ='Порошки не берутся из ниоткуда:)';
    message.appendChild(advise);
    console.log('Меньше')
  }


};


//обработчик события нажатия
form.addEventListener('submit', function (evt) {
  evt.preventDefault();
  removeAnswer();
  console.log('Схватил')
  var input = pulvNumber.value;
  prescriptionNumber(input);
});



let doseForm = document.querySelector('.ab-dose');
let medicineDose = document.querySelector('.dose-amount');
let weight = document.querySelector('#weight');
let dose = document.querySelector('#slider');
let volume = 0;
let doseBlock = document.querySelector('.ab-description');

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
  getVolume(weight.value, medicineDose.value, dose.value);
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
