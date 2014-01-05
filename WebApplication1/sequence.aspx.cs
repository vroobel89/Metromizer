using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
namespace WebApplication1
{
    public partial class WebForm3 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (User.Identity.IsAuthenticated == false)
            {
                Response.Redirect("~/Login.aspx");
                return;
            }
            
            
            DataTable dt = (DataTable)Session["data"];

           // HiddenField hf = new HiddenField();
          //  hf.ID = "hf1";
          //  hf.Value = "dupsko ukryte";
          //  content.Controls.Add(hf); 
         //   DataTable dt = new DataTable();
          //  dt.Columns.Add("tempo", typeof(int));
          //  dt.Columns.Add("time", typeof(int));
          //  dt.Rows.Add(120, 5);
           // dt.Rows.Add(190, 1);

            for (int x = 0; x < dt.Rows.Count ; x++)
            {
                string y = x.ToString();
                Page.ClientScript.RegisterHiddenField("N" + y, dt.Rows[x]["Name"].ToString());
                Page.ClientScript.RegisterHiddenField("B" + y, dt.Rows[x]["Beats Per Minute"].ToString());
                Page.ClientScript.RegisterHiddenField("M" + y, dt.Rows[x]["Minutes"].ToString());


            }

            Page.ClientScript.RegisterHiddenField("count", dt.Rows.Count.ToString());
            

            
           
          
        }
    }
}