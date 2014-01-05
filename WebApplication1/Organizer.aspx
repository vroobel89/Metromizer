<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Organizer.aspx.cs" Inherits="WebApplication1.Organizer" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">

    <script src="Javascript/JavaScript.js"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
      
    <div class="content" id="content" runat="server">
    
    </div>
    
    <asp:Wizard ID="Wizard1" CssClass="tempos-grid" DisplaySideBar="false" runat="server"  OnNextButtonClick="nextButtonClick" ActiveStepIndex="0" OnPreviousButtonClick="previousButtonClick" FinishCompleteButtonText="Play sequence!" StepNextButtonText="Play Sequence!" OnFinishButtonClick="Wizard1_FinishButtonClick1">
        <WizardSteps>
            <asp:WizardStep  ID="WizardStep1" runat="server">
                 <h4>Choose tempos for sequence: </h4>
                 <asp:GridView OnRowDeleting="GridView1_RowDeleting" DataKeyNames="ajdi" ID="GridView1" runat="server"  
                      AutoGenerateColumns="False"
                     CellPadding="10" ForeColor="#333333" GridLines="None" HorizontalAlign="Center" >
        <AlternatingRowStyle BackColor="White" ForeColor="#284775" />
        <Columns>
            <asp:BoundField DataField="ID"  HeaderText="ajdi" Visible="false" AccessibleHeaderText="ajdi" />
            <asp:BoundField DataField="Name" HeaderText="Name" />
            <asp:BoundField DataField="Beats Per Minute" HeaderText="Beats Per Minute" />
            <asp:BoundField DataField="Minutes" HeaderText="Minutes" />
           
           
            
            <asp:TemplateField>
                <ItemTemplate>
                    <asp:CheckBox ID="CheckBox1" runat="server" />
                </ItemTemplate>
            </asp:TemplateField>
            
            <asp:CommandField ShowDeleteButton="True"  />
            
        </Columns>
        <EditRowStyle BackColor="#999999" />
        <FooterStyle BackColor="#5D7B9D" Font-Bold="True" ForeColor="White" />
        <HeaderStyle BackColor="#5D7B9D" Font-Bold="True" ForeColor="White" />
        <PagerStyle BackColor="#284775" ForeColor="White" HorizontalAlign="Center" />
        <RowStyle BackColor="#F7F6F3" ForeColor="#333333" />
        <SelectedRowStyle BackColor="#E2DED6" Font-Bold="True" ForeColor="#333333" />
        <SortedAscendingCellStyle BackColor="#E9E7E2" />
        <SortedAscendingHeaderStyle BackColor="#506C8C" />
        <SortedDescendingCellStyle BackColor="#FFFDF8" />
        <SortedDescendingHeaderStyle BackColor="#6F8DAE" />
        </asp:GridView>



                <asp:ObjectDataSource ID="ObjectDataSource1" runat="server"></asp:ObjectDataSource>


            </asp:WizardStep>
            <asp:WizardStep ID="WizardStep2" runat="server">
                <h4>Order tempos in sequence: </h4>
                <asp:GridView ID="GridView2" OnRowCommand="GridView2_RowCommand" AutoGenerateColumns="false"  runat="server" GridLines="None" CellPadding="10" ForeColor="#333333">
                    <AlternatingRowStyle BackColor="White" ForeColor="#284775" />
                  <Columns>

                      <asp:BoundField DataField="Name" HeaderText="Name" />
                      <asp:BoundField DataField="Beats Per Minute" HeaderText="Beats Per Minute" />
                      <asp:BoundField DataField="Minutes" HeaderText="Minutes" />
                   <asp:TemplateField >
                <ItemTemplate>
                    <asp:LinkButton runat="server" CommandName="buttonup" CommandArgument='<%# Container.DataItemIndex %>'><img width="16" height="16" src="Images/grey-arrow-up.ico"/></asp:LinkButton>
                </ItemTemplate>
            </asp:TemplateField>
            <asp:TemplateField>
                <ItemTemplate>
                    <asp:LinkButton  runat="server" CommandName="buttondown" CommandArgument='<%# Container.DataItemIndex %>'><img width="16" height="16" src="Images/grey-arrow-down.ico" /></asp:LinkButton>
                </ItemTemplate>
            </asp:TemplateField>
                      
                      
                      
                      </Columns>
                    <EditRowStyle BackColor="#999999" />
                    <FooterStyle BackColor="#5D7B9D" Font-Bold="True" ForeColor="White" />
                    <HeaderStyle BackColor="#5D7B9D" Font-Bold="True" ForeColor="White" />
                    <PagerStyle BackColor="#284775" ForeColor="White" HorizontalAlign="Center" />
                    <RowStyle BackColor="#F7F6F3" ForeColor="#333333" />
                    <SelectedRowStyle BackColor="#E2DED6" Font-Bold="True" ForeColor="#333333" />
                    <SortedAscendingCellStyle BackColor="#E9E7E2" />
                    <SortedAscendingHeaderStyle BackColor="#506C8C" />
                    <SortedDescendingCellStyle BackColor="#FFFDF8" />
                    <SortedDescendingHeaderStyle BackColor="#6F8DAE" />
                    </asp:GridView>
            </asp:WizardStep>
        </WizardSteps>
    </asp:Wizard>

    </asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="FeaturedContent" runat="server">
</asp:Content>
