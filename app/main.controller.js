(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('MainController', MainController);

    MainController.$inject = ['videoService', '$state', 'toastr'];

    /* @ngInject */
    function MainController(videoService, $state, toastr) {
        var vm = this;
        vm.title = 'MainController';

        vm.movieData = {};



        //////////////



        vm.getVideo = function(movieTitle) {

            videoService.getVideoData(movieTitle).then(
                function(response) {

                    vm.movieData = response.data.Search;
                    vm.videoData = {
                        Title: vm.movieData.Title,
                        Year: vm.movieData.Year,
                        Poster: vm.movieData.Poster,
                        imdbID: vm.movieData.imdbID
                    }
                    toastr.success('We have data!!');
                    console.log(response.data);


                }, //response function
                function(error) {
                    if (error.data) {
                        toastr.error('There was a problem:' + error);
                    } else {
                        toastr.info('no data found :(');
                    }

                } //function error

            )

        }
    }
})();
