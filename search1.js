var nerSearch = angular.module('ner-search', []);

nerSearch.controller('NotebookListCtrl', function($scope) {
  $scope.nerLS = [
    {"name": "Дифенгидрамин раствор для инъекций 10 мг/мл в ампулах 1 мл",
     "type": "Лекарственное средство",
     "dose": "10 ампул"},
    {"name": "Дифенгидрамин таблетки 50 мг",
     "type": "Лекарственное средство",
     "dose": "20 табл."},
    {"name": "Комбинированные ЛС, содержащие эфедрин и псевдоэфедрин, в виде сиропа или микстуры",
      "type": "Лекарственное средство",
      "dose": "2 флакона"},
    {"name": "Этанол, р-р для наружного применения 70% во флаконах по 100 мл",
       "type": "Лекарственное средство",
       "dose": "2 флакона"},

  ];
  $scope.nerPSY = [
    {"name": "Алпразолам",
       "type": "Психотропное вещество",
       "dose": "45 мг"},
    {"name": "Буторфанол",
       "type": "Психотропное вещество",
       "dose": "72 мг"},
    {"name": "Диазепам",
       "type": "Психотропное вещество",
       "dose": "0.45 грамма"},
    {"name": "Золпидем",
        "type": "Психотропное вещество",
        "dose": "0,6 грамма"},
    {"name": "Клонидин (Клофелин)",
        "type": "Психотропное вещество",
        "dose": "15 мг"},
    {"name": "Клоназепам",
        "type": "Психотропное вещество",
        "dose": "240 мг"},
    {"name": "Лоразепам",
        "type": "Психотропное вещество",
        "dose": "200 мг"},
    {"name": "Медазепам",
        "type": "Психотропное вещество",
        "dose": "1,5 грамма"},
    {"name": "Метилфенидат",
        "type": "Психотропное вещество",
        "dose": "1,7 грамма"},
        {"name": "Мидазолам",
           "type": "Психотропное вещество",
           "dose": "0,9 грамма"},
        {"name": "Нитразепам",
           "type": "Психотропное вещество",
           "dose": "0,6 грамма"},
        {"name": "Оксазепам",
           "type": "Психотропное вещество",
           "dose": "3 грамма"},
        {"name": "Т-Федрин",
            "type": "Психотропное вещество",
            "dose": "60 табл."},
        {"name": "Темазепам",
            "type": "Психотропное вещество",
            "dose": "1 грамм"},
        {"name": "Теофедрин",
            "type": "Психотропное вещество",
            "dose": "30 табл."},
        {"name": "Тианептин (Коаксил)",
            "type": "Психотропное вещество",
            "dose": "2,3 грамма"},
        {"name": "Трамадол",
            "type": "Психотропное вещество",
            "dose": "5 граммов"},
        {"name": "Триазолам",
            "type": "Психотропное вещество",
            "dose": "15 мг"},
            {"name": "Феназепам",
                "type": "Психотропное вещество",
                "dose": "50 мг"},
            {"name": "Фенобарбитал",
                "type": "Психотропное вещество",
                "dose": "3 грамма"},
            {"name": "Хлордиазепоксид",
                "type": "Психотропное вещество",
                "dose": "1,5 грамма"},
            {"name": "Эфедрин",
                "type": "Психотропное вещество",
                "dose": "0,6 грамма"},
  ];
  $scope.nerDRUGS = [
    {"name": "Бупренорфин",
        "type": "Наркотическое средство",
        "dose": "0,1 грамма"},
    {"name": "Декстропропоксифен",
        "type": "Наркотическое средство",
        "dose": "1,3 грамма"},
    {"name": "Гидроморфон в табл. пролонгированного де-ия:",
        "type": "Наркотическое средство",
        "dose": "1 блистер"},
    {"name": "Морфин",
        "type": "Наркотическое средство",
        "dose": "1 грамм"},
        {"name": "Морфин р-р для инъекций 10 мг/мл в амп. 1 мл",
            "type": "Наркотическое средство",
            "dose": "10 ампул"},
        {"name": "Морфин в табл. с продолжительностью де-ия >12 часов:",
            "type": "Наркотическое средство",
            "dose": "1 блистер"},
        {"name": "Тримеперидин (Промедол)",
            "type": "Наркотическое средство",
            "dose": "250 мг"},
        {"name": "Тримеперидин (Промедол) р-р для инъекций 20 мг/мл в амп. 1 мл",
            "type": "Наркотическое средство",
            "dose": "10 ампул"},
            {"name": "Фентанил в виде трансдермальной терапевтической си-стемы",
                "type": "Наркотическое средство",
                "dose": "5 ТТС"},
            {"name": "Фентанил, табл. сублингвальные",
                "type": "Наркотическое средство",
                "dose": "1 блистер"},

  ];
  $scope.orderList = "name";
});




//Табсы

// tabs

var tabLinks = document.querySelectorAll(".tablinks");
var tabContent = document.querySelectorAll(".tabcontent");


tabLinks.forEach(function(el) {
   el.addEventListener("click", openTabs);
});


function openTabs(el) {
   var btnTarget = el.currentTarget;
   var country = btnTarget.dataset.country;

   tabContent.forEach(function(el) {
      el.classList.remove("active");
   });

   tabLinks.forEach(function(el) {
      el.classList.remove("active");
   });

   document.querySelector("#" + country).classList.add("active");

   btnTarget.classList.add("active");
}


//Плавный скроллинг
$(document).ready(function(){
	$(".items").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;

		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 400);
	});
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
