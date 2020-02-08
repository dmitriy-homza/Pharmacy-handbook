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
  abBack.classList.remove('plus-height');
  removeAnswer();
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
let abBack = document.querySelector('.ab-card .back');

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
  abBack.classList.remove('plus-height');
  getVolume(weight.value, medicineDose.value, dose.value);
  abCard.classList.add('plus-height');
  abFront.classList.add('plus-height');
  abBack.classList.add('plus-height');
});



//Показать нд
let addClass = function (nd) {
nd.addEventListener('mouseover', function () {
  nd.classList.add('is-active')
});
}

let removeClass = function (ndr) {
ndr.addEventListener('mouseout', function () {
  ndr.classList.remove('is-active')
});
}

let ndSection = document.querySelector('#d');
let nd = ndSection.children;
for (var i = 0; i < nd.length; i++) {
  addClass(nd[i]);
}
for (var i = 0; i < nd.length; i++) {
  removeClass(nd[i]);
}
