using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace consciouscommunitea.Models
{



    public class Blog
    {



        public string Title
        {
            private set { Title = value; }
            get { return Title; }
        }

        public string SplashURL
        {
            private set { SplashURL = value; }
            get { return SplashURL; }
        }
        public string Content
        {
            private set { Content = value; }
            get { return Content; }
        }

        public Blog(string title, string splashURL, string content)
        {
            this.Title = title;
            this.SplashURL = splashURL;
            this.Content = content;
            


        }
    }

}