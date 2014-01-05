<%@ Page Title="Log in" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="WebApplication1.Account.Login" %>
<%@ Register Src="~/Account/OpenAuthProviders.ascx" TagPrefix="uc" TagName="OpenAuthProviders" %>

<asp:Content runat="server" ID="BodyContent" ContentPlaceHolderID="MainContent">
    
    <section id="loginForm">
        
        <asp:Login runat="server" CssClass="login-form" ViewStateMode="Disabled" RenderOuterTable="true">
            <LayoutTemplate>
                <p class="validation-summary">
                    <asp:Literal runat="server" ID="FailureText" />
                </p>
                <fieldset>
                    <legend>Log in Form</legend>
                    <ul>
                        <li>
                            <asp:Label runat="server" AssociatedControlID="UserName">User name</asp:Label>
                            <asp:TextBox runat="server" ID="UserName" />
                            <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ControlToValidate="UserName" CssClass="field-validation-error" ErrorMessage="The user name field is required." />
                            
                            
                        </li>
                        <li>
                            <asp:Label runat="server" AssociatedControlID="Password">Password</asp:Label>
                            <asp:TextBox runat="server" style="margin-right:7px;" ID="Password" TextMode="Password" />
                            <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" ControlToValidate="Password" CssClass="field-validation-error"  ErrorMessage="The password field is required." />
                            
                            
                        </li>
                        <li>
                            <asp:Label ID="Label1"  runat="server"  AssociatedControlID="RememberMe"   >Remember me?</asp:Label>
                            <asp:CheckBox runat="server" ID="RememberMe" style="float:left;" />
                            
                        </li>
                    </ul>
                    <asp:Button style="float:left;" cssClass="login-button" runat="server" CommandName="Login" Text="Log in" />
                </fieldset>
            </LayoutTemplate>
        </asp:Login>
        <p class="register-info">
            
            <asp:HyperLink runat="server" NavigateUrl="~/Register.aspx" ID="RegisterHyperLink" ViewStateMode="Disabled">Register</asp:HyperLink>
            if you don't have an account.
        </p>
    </section>

   
</asp:Content>
