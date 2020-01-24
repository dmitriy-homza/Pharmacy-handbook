var notebooks = angular.module('ner-search', []);

notebooks.controller('NotebookListCtrl', function($scope) {
  $scope.notebooks = [
    {"name": "Бензобарбитал",
     "procesor": "Лекарственное средство",
     "age": "25 грамм"},
    {"name": "Дифенгидрамин раствор для инъекций 10 мг/мл в ампулах 1 мл",
     "procesor": "Лекарственное средство",
     "age": "10 ампул"}
  ];
  $scope.orderList = "name";
});
