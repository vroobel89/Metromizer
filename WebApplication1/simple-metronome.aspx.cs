using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.Entity;
using System.Data;

namespace WebApplication1
{
    public partial class WebForm1 : System.Web.UI.Page
    {
        
        protected void Page_Load(object sender, EventArgs e)
        {
         
          //  LoginView1.
            
        }

        public void SaveTempo(object sender, EventArgs e)
        {


            try
            {
                using (MetromizerDataEntities context = new MetromizerDataEntities())
                {
                       
                    tempos tempo = new tempos();
                    TextBox namebox = (TextBox)LoginView1.FindControl("SettingName");
                    string name = namebox.Text;
                    int bmp = int.Parse(TextBox1.Text);
                    int minutes = int.Parse(minutesfield.Text);

                    tempo.name = name;
                    tempo.bpm = bmp;
                    tempo.timeout = minutes;
                    tempo.user = User.Identity.Name;

                    context.tempos.Add(tempo);
                    context.SaveChanges();
                }
            }
            catch
            {
                Session.Add("message", "Opps, sorry ! Operation didn't succed...");
                Response.Redirect("~/result.aspx");
            }
            finally
            {
                Session.Add("message", "Operation was succed !");
                Response.Redirect("~/result.aspx");
            }
        }
    }
}