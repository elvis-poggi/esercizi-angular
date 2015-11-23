angular.module("todoListApp", [])
    //Dove stannno i dati
    .factory('TodoManager', function () {

        var data = [
            {
                "name": "clean the house"
            },
            {
                "name": "spit on the dog"
            },
            {
                "name": "eat a lot"
            },
            {
                "name": "go to the toilet"
            },
            {
                "name": "wash the car"
            }
        ];

        // ritorna un oggetto con cui modificare i dati
        return {
            get: function () {
                return data;
            },
            add: function (obj) {
                data.push(obj);
            },
            del: function (id) {
                data.splice(id, 1);
            }
        };
    })

//il controller del footer con il numero di elementi
.controller('altCtrl', function ($scope, TodoManager) {

    $scope.update = function () {
        var data = TodoManager.get();
        $scope.prova = data.length;
    }
    $scope.prova = "booh";
})

//il controller con la lista degli elementi
.controller('mainCtrl', function ($scope, TodoManager) {

    $scope.prova = 12;

    $scope.todo_list = TodoManager.get();

    $scope.select = function (item) {
        console.log('select')
        if (item.complete) return;
        item.selected = true;
    };

    $scope.deselect = function (item) {

        item.selected = false;
    };

    $scope.cancella = function (item) {

        // var id = $scope.todo_list.indexOf(item);
        // $scope.todo_list.splice(id, 1);
        TodoManager.del($scope.todo_list.indexOf(item))
    };

    $scope.aggiungi = function () {

        var new_item = {
            selected: true
        };
        // $scope.todo_list.push(new_item);
        TodoManager.add(new_item);
    }
});