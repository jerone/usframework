<%@ Page Title="Home" Language="C#" MasterPageFile="~/MasterPage.master" AutoEventWireup="true" CodeFile="index.aspx.cs" Inherits="index" %>
<%@ Register TagPrefix="wuc" TagName="sitesearch" Src="~/_sitesearch.ascx" %>
<%@ Register TagPrefix="wuc" TagName="twitter" Src="~/_twitter.ascx" %>

<asp:Content ID="cph_head" ContentPlaceHolderID="cph_head" Runat="Server" />

<asp:Content ID="cph_contentLeft" ContentPlaceHolderID="cph_contentLeft" Runat="Server">
				<h2 id="welcome"><a href="<%=ResolveUrl(Links.INDEX)%>#welcome">Welcome on about:jerone</a></h2>
				<p class="alert">Please note that this site is still under development and that this is just a first draw.</p>
				<p>On this site you will find information <strong><a href="<%=ResolveUrl(Links.about)%>">about</a> me and what I have done</strong>.</p>
				<p>In my <a href="<%=ResolveUrl(Links.portfolio)%>">portfolio</a> you will find some examples of projects I have 
					<strong>successfully</strong> developed for friends and family.</p>
				<p>On the <a href="<%=ResolveUrl(Links.resources)%>">resources</a> page you will find information about projects I have developed and make available. 
					These projects are open source projects publicly accessible. Although these projects are already on my site, 
					I'm behind the scenes still developing. </p>
				<p>At the moment about:jerone involes itself with the main languages that are needed to create any kind of product. 
					The list at the moment consist of:</p>
				<ul>
					<li>HTML (XHTML / DHTML)</li>
					<li>CSS</li>
					<li>JavaScript</li>
					<li>UserScript</li>
					<li>ActionScript</li>
					<li>XML</li>
					<li>XLST</li>
					<li>AJAX (Asynchronous JavaScript and XML)</li>
					<li>jQuery</li>
					<li>ASP.NET</li>
					<li>C#.NET (Win &amp; Web)</li>
					<li>PHP</li>
					<li>SQL</li>
				</ul>
</asp:Content>
						
<asp:Content ID="cph_contentRight" ContentPlaceHolderID="cph_contentRight" runat="server">
				<div class="boxRight clearfix">
					<img src="<%=ResolveUrl(Links.imgLink)%>" alt="links" class="boxRightImage" />
					<h3>Links</h3>
					<ul>
						<li><a href="<%=ResolveUrl(Links.about)%>" title="About">About</a></li>
						<li><a href="<%=ResolveUrl(Links.portfolio)%>" title="Portfolio">Portfolio</a></li>
						<li><a href="<%=ResolveUrl(Links.resources)%>" title="Resources">Resources</a></li>
						<li><a href="<%=ResolveUrl(Links.contact)%>" title="Contact">Contact</a></li>
					</ul>
				</div><!-- end boxRight -->
	<wuc:sitesearch ID="wuc_sitesearch" runat="server" />
	<wuc:twitter ID="wuc_twitter" runat="server" />
</asp:Content>