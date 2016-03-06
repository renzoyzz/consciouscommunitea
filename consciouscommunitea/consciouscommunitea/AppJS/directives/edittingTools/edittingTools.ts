namespace CommuniteaApp.Directives {

    class EdittingTools {
        private scope
        private compile: ng.ICompileService
        private code: string
        private sce: ng.sanitize.ISanitizeService
        private element: ng.IRootElementService
        private title
        private butParagraph: ng.IRootElementService
        private blogContent: ng.IRootElementService
        private blogPreview: ng.IRootElementService
        

        constructor(scope, element, compile) {

            this.scope = scope;
            this.compile = compile;
            this.blogPreview = this.scope.blogPreview;
            this.element = element;
            this.code = this.scope.code;
            this.code = '';
            this.blogContent = this.scope.blogContent;
            this.butParagraph = this.scope.butParagraph;
           
            this.scope.newParagraph = () => {
                this.newParagraph();
            }

        

            this.scope.$watch(() => { return this.blogContent.val() }, (newVal, oldVal) => {
                console.log(newVal);
                this.previewCode(newVal);
            });

          
        }   

        public newParagraph() {
            this.blogContent.val(this.blogContent.val() + `<p>Text Here</p>\n`);
        }

        public previewCode(newVal) {
            this.blogPreview.html('');
            this.blogPreview.append(newVal);
            this.compile(this.blogPreview)(this.scope);

        }

      


    }


    function edittingTools($compile) {
        return {
            templateUrl: '/AppJS/directives/edittingTools/edittingTools.html',
            link: (scope, element, attrs) => {
                let edittingTools = new EdittingTools(scope, element, $compile);

            }

        }
    }



    communiteaApp.directive('edittingTools', ['$compile', edittingTools])
}