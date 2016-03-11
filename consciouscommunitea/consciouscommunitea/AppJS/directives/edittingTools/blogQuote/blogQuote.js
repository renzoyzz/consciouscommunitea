var CommuniteaApp;
(function (CommuniteaApp) {
    var Directives;
    (function (Directives) {
        function blogQuote() {
            return {
                templateUrl: '/AppJS/directives/edittingTools/blogQuote/blogQuote.html',
                scope: {
                    text: '@'
                },
                link: function (scope, element, attrs) {
                }
            };
        }
        communiteaApp.directive('blogQuote', [blogQuote]);
    })(Directives = CommuniteaApp.Directives || (CommuniteaApp.Directives = {}));
})(CommuniteaApp || (CommuniteaApp = {}));
//# sourceMappingURL=blogQuote.js.map