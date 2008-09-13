/*//////////////////////////////////////////////////////////////////////////
// ==UserScript===
// @name            aaac_US_options
// @author          Jerone UserScript Productions
// @namespace       http://userscripts.org/users/31497
// @homepage        http://jervw.freehostia.com/artikels/art006/US_options.html
// @description     Part 3 of US_framework
// @description     Adds an iframe window.
// @description     US_options v1.9 Beta
// @copyright       2007 - 2008 Jerone
// @version         v1.9 Beta
// @browser         FF3
// @include         *
// ==/UserScript==
////////////////////////////////////////////////////////////////////////////
// ToC:
// - Copyrights
// - History
// - Todo
// - Note
// - Framework Check
// - Usage Instructions
// - User Settings
// - Default Settings
// - User Script
// - Statistics
////////////////////////////////////////////////////////////////////////////
THIS  SCRIPT  IS  PROVIDED BY THE AUTHOR `AS IS' AND ANY EXPRESS OR IMPLIED
WARRANTIES,  INCLUDING, BUT  NOT  LIMITED  TO, THE  IMPLIED  WARRANTIES  OF
MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.  IN NO
EVENT  SHALL  THE  AUTHOR  BE  LIABLE  FOR ANY DIRECT, INDIRECT, INCIDENTAL,
SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;  LOSS OF USE, DATA, OR PROFITS;
OR BUSINESS INTERRUPTION) HOWEVER  CAUSED  AND  ON  ANY THEORY OF LIABILITY,
WHETHER  IN  CONTRACT, STRICT  LIABILITY, OR  TORT  (INCLUDING NEGLIGENCE OR
OTHERWISE)  ARISING  IN  ANY  WAY  OUT  OF  THE  USE OF THIS SCRIPT, EVEN IF
ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
////////////////////////////////////////////////////////////////////////////
// History:
// - 08-08-2008: initial release [v1 Alpha];
// - 15-08-2008: fixed multiple iframes [v1.1 Beta];
// - 16-08-2008: fixed window position [v1.2 Beta];
// - 17-08-2008: updated open and close with fade [v1.3 Beta];
// - 18-08-2008: added options check [v1.4 Beta];
// - 19-08-2008: fixed weird scrollbar problem [v1.5 Beta];
// - 28-08-2008: fixed conflicts between multiple windows [v1.6 Beta];
// - 29-08-2008: added code to get all scripts data/names [v1.7 Beta];
// - 30-08-2008: temporary disable the current window when new window is opened [v1.8 Beta];
// - 02-09-2008: fixed bug in weird resizing when window was to small [v1.9 Beta];
////////////////////////////////////////////////////////////////////////////
// Todo:
// - custom menu shortcuts;
// - check this working in frameset;
////////////////////////////////////////////////////////////////////////////
// Note:
// - This script does NOT work without my other scripts: 
//   - US_functions => http://userscripts.org/scripts/show/16142
//   - US_language => http://userscripts.org/scripts/show/16143
/*//////////////////////////////////////////////////////////////////////////



//*** FRAMEWORK CHECK ***//
// Nothing to change here!!!
(function(){
var name			= "US_options";	// current script name;
var US_functionsV	= "1.9.4";		// minimum US_functions version;
var US_languageV	= "1.4.2";		// minimum US_language version;
var m1="The following script doesn't exist, is disabled or something went wrong:\n	",m2=name+" only works with a newer version of the following script:\n	",m3="\n\nClick 'OK' to go to the homepage of that script to download the newest version:\n	",l1="http://userscripts.org/scripts/show/16142",l2="http://userscripts.org/scripts/show/16143",l3="http://userscripts.org/scripts/show/31458",l4="http://userscripts.org/scripts/show/16144",USf="US_functions",USl="US_language",USo="US_options",USu="US_update",u="undefined",f=false,t=true,o=null,w=window;if(!(w.US_frameworkOK)){function a(b,c,d){var e=confirm(((d==1)?m1:m2)+b+m3+c);if(e)GM_openInTab(c);if(d==1){w.US_functions=function(){};w.US_language=function(){};w.US_language.localise=function(){};w.US_language.all=function(){};w.US_language.current=function(){};w.US_options=function(){};w.US_update=function(){};w.US_update.all=function(){};w.US_update.names=function(){};}return;}
function g(h,i){var j=k=f,r=/([\d.]+)/i;if(r.test(i)==f)return t;i.match(r);is=RegExp.$1.split(".");h.match(r);hs=RegExp.$1.split(".");for(var x=0;x<Math.max(is.length,hs.length);x++){var hx=hs[x],ix=is[x];if(hx==u||hx==""||hx==o)hx=0;if(ix==u||ix==""||ix==o)ix=0;if(ix<hx&&!k)j=t;if(ix>hx)k=t;}return j;}var fd=ld=od=ud=f;if(typeof US_functionsV!=u){if(!(w.US_functionsOK))a(USf,l1,1);else if(g(US_functionsV,US_functionsOK))a(USf,l1);fd=t;}if(typeof US_languageV!=u){if(!(w.US_languageOK))a(USl,l2,1);else if(g(US_languageV,US_languageOK))a(USl,l2);ld=t;}if(typeof US_optionsV!=u){if(!(w.US_optionsOK))a(USo,l3,1);else if(g(US_optionsV,US_optionsOK))a(USo,l3);od=t;}if(typeof US_updateV!=u){if(!(w.US_updateOK))a(USu,l4,1);else if(g(US_updateV,US_updateOK))a(USu,l4);ud=t;}if(fd&&ld&&od&&ud){w.US_frameworkOK=t;console.log('US_framework correct imported!');}else w.US_frameworkOK=f;}})();



//*** USAGE INSTRUCTIONS ***//
// OPTIONS SCRIPT
// ...
// Add the following code to your script and fill the correct information in, like below:
//  (please note the special characters and there places, like: ,"'(){}:; etc...)
/*\
	options = new US_options({
			   name : "test",											// [String] Settings name;
			content : "<html><head></head><body>content</body></html>",	// [String HTML] Settings content;
			addFade : true,												// [Boolean] (Un-)load fade;
			addTabs : true,												// [Boolean] Settings tabs;
		activeTabNr : 0,												// [Integer] Active tab;
		showAtStart : false,											// [Boolean] Show at start;
		endFunction : function(){execute();},							// [Function] Function executed when all is loaded;
		tabFunction : {0:function(){executeTab0();}}					// [Object {Integer:Function,...}] ({tab:function}) Function executed when stated tab is active (e.g.: executeTab0(); is executed when on tab 0);
		loadPicture	: [20,20,"http://some.picture.gif"]					// [Array [Integer,Integer,String]] ([width,height,url]) Custom loading image;
	});
\*/
////////////////////////////////////////////////////////////////////////////
// ALL OPTIONS SCRIPTS NAMES
// If you want to show all script names that use a options window, use the following code:
// (the word 'options' needs to be the same as above used, but can be anything) 
/*\
	options.names();		// returns array of script names;
\*/
// Note: when adding above code, only the earlier executed scripts are returned. 
//       The code can't check scripts that haven't been executed yet;
//       That's why it's recommended to enclose th code in a setTimeout() function;
////////////////////////////////////////////////////////////////////////////
// ALL OPTIONS SCRIPTS DATA
// If you want to show all script names that use a options window, use the following code:
// (the word 'options' needs to be the same as above used, but can be anything) 
/*\
	options.all();			// returns array of both the scripts variablen and the used variablen;
\*/
// Note: when adding above code, only the earlier executed scripts are returned. 
//       The code can't check scripts that haven't been executed yet;
//       That's why it's recommended to enclose th code in a setTimeout() function;
////////////////////////////////////////////////////////////////////////////



//*** USER SETTINGS ***//
const USOaddFadeOverRide		= null;		// [Boolean] (Un-)load fade;
											// [null] script depended;
const USOaddTabsOverRide		= null;		// [Boolean] Settings tabs;
											// [null] script depended;
const USOactiveTabNrOverRide	= -1;		// [Integer] Active tab;
											// [-1] script depended;
const USOshowAtStartOverRide	= null;		// [Boolean] Show at start;
											// [null] script depended;
const USOendFunctionOverRide	= null;		// [Function] Function executed when all is loaded;
											// [null] script depended;
const USOtabFunctionOverRide	= null;		// [Object {Integer:Function,...}] ({tab:function}) Function executed when stated tab is active;
											// [null] script depended;
const USOloadPictureOverRide	= null;		// [Array [Integer,Integer,String]] ([width,height,url]) Custom loading image;
											// [null] script depended;



//*** DEFAULT SETTINGS ***//
const USOaddFadeDefault = true;
const USOaddTabsDefault = true;
const USOactiveTabNrDefault = 0;
const USOshowAtStartDefault = false;
const USOendFunctionDefault = false;
const USOtabFunctionDefault = false;
const USOloadPictureDefault = [20,20,'data:image/gif;base64,R0lGODlhEgASALMPAKysqpWVk1RUUmJiYIqKiW9vbqCgnomJh35+faGhnnBwb39/fqGhn3FxcYCAgP///yH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAAPACwAAAAAEgASAAAEV/DJSautzt29+toTQTxIiTxNc4kieSqwYh30QRV4cdEWbgUB0GMwmACBGyJRcgxelEWmMxmlMBgWgeCS6CYoWq3FQDY8AIBHeDs2o9FqNuidFlLg9rwkAgAh+QQFAAAPACwBAAEAEAAQAAAEUvDJ+QihmFqbZwjPIR6P42DfF5JLu1ApOCE0gsoUTTFMNzWNR2KY8CmOCoPS4Cs4Cw+lT+KkAACZwQBzvVK0Wmv3IRA8wFsxuWwO+9jm6aTciQAAIfkEBQAADwAsAQABABAAEAAABFHwyflCoJhamydj1fYQBJacSTiS5WS8BnXMB/ZmMwUA3eQ4j92utyguhLwOYokIJntLikCQaTQw0ylFwVVIs4/B4FEoF7BUsZh87qnHPco6EwEAIfkEBQAADwAsAQABABAAEAAABFLwyfkYo5imnfIEwGOMxhMEGAiK5XlSaji5KCxT7yQI3kQQj92u9/sJeZ6D8hBE9pSUwSDjcGCkUspiu4hiH43GA0FGXKeKtGJs7hXehR7m7YkAACH5BAUAAA8ALAEAAQAQABAAAART8Mn5AKCYWpunENX2MAz2feGTrAl1gpMhGyZMydQwdFMQPDodz+cL7jrEn5D38FEajQyBgFFYFZTplFLoFh4Ox+NAPmC6j4V6MTbzEHAEkwLvRAAAIfkEBQAADwAsAQABABAAEAAABFHwyfmEoJham+cY1fYAAPZ94UiW3kmtbJuRVNN0E8M8Sq/giWCiQCzgDEjDg4iTICkORyYQwCyuCwqVSkF4EQ8C4bGtdsFiMdncObgPTYq7EwEAIfkEBQAADwAsAQABABAAEAAABFLwyfnGoJham2dr1fYIAqacSjiS5VS8BcW2boyRlON0EwA8i+CC5/Mhjghi8XHkSXwUAiHDYGCkUkpim6AcvodHIPAwmA2Yr3hMNjvZZOdk3IkAACH5BAUAAA8ALAEAAQAQABAAAARS8Mn5WqOYqq3ydM5TjMUzDNiiLmJ5nhQiI9SLxjQGTwThTQLBo9f7BYOH5MF4fCR/kiAlEMgAABgqlXK9TrUPBuPRxX4fiXSCbPYY3gYo5e2JAAA7'];



//*** FUNCTIONS ***//
window.US_options = function(script){
	if(script){
		if(!script.name || !script.content) return;
		this.name = script.name;
		this.content = script.content;
		
		if(typeof(USOaddFadeOverRide)=="boolean" && USOaddFadeOverRide!=null){this.addFade = USOaddFadeOverRide;}
		else{this.addFade = typeof(script.addFade)=="boolean"?script.addFade:USOaddFadeDefault;}
		
		if(typeof(USOaddTabsOverRide)=="boolean" && USOaddTabsOverRide!=null){this.addTabs = USOaddTabsOverRide;}
		else{this.addTabs = typeof(script.addTabs)=="boolean"?script.addTabs:USOaddTabsDefault;}
		
		if(typeof(USOactiveTabNrOverRide)=="integer" && USOactiveTabNrOverRide!=-1){this.activeTabNr = USOactiveTabNrOverRide;}
		else{this.activeTabNr = typeof(script.activeTabNr)=="integer"?script.activeTabNr:USOactiveTabNrDefault;}
		
		if(typeof(USOshowAtStartOverRide)=="boolean" && USOshowAtStartOverRide!=null){this.showAtStart = USOshowAtStartOverRide;}
		else{this.showAtStart = typeof(script.showAtStart)=="boolean"?script.showAtStart:USOshowAtStartDefault;}
		
		if(typeof(USOendFunctionOverRide)=="function" && USOendFunctionOverRide!=null){this.endFunction = USOendFunctionOverRide;}
		else{this.endFunction = typeof(script.endFunction)=="function"?script.endFunction:USOendFunctionDefault;}
		
		if(typeof(USOtabFunctionOverRide)=="object" && USOtabFunctionOverRide!=null){this.tabFunction = USOtabFunctionOverRide;}
		else{this.tabFunction = typeof(script.tabFunction)=="object"?script.tabFunction:USOtabFunctionDefault;}
		
		if(typeof(USOloadPictureOverRide)=="object" && USOloadPictureOverRide!=null && USOloadPictureOverRide.length==3){this.loadPicture = USOloadPictureOverRide;}
		else{this.loadPicture = (what.type.of(script.loadPicture)=="array" && script.loadPicture.length==3)?script.loadPicture:USOloadPictureDefault;}
		
		this.translate=new US_language({langMod:"browser"});
		
		if(typeof(window.USOnames)=="undefined"){window.USOnames=[];}
		window.USOnames.push(this.name);
		if(typeof(window.USOall)=="undefined"){window.USOall=[];}
		window.USOall.push([script,this]);
		
		this.init();
	}
	else return;
};
US_options.prototype = {
	init: function(){
		this.showSettings();
		this.showMenu();
		this.windowResize();
	},
	
	windowResize: function(){
		var self=this;
		$addEvent(top.window,"resize",function(){
			if($gi("USOloader_"+self.name,top.document)){
				new US_options().sizeCenter($gi("USOloader_"+self.name,top.document),self.loadPicture[0],self.loadPicture[1]);
			}
			if($gi("USOwindow_"+self.name,top.document)){
				new US_options().sizeWindow(self.name);
	}	});	},

	showSettings: function(){
		if(!$gi("USOoverlay_"+this.name,top.document) && !$gi("USOoverlayGray_"+this.name,top.document) && !$gi("USOwindow_"+this.name,top.document)){
			var self=this;
			
			var USOoverlay = $ce("DIV");
			$sa(USOoverlay,"id","USOoverlay_"+this.name);
			$ac(top.document.body,USOoverlay);
			if(this.showAtStart!=true){
				$sa($gi("USOoverlay_"+this.name,top.document),"style","visibility:hidden;display:none;");
			}
			
			var USOoverlayGray = $ce("DIV");
			$sa(USOoverlayGray,"id","USOoverlayGray_"+this.name);
			$sa(USOoverlayGray,"style",$setReturnOpacity((this.addFade?0:90))+"visibility:visible;display:block;background-color:#000;position:fixed;height:100%;width:100%;top:0px;left:0px;z-index:9998");
			$ac($gi("USOoverlay_"+this.name,top.document),USOoverlayGray);
			
			var USOloader = $ce("IMG");
			$sa(USOloader,"id","USOloader_"+this.name);
			$sa(USOloader,"src",this.loadPicture[2]);
			$sa(USOloader,"style",$setReturnOpacity(100)+"visibility:visible;display:block;position:fixed;z-index:9999");
			$ac($gi("USOoverlayGray_"+this.name,top.document),USOloader);
			this.sizeCenter($gi("USOloader_"+this.name,top.document),this.loadPicture[0],this.loadPicture[1]);
			$addEvent(USOoverlay,"dblclick",function(){new US_options().close(self)});
			
			switch($db.nodeName.toUpperCase()){
				case "BODY": default:
					var USOwindow = $ce("IFRAME");
					$sa(USOwindow,"id","USOwindow_"+this.name);
					$sa(USOwindow,"name","USOwindow_"+this.name);
					$sa(USOwindow,"src","about:blank");
					$sa(USOwindow,"style",$setReturnOpacity(100)+"visibility:visible;display:block;position:fixed;z-index:9999");
					$sa(USOwindow,"marginwidth",0);
					$sa(USOwindow,"marginheight",0);
					$sa(USOwindow,"frameborder",0);
					$sa(USOwindow,"vspace",0);
					$sa(USOwindow,"hspace",0);
					$ac($gi("USOoverlay_"+this.name,top.document),USOwindow);	
				break;
				case "FRAMESET":  // need more debugging;
					var originFrameset = $db;
					var newFrameset = $ce("FRAMESET");
					var USOwindowFrame = $ce("FRAME");
					$sa(newFrameset,"rows","100px,*");
					$sa(USOwindowFrame,"id","USOwindow_"+this.name);
					$ac(newFrameset,originFrameset);
					$ac(newFrameset,USOwindowFrame);
					$d.body = newFrameset;
				break;
			}
			
			with(top.document.getElementById("USOwindow_"+this.name).contentDocument){
				write(this.content);
				close();
			}
			
			if(this.addTabs===true){
				this.loadTabs();
			}
			else{
				if($gi("USOtabs",$gi("USOwindow_"+this.name,top.document).contentDocument)){
					$hs($gi("USOtabs",$gi("USOwindow_"+this.name,top.document).contentDocument),0);
			}	}

			new US_options().sizeWindow(this.name);
			
			if(this.showAtStart){
				this.open();
			}
			
			if(this.endFunction){
				window.setTimeout(this.endFunction,1);
	}	}	},
	
	sizeWindow: function(name){
		new US_options().sizeCenter(
			$gi("USOwindow_"+name,top.document),
			Document.$width($gi("USOwindow_"+name,top.document).contentDocument),
			Document.$height($gi("USOwindow_"+name,top.document).contentDocument)
		);
	},
	
	sizeCenter: function(obj,x,y){
		var margin = [10,10];  // [x,y] px;
		
		var docW = Window.$width(false,top.document,top.window);
		var docH = Window.$height(false,top.document,top.window);
	//	unsafeWindow.console.log('test 1: '+docW+"||"+docH);
		
		var USOwidth  = Math.min(docW-(margin[0]*2),x);
		var USOheight = Math.min(docH-(margin[1]*2),y);
		
		var USOtop  = (docH<y)?margin[1]:(docH - USOheight)/2;
		var USOleft = (docW<x)?margin[0]:(docW - USOwidth)/2;

		obj.style.top=USOtop+"px";
		obj.style.left=USOleft+"px";
		obj.style.width=USOwidth+"px";
		obj.style.height=USOheight+"px";
		if(y>USOheight){
			obj.style.left = (USOleft - (Window.$scrollbar.$width(obj.contentDocument,obj.contentWindow))/2) + "px";
			obj.style.width = (USOwidth + Window.$scrollbar.$width(obj.contentDocument,obj.contentWindow)) + "px";
	}	},
	
	close: function(self){
		var what=(self||this);
		if($gi("USOoverlay_"+what.name,top.document) && $gi("USOloader_"+what.name,top.document) && $gi("USOwindow_"+what.name,top.document)){
			if(what.addFade){
				try{
					$opacityFadeOut($gi("USOoverlayGray_"+what.name,top.document),((o=$getStyle($gi("USOoverlayGray_"+what.name,top.document),"opacity")*100) && o>50?o:90),-1,100,10,function(){
						$hs($gi("USOwindow_"+what.name,top.document),0);
						$hs($gi("USOloader_"+what.name,top.document),0);
						$hs($gi("USOoverlay_"+what.name,top.document),0);
					});
				}
				catch(e){
					$hs($gi("USOwindow_"+what.name,top.document),0);
					$hs($gi("USOloader_"+what.name,top.document),0);
					$hs($gi("USOoverlay_"+what.name,top.document),0);
			}	}
			else{
				$hs($gi("USOwindow_"+what.name,top.document),0);
				$hs($gi("USOloader_"+what.name,top.document),0);
				$hs($gi("USOoverlay_"+what.name,top.document),0);
			}
			
			what.display=0;  // closed;
			
			if(window.USOopenTemp && !window.USOopenTemp.name.match(what.name)){
				var temp=window.USOopenTemp;
				window.USOopenTemp=false;
				new US_options().open(temp);
	}	}	},
	
	open: function(self){
		var what=(self||this);
		if($gi("USOoverlay_"+what.name,top.document) && $gi("USOloader_"+what.name,top.document) && $gi("USOwindow_"+what.name,top.document)){
			if(typeof(window.USOopenTemp)=="undefined"){window.USOopenTemp=false;}
			if((alls=$w.USOall) && alls.length>1){
				for(var i=0; i<alls.length; i++){
					if(!alls[i][1].name.match(what.name)){
						if(alls[i][1].display==1){
							new US_options().close(alls[i][1]);
							window.USOopenTemp=alls[i][1];
			}	}	}	}
			if(what.addFade){
				try{
					$hs($gi("USOoverlay_"+what.name,top.document),1);
					$hs($gi("USOloader_"+what.name,top.document),1);
					$hs($gi("USOwindow_"+what.name,top.document),0);
					$opacityFadeIn($gi("USOoverlayGray_"+what.name,top.document),-1,90,100,10,function(){
						$hs($gi("USOwindow_"+what.name,top.document),1);
						$hs($gi("USOloader_"+what.name,top.document),0);
						new US_options().sizeWindow(what.name);
				});	}
				catch(e){
					$hs($gi("USOoverlay_"+what.name,top.document),1);
					$hs($gi("USOwindow_"+what.name,top.document),1);
					$hs($gi("USOloader_"+what.name,top.document),0);
					new US_options().sizeWindow(what.name);
			}	}
			else{
				$hs($gi("USOoverlay_"+what.name,top.document),1);
				$hs($gi("USOwindow_"+what.name,top.document),1);
				$hs($gi("USOloader_"+what.name,top.document),0);
				new US_options().sizeWindow(what.name);
			}
			what.display=1;  // opened;
	}	},
	
	toggle: function(self){
		var what=(self||this);
		if($gi("USOoverlay_"+what.name,top.document)){
			if($hs($gi("USOoverlay_"+what.name,top.document),0,true)){
				this.open(what);
			}
			else{
				this.close(what);
	}	}	},
	
	/* tabs */
	currentTab: function(){return this.CurActTab;},
	loadTabs: function(){
		if(!$gi("USOtabs",$gi("USOwindow_"+this.name,top.document).contentDocument) || !$gi("USOfields",$gi("USOwindow_"+this.name,top.document).contentDocument)){return;};
		this.tabs=[];
		this.fields=[];
		var self=this;

		$hs($gi("USOtabs",$gi("USOwindow_"+this.name,top.document).contentDocument),1,"",true);
		
		var allFields=$gi("USOfields",$gi("USOwindow_"+this.name,top.document).contentDocument).getElementsByTagName('fieldset');
		for(var i=0; i<allFields.length; i++){
			if(allFields[i].id.match(/USOfield\d+/)){
				this.tabs.push("USOtab"+this.tabs.length);
				this.fields.push(allFields[i]);
		}	}
		
		this.CurActTab=(this.activeTabNr&&this.activeTabNr<this.tabs.length)?this.activeTabNr:USOactiveTabNrDefault;
		
		for(var i=0; i<this.tabs.length; i++){
			if(i!=this.CurActTab)$hs(this.fields[i],0);
			$gi("USOtabs",$gi("USOwindow_"+this.name,top.document).contentDocument).innerHTML+='<a href="javascript:void(0);" tabindex="'+(i+1)+'" class="USOtab'+(i==this.CurActTab?" USOtabActive":"")+'" id="'+this.tabs[i]+'">'+this.fields[i].firstChild.innerHTML+'</a>';
			// no tab-focus without href and tabindex; href=# loads new page into iframe, solution is javascript-protocol;
		}
		for(var i=0; i<this.tabs.length; i++){
			eval('$addEvent($gi("'+this.tabs[i]+'",$gi("USOwindow_"+self.name,top.document).contentDocument),"click",function(){new US_options().switchTabs(self,this); return false;})');  // doesn't work in same loop above;
		}
		
		if(this.tabFunction){
			for(var i in this.tabFunction){
				if(i==this.CurActTab){
					this.tabFunction[i]();
	}	}	}	},
	
	switchTabs: function(self,obj){
		if(!$gi("USOtabs",$gi("USOwindow_"+self.name,top.document).contentDocument) || !$gi("USOfields",$gi("USOwindow_"+self.name,top.document).contentDocument)){return;};
		for(var i=0; i<self.tabs.length; i++){
			$hs(self.fields[i],0);
			$gi(self.tabs[i],$gi("USOwindow_"+self.name,top.document).contentDocument).className="USOtab";
		}
		self.CurActTab=Number(obj.id.match(/\d+/g));
		$hs(self.fields[self.CurActTab],1);
		$gi(self.tabs[self.CurActTab],$gi("USOwindow_"+self.name,top.document).contentDocument).className="USOtab USOtabActive";

		if(self.tabFunction){
			for(var i in self.tabFunction){
				if(i==self.CurActTab){
					self.tabFunction[i]();
		}	}	}

		new US_options().sizeWindow(self.name);
	},
	
	showMenu: function(){
		var self=this;
		US_registerMenuCommand(this.name+" "+this.translate.localise(['common','settings']),function(){new US_options().toggle(self)},"l","shift","l");
	},
	
	names: function(){
		return $w.USOnames;
	},
	all: function(){
		return $w.USOall;
	}
};



//*** STATISTICS ***//
window.US_optionsOK="v1.9 Beta";
console.log('US_options ' + US_optionsOK + ' correct imported!');
// Words: 1.444;
// Characters (no spaces): 19.234;
// Characters (with spaces): 21.453;
// Lines: 453;