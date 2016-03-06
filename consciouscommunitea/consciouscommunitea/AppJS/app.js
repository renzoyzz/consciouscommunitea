var CommuniteaApp;
(function (CommuniteaApp) {
    angular.module('Communitea', ['ngRoute', 'ngSanitize']).config(function ($routeProvider, $locationProvider) {
        $routeProvider.when('/', {
            templateUrl: '/PageTemplates/Home/home.html'
        })
            .when('/newpost', {
            templateUrl: '/PageTemplates/NewPost/newPost.html',
        })
            .otherwise('/');
        $locationProvider.html5Mode(true);
    });
})(CommuniteaApp || (CommuniteaApp = {}));
var communiteaApp = angular.module('Communitea');
//# sourceMappingURL=app.js.map