var form = document.querySelector('.prescription-form');
var pulvNumber = document.querySelector('#recipe-number');
var message = document.querySelector('.prescription-form');
var number = 0;
//функция расчета номеров
var prescriptionNumber = function(pulvNumber) {


  var advise = document.createElement('p');
  //добавляем класс для удаления повторяющихся элементов
  advise.classList.add('advise');

  if (pulvNumber<=20 && pulvNumber>0) {
    number=1;

  }
  else if (pulvNumber>20 ) {
    number = 1+Math.ceil((pulvNumber-20)/10)*0.5;
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
let dose = document.querySelector('#doserange');
let volume = 0;
let doseBlock = document.querySelector('.ab-dose-block');

let getVolume = function (weight, medicineDose, dose) {
  let advise = document.createElement('p');
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
