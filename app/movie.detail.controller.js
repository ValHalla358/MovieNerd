(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('DetailController', DetailController);

    DetailController.$inject = ['videoService', '$stateParams', 'toastr'];

    /* @ngInject 	*/
    function DetailController(videoService, $stateParams, toastr) {
        var md = this;
        md.title = 'DetailController';
        md.movieDetails = {};




        // function activate() {
        //     getDetails($stateParams.movieId);
        // }

        getDetails($stateParams.movieId);

        function getDetails(movieId) {
            videoService.getMovieDetails(movieId).then(
                    function(response) {
                        md.movieDetails = response.data;
                        $('html,body').scrollTop(0);
                        // md.videoDetails = {
                        //     Title: md.movieDetails.Title,
                        //     Year: md.movieDetails.Year,
                        //     Rated: md.movieDetails.Rated,
                        //     Poster: md.movieDetails.Poster,
                        //     Genre: md.movieDetails.Genre,
                        //     Director: md.movieDetails.Director,
                        //     Writers: md.movieDetails.Writers,
                        //     Actors: md.movieDetails.Actors,
                        //     Plot: md.movieDetails.Plot,
                        //     imdbID: md.movieDetails.imdbID
                        // }

                        toastr.success('We have data!!');
                        console.log(response.data);

                    })
                // getDetails();



        }

    }

})();
