namespace CommuniteaApp {
    angular.module('Communitea', ['ngRoute']).config(($routeProvider: ng.route.IRouteProvider, $locationProvider: ng.ILocationProvider) => {

        $routeProvider.when('/', {
            templateUrl: '/PageTemplates/Home/home.html'
        })
            .otherwise('/');

        $locationProvider.html5Mode(true);
        
        

    })

 
    


}

let communiteaApp = angular.module('Communitea');