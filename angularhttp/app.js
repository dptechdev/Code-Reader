var app = angular.module('app', []);

app.controller('BooksCtrl', function($scope, $http) {

    $http.get('http://localhost:8080/api/books').
        success(function(data) {
           $scope.books = data;

        });

    /*$scope.addBook = function() {
        var dataObj = {

            title: $scope.title,
            author: $scope.author,
            isbn: $scope.isbn,
            pageCount: $scope.pageCount,
            publisher: $scope.publisher,
            url: $scope.url

        };

        var res = $http.post('http://localhost:8080/rest/books', dataObj);
        res.success(function(data) {
           console.log((JSON.stringify({data: data})));
        });

        $scope.title = '';
        $scope.author = '';
        $scope.isbn = '';
        $scope.pageCount = '';
        $scope.publisher = '';
        $scope.url = '';

    }; */

    app.addBook = function(book) {
        $http.post("http://localhost:8080/api/books", book).
            success(function(data) {
                console.log(data);
            })

    }

});