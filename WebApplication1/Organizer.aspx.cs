using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.Profile;
using System.Data.Entity;
using System.Data;

namespace WebApplication1
{
    public partial class Organizer : System.Web.UI.Page
    {
        DataTable dt;
        DataTable dt2;
        protected void Page_Load(object sender, EventArgs e)
        {
            if (User.Identity.IsAuthenticated == false)
            {
                Response.Redirect("~/Login.aspx");
                return;
            }
            
            
            if (!IsPostBack)
            {
                using (MetromizerDataEntities context = new MetromizerDataEntities())
                {
                    var  result = from t in context.tempos where t.user == User.Identity.Name select t;

                    if (result.Count() == 0)
                    {
                        Label lb = new Label();
                        lb.Text = "You don't have any saved tempos at your collecion! You can do this by using ";
                        HyperLink hl = new HyperLink();
                        hl.Text = "Simple Metronome";
                        hl.NavigateUrl = "~/simple-metronome.aspx";
                        content.Controls.Add(lb);
                        content.Controls.Add(hl);
                        Wizard1.Visible = false;
                        return;
                    }
                    
                    dt = new DataTable();

                    dt.Columns.Add("ajdi", typeof(int)); 
                    dt.Columns.Add("Name", typeof(string));
                    dt.Columns.Add("Beats Per Minute", typeof(int));
                    dt.Columns.Add("Minutes", typeof(string));
                    
                    foreach (var item in result)
                        dt.Rows.Add(item.ID, item.name, item.bpm, item.timeout);

                    GridView1.DataSource = dt;
                    GridView1.DataBind();
                    ViewState["template"] = dt.Clone();
                }
            }
        }

      protected void Button1_Click(object sender, EventArgs e)
        {

            
            /* foreach (GridViewRow row in GridView1.Rows)
            {
                CheckBox cb = (CheckBox)row.FindControl("CheckBox1");
                if (cb.Checked)
                {
                    Label1.Text += row.Cells[0].Text.ToString();
                    
                }
            } */

        }

        protected void GridView1_SelectedIndexChanged(object sender, EventArgs e)
        {

        }

        protected void button_up_Click(object sender, EventArgs e)
        {

           
              
              DataTable dtold = new DataTable();
              DataTable dtnew = new DataTable();
              GridViewRow rowUnder;
              GridViewRow rowOver;
            


              int index = GridView1.SelectedIndex;
              if (index == -1)
                  return;

            


              if (index == 0)
              {
                  ScriptManager.RegisterClientScriptBlock(this.Page, typeof(UpdatePanel), Guid.NewGuid().ToString(), "window.alert('You cannot move the record up!')", true);
                  return;
              }
              else
              {
                  dtold = (DataTable)ViewState["Template"];//dt is the DataTable I mentioned above
                 // int value = Convert.ToInt32(dt.Rows[index]["SeqNbr"].ToString());
                  rowUnder = GridView1.SelectedRow;
                  rowOver = GridView1.Rows[index - 1];
                  //rowOver.RowState = DataControlRowState.Selected;
                //  rowUnder.RowState = DataControlRowState.Normal;

                  GridView1.Rows[index - 1].Cells[0].Text = rowUnder.Cells[0].Text;
                  GridView1.Rows[index - 1].Cells[1].Text = rowUnder.Cells[1].Text;
                  GridView1.Rows[index - 1].Cells[2].Text = rowUnder.Cells[2].Text;


                  GridView1.Rows[index].Cells[0].Text = "CIUL";
                  GridView1.Rows[index].Cells[1].Text = rowOver.Cells[1].Text;
                  GridView1.Rows[index].Cells[2].Text = rowOver.Cells[2].Text;

                
            
              }

       }

         protected void GridView2_RowCommand(object sender, GridViewCommandEventArgs e)
        {
            if (e.CommandName == "buttonup")
            {
                int index = Convert.ToInt32(e.CommandArgument.ToString());

                if (index == 0)
                {
                    ScriptManager.RegisterClientScriptBlock(this.Page, typeof(UpdatePanel), Guid.NewGuid().ToString(), "window.alert('You cannot move the record up!')", true);
                    return;
                }
                else
                {
                   GridViewRow rowUnder = GridView2.Rows[index];
                   GridViewRow rowOver = GridView2.Rows[index - 1];

                    string[] row = new string[]{rowOver.Cells[0].Text, rowOver.Cells[1].Text, rowOver.Cells[2].Text};
                  
                    rowOver.Cells[0].Text = rowUnder.Cells[0].Text;
                    rowOver.Cells[1].Text = rowUnder.Cells[1].Text;
                    rowOver.Cells[2].Text = rowUnder.Cells[2].Text;

                    rowUnder.Cells[0].Text = row[0];
                    rowUnder.Cells[1].Text = row[1];
                    rowUnder.Cells[2].Text = row[2];
                } 
            }
            if (e.CommandName == "buttondown")
            {
                int index = Convert.ToInt32(e.CommandArgument.ToString());

                if (index == GridView2.Rows.Count - 1)
                {
                    ScriptManager.RegisterClientScriptBlock(this.Page, typeof(UpdatePanel), Guid.NewGuid().ToString(), "window.alert('You cannot move the record down!')", true);
                    return;
                }
                else
                {
                    GridViewRow rowOver = GridView2.Rows[index];
                    GridViewRow rowUnder = GridView2.Rows[index + 1];
                   

                    string[] row = new string[] { rowOver.Cells[0].Text, rowOver.Cells[1].Text, rowOver.Cells[2].Text };

                    rowOver.Cells[0].Text = rowUnder.Cells[0].Text;
                    rowOver.Cells[1].Text = rowUnder.Cells[1].Text;
                    rowOver.Cells[2].Text = rowUnder.Cells[2].Text;

                    rowUnder.Cells[0].Text = row[0];
                    rowUnder.Cells[1].Text = row[1];
                    rowUnder.Cells[2].Text = row[2];
                } 
            }
             
            
           
            
        }

        

         protected void nextButtonClick(object sender, WizardNavigationEventArgs e)
         {

              dt2 = new DataTable();
             
             dt2.Columns.Add("Name", typeof(string));
             dt2.Columns.Add("Beats Per Minute", typeof(int));
             dt2.Columns.Add("Minutes", typeof(string));
             
             dt2.Clear();
              foreach (GridViewRow row in GridView1.Rows)
            {
                CheckBox cb = (CheckBox)row.FindControl("CheckBox1");
                if (cb.Checked)
                {
                    dt2.Rows.Add(HttpUtility.HtmlDecode( row.Cells[1].Text), row.Cells[2].Text, row.Cells[3].Text);
                }
            }

              if (dt2.Rows.Count == 0)
              {
                  Response.Redirect("~/Organizer.aspx");
                  return;
                  
                 
                  
              }

              GridView2.DataSource = dt2;
              GridView2.DataBind(); 
          

         }

         protected void previousButtonClick(object sender, WizardNavigationEventArgs e)
         {
             
         }

         protected void GridView1_RowDeleting(object sender, GridViewDeleteEventArgs e)
         {
             
             
            
             
             
             
             int ID = Convert.ToInt32(GridView1.DataKeys[e.RowIndex].Values[0]);

             using (MetromizerDataEntities context = new MetromizerDataEntities())
             {
                 tempos tempo = context.tempos.Find(ID);
                 context.tempos.Remove(tempo);
                 
                 context.SaveChanges();
                 Response.Redirect("~/Organizer.aspx");
                 
             }
         }

         protected void Wizard1_FinishButtonClick1(object sender, WizardNavigationEventArgs e)
         {
             dt = new DataTable();
             
             dt.Columns.Add("Name", typeof(string));
             dt.Columns.Add("Beats Per Minute", typeof(string));
             dt.Columns.Add("Minutes", typeof(string));

            // DataTable dt = (DataTable)GridView2.DataSource;
             foreach (GridViewRow row in GridView2.Rows)
             {
                 dt.Rows.Add(row.Cells[0].Text, row.Cells[1].Text, row.Cells[2].Text);
             }

             Session["data"] = dt;
             
                    Response.Redirect("~/sequence.aspx");
         } 

       

      } 
   } 


