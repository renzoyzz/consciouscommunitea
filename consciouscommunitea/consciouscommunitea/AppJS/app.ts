namespace CommuniteaApp {
    angular.module('Communitea', ['ngRoute', 'ngSanitize']).config(($routeProvider: ng.route.IRouteProvider, $locationProvider: ng.ILocationProvider) => {

        $routeProvider.when('/', {
            templateUrl: '/PageTemplates/Home/home.html'
        })
        .when('/newpost', {
            templateUrl: '/PageTemplates/NewPost/newPost.html',
        })
        .otherwise('/');

        $locationProvider.html5Mode(true);
        
        

    })

 
    


}

let communiteaApp = angular.module('Communitea');