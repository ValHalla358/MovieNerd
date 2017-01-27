(function() {
    'use strict';

    angular
        .module('myApp')
        .service('videoService', videoService);

    videoService.$inject = ['$state', '$http', '$q'];

    /* @ngInject */
    function videoService($state, $http, $q) {
        this.getVideoData = getVideoData;
        this.getMovieDetails = getMovieDetails;

        function getVideoData(movieTitle) {
            var defer = $q.defer();
            $http({
                method: 'GET',
                url: 'http://www.omdbapi.com/?',
                params: {
                    s: movieTitle
                }
            }).then(function(response) {
                if (typeof response.data === 'object') {
                    defer.resolve(response);

                } else {
                    defer.reject('no data found :(')
                }

                // error code
            }, function(error) {
                console.log(error);
                defer.reject(error);

            });

            return defer.promise;
        }


        function getMovieDetails(movieId) {
            var defer = $q.defer();
            $http({
                method: 'GET',
                url: 'http://www.omdbapi.com/',
                params: {
                    i: movieId,
                    plot: "full"
                }

            }).then(function(response) {
                if (typeof response.data === 'object') {
                    defer.resolve(response);

                } else {
                    defer.reject('no data found :(')
                }

                // error code
            }, function(error) {
                console.log(error);
                defer.reject(error);

            });

            return defer.promise;

        }

    };
    // return service;

})();
