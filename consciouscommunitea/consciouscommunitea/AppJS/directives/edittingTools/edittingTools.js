var CommuniteaApp;
(function (CommuniteaApp) {
    var Directives;
    (function (Directives) {
        var EdittingTools = (function () {
            function EdittingTools(scope, element, compile) {
                var _this = this;
                this.scope = scope;
                this.compile = compile;
                this.blogPreview = this.scope.blogPreview;
                this.element = element;
                this.code = this.scope.code;
                this.code = '';
                this.blogContent = this.scope.blogContent;
                this.butParagraph = this.scope.butParagraph;
                this.scope.newParagraph = function () {
                    _this.newParagraph();
                };
                this.scope.newImage = function () {
                    _this.newImage();
                };
                this.scope.newQuote = function () {
                    _this.newQuote();
                };
                this.scope.$watch(function () { return _this.blogContent.val(); }, function (newVal, oldVal) {
                    _this.previewCode(newVal);
                });
            }
            EdittingTools.prototype.newParagraph = function () {
                this.blogContent.val(this.blogContent.val() + "<p class=\"col12 blog-text\">Text Here</p>\n\n\n");
            };
            EdittingTools.prototype.newImage = function () {
                this.blogContent.val(this.blogContent.val() + "<img src=\"/Images/TestImages/2016-02-22-1456172662-1597066-BernieSanders.jpg\" class=\"col4 mobCol6\"/>\n\n\n");
            };
            EdittingTools.prototype.newQuote = function () {
                this.blogContent.val(this.blogContent.val() + "<blog-quote text=\"Enter Text Here\"></blog-quote>\n\n\n\n");
            };
            EdittingTools.prototype.previewCode = function (newVal) {
                this.blogPreview.html('');
                this.blogPreview.append(newVal);
                this.compile(this.blogPreview)(this.scope);
            };
            return EdittingTools;
        })();
        function edittingTools($compile) {
            return {
                templateUrl: '/AppJS/directives/edittingTools/edittingTools.html',
                link: function (scope, element, attrs) {
                    var edittingTools = new EdittingTools(scope, element, $compile);
                }
            };
        }
        communiteaApp.directive('edittingTools', ['$compile', edittingTools]);
    })(Directives = CommuniteaApp.Directives || (CommuniteaApp.Directives = {}));
})(CommuniteaApp || (CommuniteaApp = {}));
//# sourceMappingURL=edittingTools.js.map