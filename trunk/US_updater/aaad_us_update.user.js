
// !!!!!!!!! change overrides to default !!!!!!!!!!
// !!!!!!!!! don't forget framework update check below !!!!!!!!!!

/*//////////////////////////////////////////////////////////////////////////
// ==UserScript===
// @name            aaad_US_update
// @author          Jerone UserScript Productions
// @namespace       http://userscripts.org/users/31497
// @homepage        http://jervw.freehostia.com/artikels/art006/US_update.html
// @description     Part 4 of US_framework
// @description     Checks for new script versions.
// @description     US_update v1.6.4 Beta
// @copyright       2007 - 2008 Jerone
// @version         v1.6.4 Beta
// @browser         FF2
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
// - 02-05-2008: initial release [v1.0 Alpha];
// - 03-05-2008: cleaned up code, added framework check, fixed updating install count [v1.1 Beta];
// - 04-05-2008: cleaned up code, added instructions, added option for only userscripts.org script number [v1.2 Beta];
// - 05-05-2008: fixed bug in not available US_language [v1.3 Beta];
// - 18-05-2008: update to latest US_language version [v1.3.1 Beta];
// - 19-05-2008: fixed bug with wrong update url [v1.3.2 Beta];
// - 30-05-2008: fixed framework check [v1.4 Beta];
// - 02-06-2008: added custom loader [v1.5 Beta];
// - 02-06-2008: fixed bug for double run of USU.loader when o.readyState==1 [v1.5.1 Beta];
// - 02-06-2008: cleaned up init and added more overrides [v1.5.2 Beta];
// - 03-06-2008: cleaned up code and changed custom loader for more use [v1.5.3 Beta];
// - 03-06-2008: added functions to return all data and script names [v1.6 Beta];
// - 08-08-2008: cleaned up code [v1.6.1 Beta];
// - 10-08-2008: updated minor function [v1.6.2 Beta];
// - 16-08-2008: updated to latest US_functions version and added real live US_framework versions [v1.6.3 Beta];
// - 19-08-2008: minor changes and updated to latest US_framework versions [v1.6.4 Beta];
////////////////////////////////////////////////////////////////////////////
// Todo:
// - exclude checks from (i)frames;
// - 2 the same GM_xmlhttpRequest URL's don't work;
// - The about:config preference: network.http.max-persistent-connections-per-server limits the number of connections to 2 by default;
// - option to check manual;
// - add some script addon;
// - allow message with update;
////////////////////////////////////////////////////////////////////////////
// Note:
// - This script does NOT work without my other scripts: 
//   - US_functions => http://userscripts.org/scripts/show/16142
//   - US_language => http://userscripts.org/scripts/show/16143
//   - US_options => http://userscripts.org/scripts/show/31458
/*//////////////////////////////////////////////////////////////////////////



//*** FRAMEWORK CHECK ***//
// Nothing to change here!!!
(function(){
var name			= "US_update";	// current script name;
var US_functionsV	= "1.9.4";		// minimum US_functions version;
var US_languageV	= "1.4.2";		// minimum US_language version;
var US_optionsV		= "1.9";		// minimum US_options version;
var m1="The following script doesn't exist, is disabled or something went wrong:\n	",m2=name+" only works with a newer version of the following script:\n	",m3="\n\nClick 'OK' to go to the homepage of that script to download the newest version:\n	",l1="http://userscripts.org/scripts/show/16142",l2="http://userscripts.org/scripts/show/16143",l3="http://userscripts.org/scripts/show/31458",l4="http://userscripts.org/scripts/show/16144",USf="US_functions",USl="US_language",USo="US_options",USu="US_update",u="undefined",f=false,t=true,o=null,w=window;if(!(w.US_frameworkOK)){function a(b,c,d){var e=confirm(((d==1)?m1:m2)+b+m3+c);if(e)GM_openInTab(c);if(d==1){w.US_functions=function(){};w.US_language=function(){};w.US_language.localise=function(){};w.US_language.all=function(){};w.US_language.current=function(){};w.US_options=function(){};w.US_update=function(){};w.US_update.all=function(){};w.US_update.names=function(){};}return;}
function g(h,i){var j=k=f,r=/([\d.]+)/i;if(r.test(i)==f)return t;i.match(r);is=RegExp.$1.split(".");h.match(r);hs=RegExp.$1.split(".");for(var x=0;x<Math.max(is.length,hs.length);x++){var hx=hs[x],ix=is[x];if(hx==u||hx==""||hx==o)hx=0;if(ix==u||ix==""||ix==o)ix=0;if(ix<hx&&!k)j=t;if(ix>hx)k=t;}return j;}var fd=ld=od=ud=f;if(typeof US_functionsV!=u){if(!(w.US_functionsOK))a(USf,l1,1);else if(g(US_functionsV,US_functionsOK))a(USf,l1);fd=t;}if(typeof US_languageV!=u){if(!(w.US_languageOK))a(USl,l2,1);else if(g(US_languageV,US_languageOK))a(USl,l2);ld=t;}if(typeof US_optionsV!=u){if(!(w.US_optionsOK))a(USo,l3,1);else if(g(US_optionsV,US_optionsOK))a(USo,l3);od=t;}if(typeof US_updateV!=u){if(!(w.US_updateOK))a(USu,l4,1);else if(g(US_updateV,US_updateOK))a(USu,l4);ud=t;}if(fd&&ld&&od&&ud){w.US_frameworkOK=t;console.log('US_framework correct imported!');}else w.US_frameworkOK=f;}})();



//*** USAGE INSTRUCTIONS ***//
// UPDATE SCRIPT
// This script compares the current version to the new version which is stored somewhere on the web.
// When a new version is available it shows a message if you want to update and opens a link if you approve.
// This script also includes a anti-DoS attack by avoiding a flood of dialogs, 
//  caused by multiple pages open or when you visited the site to update to the new version.
// Add the following code to your script and fill the correct information in, like below:
//  (please note the special characters and there places, like: ,"'(){}:; etc...)
/*\
	new US_update({
		title:			"This is just a test!!!",			// [String] UserScript name;
		check4Update:	true,								// [Boolean] check for updates;
		updateTime:		1*60*60*1000,						// [Integer MILLISECONDS] time-interval between update check;
		language:		"en",								// [String LANGUAGE SHORT/"browser"] language;
		thisVersion:	"v2.0.3 Beta",						// [String "Integer(.Integer(.Integer(.etc...)))"] this scripts version (all extra content will be removed);
		versionUrl:		12345,								// [Number/String URL] userscripts.org script number or url were new version number is stored;
		updateUrl:		"http://some.site.com",				// [Number/String URL] userscripts.org script number or url to visited for new update;
		addon:{												// [Object] some optional extra addons (optional):
			headers: 		{"User-Agent":"Mozilla/5.0"},		// [Object] use specific HTTP headers;
			mimeType:		"text/html; charset=ISO-8859-1",	// [String] use specific MimeType;
			showLog: 		true,								// [Boolean] show log;
			showLoader:		true,								// [Boolean] show loader overlay;
			customLoader:	function(o,USU){}					// [Function] override normal loader ("o" and "USU" are given variable you can use);
		}															// o	[Object] contains onreadystatechange response;
	});																// USU	[Object] contains all scripts data;
\*/
////////////////////////////////////////////////////////////////////////////
// ALL UPDATE SCRIPTS NAMES
// If you want to show all script names that have checked for an update use the following code:
/*\
	new US_update().names();								// returns array of script names;
\*/
// Note: when adding above code, only the earlier executed scripts are returned. 
//       The code can't check scripts that haven't been executed yet;
//       That's why it's recommended to enclose th code in a setTimeout() function;
////////////////////////////////////////////////////////////////////////////
// ALL UPDATE SCRIPTS DATA
// If you want to show all scripts data that have checked for an update use the following code:
/*\
	new US_update().all();									// returns array of both the scripts variablen and the used variablen;
\*/
// Note: when adding above code, only the earlier executed scripts are returned. 
//       The code can't check scripts that haven't been executed yet;
//       That's why it's recommended to enclose th code in a setTimeout() function;
////////////////////////////////////////////////////////////////////////////



//*** USER SETTINGS ***//
// All settings made here will override the settings made in the userscripts itself (OPTIONAL)!
const USUtitleOverRide			= "";		// [String] UserScript name;
											// [""] script depended;
const USUcheck4UpdateOverRide	= null;		// [Boolean] check for updates;
											// [null] script depended;
const USUupdateTimeOverRide		= 0; 		// [Integer MILLISECONDS] time interval between update checks;
											// [0] script depended;
const USUDoSOverRide			= 0;		// [Integer MILLISECONDS] anti-DoS time;
											// [0] script depended;
const USUlanguageOverRide		= "";		// [String LANGUAGE SHORT or "navigator"] language;
											// [""] script depended;
const USUheadersOverRide		= null;		// [object] use specific HTTP headers;
											// [null] script depended;
const USUmimeTypeOverRide		= "";		// [String] use specific MimeType;
											// [""] script depended;
const USUshowLogOverRide		= null;		// [Boolean] show log;
											// [null] script depended;
const USUshowLoaderOverRide		= null;		// [Boolean] show loader overlay;
											// [null] script depended;
const USUcustomLoaderOverRide	= null;		// [function] override normal loader;
											// [null] script depended;



//*** DEFAULT SETTINGS ***//
const USUtitleDefault = "this script";
const USUcheck4UpdateDefault = true;
const USUupdateTimeDefault = 1*60*60*1000;  // => 1 hour update interval;
const USUDoSDefault = 2*60*1000;  // => two minutes anti-DoS;
const USUlanguageDefault = "en";
const USUheadersDefault = new Object();
const USUmimeTypeDefault = new String();
const USUshowLogDefault = true;
const USUshowLoaderDefault = true;
const USUcustomLoaderDefault = false;



//*** USER SCRIPT ***//
window.US_update = function(script){
	if(script){this.init(script);}
};
US_update.prototype = {
	init: function(script){
		if(typeof(USUcheck4UpdateOverRide)!="undefined" && typeof(USUcheck4UpdateOverRide)=='boolean' && USUcheck4UpdateOverRide!=null){
			USUcheck4Update = USUcheck4UpdateOverRide;
		}else{USUcheck4Update = typeof(script.check4Update)=='boolean'?script.check4Update:USUcheck4UpdateDefault;}
		if(USUcheck4Update===true){
			// title
			if(typeof(USUtitleOverRide)!="undefined" && typeof(USUtitleOverRide)=='string' && USUtitleOverRide!=0){
				USUtitle = USUtitleOverRide;
			}else{USUtitle = typeof(script.title)=='string'?script.title:USUtitleDefault;}
			// updateTime
			if(typeof(USUupdateTimeOverRide)!="undefined" && typeof(USUupdateTimeOverRide)=='number' && USUupdateTimeOverRide!=0){
				USUupdateTime = USUupdateTimeOverRide;
			}else{USUupdateTime = typeof(script.updateTime)=='number'?script.updateTime:USUupdateTimeDefault;}
			// DoS
			if(typeof(USUDoSOverRide)!="undefined" && typeof(USUDoSOverRide)=='number' && USUDoSOverRide!=0){
				USUDoS = USUDoSOverRide;
			}else{USUDoS = USUDoSDefault;}
			// language
			if(typeof(USUlanguageOverRide)!="undefined" && typeof(USUlanguageOverRide)=='string' && USUlanguageOverRide!=""){
				USUlanguage = USUlanguageOverRide;
			}else{USUlanguage = typeof(script.language)=='string'?script.language:USUlanguageDefault;}
			
			// versionUrl
			if(typeof(script.versionUrl)=='number'){
				script.versionUrl = "http:\/\/userscripts.org\/scripts\/review\/"+script.versionUrl+"?format=txt";
			}
			// updateUrl
			if(typeof(script.updateUrl)=='number'){
				script.updateUrl = "http:\/\/userscripts.org\/scripts\/show\/"+script.updateUrl;
			}

			
			if(typeof(script.addon)=="undefined"){script.addon=[];}
				// headers
				if(typeof(USUheadersOverRide)!="undefined" && typeof(USUheadersOverRide)=='object' && USUheadersOverRide!=null){
					USUheaders = USUheadersOverRide;
				}else{USUheaders = typeof(script.addon.headers)=='object'?script.addon.headers:USUheadersDefault;}
				// mimeType
				if(typeof(USUmimeTypeOverRide)!="undefined" && typeof(USUmimeTypeOverRide)=='string' && USUmimeTypeOverRide!=""){
					USUmimeType = USUmimeTypeOverRide;
				}else{USUmimeType = typeof(script.addon.mimeType)=='string'?script.addon.mimeType:USUmimeTypeDefault;}
				// showLog
				if(typeof(USUshowLogOverRide)!="undefined" && typeof(USUshowLogOverRide)=='boolean' && USUshowLogOverRide!=null){
					USUshowLog = USUshowLogOverRide;
				}else{USUshowLog = typeof(script.addon.showLog)=='boolean'?script.addon.showLog:USUshowLogDefault;}
				// showLoader
				if(typeof(USUshowLoaderOverRide)!="undefined" && typeof(USUshowLoaderOverRide)=='boolean' && USUshowLoaderOverRide!=null){
					USUshowLoader = USUshowLoaderOverRide;
				}else{USUshowLoader = typeof(script.addon.showLoader)=='boolean'?script.addon.showLoader:USUshowLoaderDefault;}
				// customLoader
				if(typeof(USUcustomLoaderOverRide)!="undefined" && typeof(USUcustomLoaderOverRide)=='function' && USUcustomLoaderOverRide!=null){
					USUcustomLoader = USUcustomLoaderOverRide;
				}else{USUcustomLoader = typeof(script.addon.customLoader)=='function'?script.addon.customLoader:USUcustomLoaderDefault;}
			
			if((!USUtitle.toString() && USUtitle!="") || (!script.thisVersion.toString() && script.thisVersion!="") 
					|| (!script.updateUrl.toString() && script.updateUrl!="") || (!script.versionUrl.toString() && script.versionUrl!="") 
					|| (!USUheaders.toString() && USUheaders!="") || (!USUmimeType.toString() && USUmimeType!="") || (!USUshowLog.toString() && USUshowLog!="") 
					|| (!USUshowLoader.toString() && USUshowLoader!="") || (!USUcustomLoader.toString() && USUcustomLoader!="")){
				$alert('c',3,'USU0','Something missing here, so the script will be stopped.\nPlease re-check your settings.');
				return;
			}
			
			this.translate=new US_language({langMod:USUlanguage});
			
			this.updater({
				title:		 	USUtitle,
				check4Update:	USUcheck4Update,
				updateTime:		USUupdateTime,
				language:		USUlanguage,
				thisVersion: 	script.thisVersion,
				versionUrl:	 	script.versionUrl,
				updateUrl:	 	script.updateUrl,
				addon:{
					headers: 		USUheaders,
					mimeType: 		USUmimeType,
					showLog: 		USUshowLog,
					showLoader:		USUshowLoader,
					customLoader:	USUcustomLoader
				}
			});
		
			if(typeof(window.USUnames)=="undefined"){window.USUnames=[];}
			window.USUnames.push(USUtitle);
			if(typeof(window.USUscripts)=="undefined"){window.USUscripts=[];}
			window.USUscripts.push([script,this]);
		}
	},
	updater: function(script){
		var USU = this;
		var USUbeenHere=false;  // fix for double run of USU.loader when o.readyState==1;
		
		USU.loadingImage='data:image/gif;base64,R0lGODlhEgASALMPAKysqpWVk1RUUmJiYIqKiW9vbqCgnomJh35+faGhnnBwb39/fqGhn3FxcYCAgP///yH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAAPACwAAAAAEgASAAAEV/DJSautzt29+toTQTxIiTxNc4kieSqwYh30QRV4cdEWbgUB0GMwmACBGyJRcgxelEWmMxmlMBgWgeCS6CYoWq3FQDY8AIBHeDs2o9FqNuidFlLg9rwkAgAh+QQFAAAPACwBAAEAEAAQAAAEUvDJ+QihmFqbZwjPIR6P42DfF5JLu1ApOCE0gsoUTTFMNzWNR2KY8CmOCoPS4Cs4Cw+lT+KkAACZwQBzvVK0Wmv3IRA8wFsxuWwO+9jm6aTciQAAIfkEBQAADwAsAQABABAAEAAABFHwyflCoJhamydj1fYQBJacSTiS5WS8BnXMB/ZmMwUA3eQ4j92utyguhLwOYokIJntLikCQaTQw0ylFwVVIs4/B4FEoF7BUsZh87qnHPco6EwEAIfkEBQAADwAsAQABABAAEAAABFLwyfkYo5imnfIEwGOMxhMEGAiK5XlSaji5KCxT7yQI3kQQj92u9/sJeZ6D8hBE9pSUwSDjcGCkUspiu4hiH43GA0FGXKeKtGJs7hXehR7m7YkAACH5BAUAAA8ALAEAAQAQABAAAART8Mn5AKCYWpunENX2MAz2feGTrAl1gpMhGyZMydQwdFMQPDodz+cL7jrEn5D38FEajQyBgFFYFZTplFLoFh4Ox+NAPmC6j4V6MTbzEHAEkwLvRAAAIfkEBQAADwAsAQABABAAEAAABFHwyfmEoJham+cY1fYAAPZ94UiW3kmtbJuRVNN0E8M8Sq/giWCiQCzgDEjDg4iTICkORyYQwCyuCwqVSkF4EQ8C4bGtdsFiMdncObgPTYq7EwEAIfkEBQAADwAsAQABABAAEAAABFLwyfnGoJham2dr1fYIAqacSjiS5VS8BcW2boyRlON0EwA8i+CC5/Mhjghi8XHkSXwUAiHDYGCkUkpim6AcvodHIPAwmA2Yr3hMNjvZZOdk3IkAACH5BAUAAA8ALAEAAQAQABAAAARS8Mn5WqOYqq3ydM5TjMUzDNiiLmJ5nhQiI9SLxjQGTwThTQLBo9f7BYOH5MF4fCR/kiAlEMgAABgqlXK9TrUPBuPRxX4fiXSCbPYY3gYo5e2JAAA7';				
		
		USU.title = script.title;
		USU.check4Update = script.check4Update;
		USU.updateTime = script.updateTime;
		USU.language = script.language;
		USU.thisVersion = script.thisVersion;
		USU.versionUrl = script.versionUrl;
		USU.updateUrl = script.updateUrl;
		USU.addonHeaders = script.addon.headers;
		USU.addonmimeType = script.addon.mimeType;
		USU.addonShowLog = script.addon.showLog;
		USU.addonShowLoader = script.addon.showLoader;
		USU.addonCustomLoader = script.addon.customLoader;
		
		USU.checkChecked = function(){
			var alreadyChecking = GM_getValue(USU.title+'.DoS',null);
			GM_setValue(USU.title+'.DoS', $now.toString());
			if (alreadyChecking && ($now - alreadyChecking) < USUDoS) return;
			var lastChecked = GM_getValue(USU.title+'.lastChecked', null);
			if (lastChecked && ($now - lastChecked) < USU.updateTime) return;
			USU.httpRequest();
		}
		USU.httpRequest = function(){
			GM_xmlhttpRequest({
				method:				"GET",
				url:				USU.versionUrl,
				overrideMimeType:	USU.addonmimeType,
				headers:			USU.addonHeaders,
				onreadystatechange:	USU.loader,
				onerror:			USU.error,
				onload:				function(){},
			});
		}
		USU.error = function(e){
			$alert('c',2,'USU08',	"[Title: "+USU.title+"]; "+
									"[Url: "+USU.versionUrl+"]; "+
									"[Status: "+e.statusText+" ("+e.status+")]; "+
									"[ReadyState: "+e.readyState+"]; "+
									"[ResponsHeaders: "+e.responsHeaders+"]; "+
									"[Respons: "+e.responseText+"]; ");
			if($gi("USUpdateOverlay")){
				$re($gi("USUpdateOverlay"));  // cleanup
			}
		}
		USU.loader = function(o){
			if(USU.addonShowLoader){
				if(typeof(USU.addonCustomLoader)=='function'){
					USU.addonCustomLoader(o,USU);
				}
				else if(o.readyState==1 && USUbeenHere===false){  // loading...
					if(!$gi("USUpdateOverlay") && !$gi("cmdOverlayGray")){
						USUpdateHeight = 20;  // px
						USUpdateWidth = 20;  // px
						USUpdateTop = Math.min((Window.$height() - USUpdateHeight)/2);
						USUpdateLeft = Math.min((Window.$width() - USUpdateWidth)/2);
						var USUpdateOverlay = $ce("DIV");
						$sa(USUpdateOverlay,"id","USUpdateOverlay");
						$sa(USUpdateOverlay,"style",$setReturnOpacity(70)+"visibility:visible;background-color:#000;display:block;position:fixed;height:100%;width:100%;top:0px;left:0px;z-index:9998");
						$ac($db,USUpdateOverlay);
						var USUpdateLoading = $ce("IMG");
						$sa(USUpdateLoading,"src",USU.loadingImage);
						$sa(USUpdateLoading,"style",$setReturnOpacity(100)+"visibility:visible;display:block;position:fixed;height:"+USUpdateHeight+"px;width:"+USUpdateWidth+"px;top:"+USUpdateTop+"px;left:"+USUpdateLeft+"px;z-index:9999");
						$ac(USUpdateOverlay,USUpdateLoading);
						$addEvent(USUpdateOverlay,"dblclick",function(){$re($gi("USUpdateOverlay"));});
					}
					USUbeenHere=true;
				}
			}
			
			if(o.readyState==4){
				if($gi("USUpdateOverlay")){
					$re($gi("USUpdateOverlay"));  // cleanup
				}
				USU.update(o);
			}
		},
		USU.update = function(o){
			if(o.status==200){
				var current = o.responseText;
				RegExp0 = /\/\/\s+==UserScript==/i;
				RegExp1 = /@version\s+(v?\s?[\d.]+\s?\w+)/i;
				RegExp2 = /([\d.]+)/i;
				if(current.match(RegExp0)){
					if(current.match(RegExp1)){
						USU.serverVersion = RegExp.$1;
						USU.serverVersion.match(RegExp2);
						serverVersionNrs = RegExp.$1.split(".");
						
						USU.thisVersion.match(RegExp2);
						thisVersionNrs = RegExp.$1.split(".");
						
						var notyetprompted2Update = true;
						var thisVHigherThenServerV = false;
						var updateAnswer;
						
						if(console && USU.addonShowLog==true){
							console.group("US_update: "+USU.title+"\n"+"["+USU.translate.localise(['USU','this'])+": "+USU.thisVersion+"] && ["+USU.translate.localise(['USU','server'])+": "+USU.serverVersion+"].");
						}
						for(var c=0; c<Math.max(serverVersionNrs.length,thisVersionNrs.length); c++){
							if(thisVersionNrs[c]=="undefined" || thisVersionNrs[c]=="" || thisVersionNrs[c]==null){
								thisVersionNrs[c] = 0;
							}
							if(serverVersionNrs[c]=="undefined" || serverVersionNrs[c]=="" || serverVersionNrs[c]==null){
								serverVersionNrs[c] = 0;
							}
							if(thisVersionNrs[c]<serverVersionNrs[c] && notyetprompted2Update && !thisVHigherThenServerV){
								updateAnswer=confirm(USU.translate.localise(['USU','upDate'],{'1':USU.title,'2':USU.thisVersion,'3':USU.serverVersion}));
								if(updateAnswer){US_openInTab(USU.updateUrl); }
								else{alert(USU.translate.localise(['USU','noUpdate'],{'1':$timeDateWords(Math.max(USU.updateTime,USUDoS))}));}
								notyetprompted2Update = false;
								if(USU.addonShowLog==true){
									$alert('c',2,'USU07 ['+c+']',"["+USU.thisVersion+"] && ["+USU.serverVersion+"] => "+thisVersionNrs[c]+" "+USU.translate.localise(['USU','lower'])+" "+serverVersionNrs[c]);
								}
							} 
							else if(thisVersionNrs[c] == serverVersionNrs[c]){
								if(USU.addonShowLog==true){
									$alert('c',1,'USU06 ['+c+']',"["+USU.thisVersion+"] && ["+USU.serverVersion+"] => "+thisVersionNrs[c]+" "+USU.translate.localise(['USU','equel'])+" "+serverVersionNrs[c]);
								}
							}
							else if(thisVersionNrs[c] > serverVersionNrs[c]){
								if(USU.addonShowLog==true){
									$alert('c',3,'USU05 ['+c+']',"["+USU.thisVersion+"] && ["+USU.serverVersion+"] => "+thisVersionNrs[c]+" "+USU.translate.localise(['USU','higher'])+" "+serverVersionNrs[c]);
								}
								thisVHigherThenServerV = true;
							}
							else{ 
								if(USU.addonShowLog==true){
									$alert('c',2,'USU04 ['+c+']',"["+USU.thisVersion+"] && ["+USU.serverVersion+"] => "+thisVersionNrs[c]+" "+USU.translate.localise(['USU','lower'])+" "+serverVersionNrs[c]);
								}
							}
							GM_setValue(USU.title+'.lastChecked',$now.toString());
						}
						if(console && USU.addonShowLog==true){
							console.groupEnd();
						}
					}
					else{$alert('',4,'USU03',"The '@version' is written very strange in "+USU.title+", so checking for updates is stopped!")};
				}
				else{$alert('',4,'USU02',"There isn't a '==UserScript==' header in "+USU.title+", so checking for updates is stopped!")};
			}
			else{$alert('',4,'USU01',"Detected problems loading url from "+USU.title+": "+o.statusText+" ["+o.status+"].")};
		}
		if(USU.check4Update){USU.checkChecked()};
	},
	names: function(){
		return $w.USUnames;
	},
	all: function(){
		return $w.USUscripts;
	}
};



	language=new US_language({langMod:"navigator"});
	
	new US_update({
		title:			'US_functions',
		check4Update:	true,
		updateTime:		1*60*60*1000,
		language:		"navigator",
		thisVersion:	(window.US_functionsOK?window.US_functionsOK:'v1.9.4 Beta'),
		versionUrl:		16142,
		updateUrl:		16142
	});
	
	new US_update({
		title:			'US_language',
		check4Update:	true,
		updateTime:		1*60*60*1000,
		language:		"navigator",
		thisVersion:	(window.US_languageOK?window.US_languageOK:'v1.4.2 Beta'),
		versionUrl:		16143,
		updateUrl:		16143
	});
	
	new US_update({
		title:			'US_options',
		check4Update:	true,
		updateTime:		1*60*60*1000,
		language:		"navigator",
		thisVersion:	(window.US_optionsOK?window.US_optionsOK:'v1.9 Beta'),
		versionUrl:		31458,
		updateUrl:		31458
	});

	new US_update({
		title:			'US_update',
		check4Update:	true,
		updateTime:		1*60*60*1000,
		language:		"navigator",
		thisVersion:	'v1.6.4 Beta',
		versionUrl:		16144,
		updateUrl:		16144
	});



//*** STATISTICS ***//
window.US_updateOK="v1.6.4 Beta";
console.log('US_update ' + US_updateOK + ' correct imported!');
// Words: 1.936;
// Characters (no spaces): 20.533;
// Characters (with spaces): 23.639;
// Lines: 471;