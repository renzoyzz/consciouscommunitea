var CommuniteaApp;
(function (CommuniteaApp) {
    var Directives;
    (function (Directives) {
        function ngScopeElement() {
            {
                var directiveDefinitionObject = {
                    restrict: "A",
                    compile: function compile(tElement, tAttrs, transclude) {
                        return {
                            pre: function preLink(scope, iElement, iAttrs, controller) {
                                scope[iAttrs.ngScopeElement] = iElement;
                            }
                        };
                    }
                };
                return directiveDefinitionObject;
            }
        }
        communiteaApp.directive('ngScopeElement', [ngScopeElement]);
    })(Directives = CommuniteaApp.Directives || (CommuniteaApp.Directives = {}));
})(CommuniteaApp || (CommuniteaApp = {}));
//# sourceMappingURL=ngScopeElement.js.map