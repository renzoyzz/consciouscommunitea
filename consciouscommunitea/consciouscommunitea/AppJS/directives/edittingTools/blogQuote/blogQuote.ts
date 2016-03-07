namespace CommuniteaApp.Directives {

  


    function blogQuote() {
        return {
            templateUrl: '/AppJS/directives/edittingTools/blogQuote/blogQuote.html',
            scope: {
                text: '@'
            },
            link: (scope, element, attrs) => {

            }

        }
    }



    communiteaApp.directive('blogQuote', [blogQuote])
}