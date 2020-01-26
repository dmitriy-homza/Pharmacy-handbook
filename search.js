var nerSearch = angular.module('ner-search', []);

nerSearch.controller('NotebookListCtrl', function($scope) {
  $scope.nerLS = [
    {"name": "Бензобарбитал",
     "type": "Лекарственное средство",
     "dose": "25 грамм"},
    {"name": "Дифенгидрамин раствор для инъекций 10 мг/мл в ампулах 1 мл",
     "type": "Лекарственное средство",
     "dose": "10 ампул"},
    {"name": "Дифенгидрамин таблетки 50 мг",
     "type": "Лекарственное средство",
     "dose": "25 грамм"},
    {"name": "Комбинированные лекарственные средства, содержащие эфедрин и псевдоэфедрин, в виде сиропа или микстуры",
      "type": "Лекарственное средство",
      "dose": "2 флакона"},
    {"name": "Этанол, р-р для наружного применения 70% во флаконах по 100 мл",
       "type": "Лекарственное средство",
       "dose": "2 флакона"},

  ];
  $scope.nerPSY = [
    {"name": "Алпразолам",
       "type": "Психотропное вещество",
       "dose": "45 миллиграммов"},
    {"name": "Буторфанол",
       "type": "Психотропное вещество",
       "dose": "72 миллиграмма"},
    {"name": "Диазепам",
       "type": "Психотропное вещество",
       "dose": "0.45 грамма"},

  ];
  $scope.nerDRUGS = [

  ];
  $scope.orderList = "name";
});