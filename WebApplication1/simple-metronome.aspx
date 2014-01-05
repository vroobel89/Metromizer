<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="simple-metronome.aspx.cs" Inherits="WebApplication1.WebForm1" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
    <script src="Javascript/JavaScript.js"></script>
    <script src="http://code.createjs.com/soundjs-0.5.0.min.js"></script>
    
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="Server">

    <div class="content" style="text-align: center">
        <h4>Set number of beats per minute, metronome's operating time and enjoy! </h4>



        <div class="simple-panel">
            <div class="row-two">
                <span>Beats Per Minute:</span>
                <div class="textfield">
                    <asp:TextBox CssClass="clock-field" ID="TextBox1" runat="server"></asp:TextBox>
                </div>
            </div>
            <div class="row-two">
                <input id="Checkbox2" onchange="fun()" type="checkbox" checked="checked" />
                <span>Count Down</span>


            </div>
            <div class="row-two">
                <span>Minutes:</span>
                <div class="textfield">


                    <asp:TextBox ID="minutesfield" CssClass="clock-field" runat="server"></asp:TextBox>
                </div>

            </div>

            <div class="btn-group btn-group-lg button-panel">

                <button type="button" id="PlayButton" onclick="Start()" class="btn btn-default">PLAY</button>
                <button type="button" id="PauseButton" onclick="Pause()" class="btn btn-default">PAUSE</button>
                <button type="button" id="StopButton" onclick="Stop()" class="btn btn-default">STOP</button>

            </div>
            <span id="countdown" class="clock">00:00</span>

        </div>
        <asp:LoginView ID="LoginView1" runat="server" ViewStateMode="Disabled">

            <LoggedInTemplate>

                <div class="save-setting">
                    <span>Setting Name: </span>
                    <asp:TextBox ID="SettingName" runat="server"></asp:TextBox>
                    <asp:Button id="SaveSetting" runat="server" OnClick="SaveTempo"  OnClientClick="if(!check()) return false;" text="Save This Setting" />
                    
                </div>

            </LoggedInTemplate>
        </asp:LoginView>
        

    </div>


</asp:Content>
