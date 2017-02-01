/**
 * Created by user on 1/2/17.
 */

'use strict';
angular.module('myapp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngMessages',
    'ngTouch',
    'ui.router',
    'ui.bootstrap'
])
    .run(function ($rootScope, $http, $state) {

        /*var socket = io.connect('/', {
         'reconnectionDelay': 5000,
         'max reconnection attempts': 2
         });

         socket.io.on('connect_error', function () {
         $state.transitionTo("common.000");
         });

         $rootScope.mySocket = socket;*/

    })
    .config(function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
        $stateProvider

            .state('home', {
                url: '/',
                templateUrl: 'views/myapp.html',
                controller: function () {
                    console.log('controller');
                    var socket = io();
                    socket.on('hello', function (data) {
                        console.log(data);
                    });
                }
            })

        $urlRouterProvider.otherwise('/');
        $locationProvider.hashPrefix('');
    });

