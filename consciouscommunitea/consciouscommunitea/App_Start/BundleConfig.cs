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
                        "~/AppJS/app.js"));


            

        }
    }
}
