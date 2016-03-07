using System.Web;
using System.Web.Optimization;

namespace consciouscommunitea
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {




            bundles.Add(new ScriptBundle("~/bundles/coreJS").Include(
                        "~/Scripts/Jquery-{version}.min.js",
                        "~/Scripts/angular.min.js",
                        "~/Scripts/angular-route.min.js",
                        "~/Scripts/angular-sanitize.min.js",
                        "~/AppJS/app.js",
                        "~/AppJS/directives/edittingTools/edittingTools.js",
                        "~/AppJS/directives/edittingTools/blogQuote/blogQuote.js",
                        "~/AppJS/directives/ngScopeElement/ngScopeElement.js"
                        ));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                    
                    "~/Content/Site.css",
                    "~/AppJS/directives/edittingTools/edittingTools.css",
                    "~/PageTemplates/Blog/blog.css"
                ));
            

        }
    }
}
