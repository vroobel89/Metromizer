<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="sequence.aspx.cs" Inherits="WebApplication1.WebForm3" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">

   
     
    
   <script src="Javascript/JavaScript2.js"></script>
    

</asp:Content>

<asp:Content ID="Content2"  ContentPlaceHolderID="MainContent" runat="server">
  
       <div id="content" class="content" style="text-align: center" runat="server">
          <h4 id="tempoName" runat="server">nazwa ćwiczenia </h4>



        <div class="simple-panel">
            <div class="row-two">
                <span>Beats Per Minute:</span>
                <div class="textfield">
                    <asp:Label ID="Label1" runat="server" Text="Label" Font-Bold="True"></asp:Label>
                </div>
            </div>
           
            

            <div class="btn-group btn-group-lg button-panel">

                <button type="button" id="PlayButton" onclick="Start()" class="btn btn-default">PLAY</button>
                <button type="button" id="PauseButton" onclick="Pause()" class="btn btn-default">PAUSE</button>
                <button type="button" id="StopButton" onclick="Stop()" class="btn btn-default">STOP</button>

            </div>
            <span id="countdown" class="clock">00:00</span>

        </div>


         </div>

     
   
    <script>
        set();

    </script>
    
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="FeaturedContent" runat="server">
</asp:Content>
