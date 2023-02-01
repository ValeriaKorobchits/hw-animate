var app = angular.module('cityApp', ['ngRoute', 'ngAnimate']);
app.config(function($routeProvider){
    $routeProvider
    .when('/it', {
        templateUrl: "animate-project.html",
        controller: "itCtrl"
    })
    .when('/smile', {
        templateUrl: "animate-project.html",
        controller: "smileCtrl"
    })
    .when('/avatar', {
        templateUrl: "animate-project.html",
        controller: "avatarCtrl"
    })
    .when('/venom', {
        templateUrl: "animate-project.html",
        controller: "venomCtrl"
    })
    .when('/blackadam', {
        templateUrl: "animate-project.html",
        controller: "blackadamCtrl"
    })
    .when('/lostcity', {
        templateUrl: "animate-project.html",
        controller: "lostcityCtrl"
    })
});

app.controller("itCtrl", function($scope, $route){
    $scope.film = {
        title: 'It',
        country: 'United States of America',
        year: '2017',
        genre: 'Supernatural Horror, Coming-of-Age, Psychological Horror, Cosmic Horror',
        producer: 'Andy Muschietti'
    }
});
app.controller("smileCtrl", function($scope, $route){
    $scope.film = {
        title: 'Smile',
        country: 'United States of America',
        year: '2022',
        genre: 'Detective, Thriller, Horror',
        producer: 'Parker Finn'
    }
});
app.controller("avatarCtrl", function($scope, $route){
    $scope.film = {
        title: 'Avatar 1',
        country: 'United States of America',
        year: '2009',
        genre: 'Fantasy, Action, Drama',
        producer: 'James Cameron'
    }
});
app.controller("venomCtrl", function($scope, $route){
    $scope.film = {
        title: 'Venom',
        country: 'United States of America',
        year: '2018',
        genre: 'Action, Thriller, Horror, Sci-Fi',
        producer: 'Ruben Fleischer'
    }
});
app.controller("blackadamCtrl", function($scope, $route){
    $scope.film = {
        title: 'Black Adam',
        country: 'United States of America',
        year: '2022',
        genre: 'Sci-Fi, Action',
        producer: 'Jaume Collet-Serra'
    }
});
app.controller("lostcityCtrl", function($scope, $route){
    $scope.film = {
        title: 'The lost city',
        country: 'United States of America',
        year: '2022',
        genre: 'Adventure, Action, Comedy',
        producer: 'Aaron Nee, Adam Nee'
    }
});