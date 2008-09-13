
// !!!!!!!!! change overrides to default !!!!!!!!!!
// !!!!!!!!! don't forget framework update check below !!!!!!!!!!

/*//////////////////////////////////////////////////////////////////////////
// ==UserScript===
// @name            aaac_US_updater
// @author          Jerone UserScript Productions
// @namespace       http://userscripts.org/users/31497
// @homepage        http://jervw.freehostia.com/artikels/art006/US_updater.html
// @description     Part 3 of US_framework
// @description     Checks for new script versions.
// @description     US_updater v1.6 Beta
// @copyright       2007 - 2008 (See below for more)
// @version         v1.6 Beta
// @browser         FF2
// @statussize      
// @defaulticon     
// @include         *
// ==/UserScript==
////////////////////////////////////////////////////////////////////////////
// ToC:
// - Rights
// - History
// - Todo
// - Note
// - Framework Check
// - Usage Instructions
// - User Settings
// - Default Settings
// - User Script
// - Extra
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
// - 04-05-2008: fixed bug in not available US_language [v1.3 Beta];
// - 18-05-2008: update because of US_language update [v1.3.1 Beta];
// - 19-05-2008: fixed bug with wrong update url [v1.3.2 Beta];
// - 30-05-2008: fixed framework check [v1.4 Beta];
// - 02-06-2008: added custom loader [v1.5 Beta];
// - 02-06-2008: fixed bug for double run of USU.loader when o.readyState==1 [v1.5.1 Beta];
// - 02-06-2008: cleaned up init and added more overrides [v1.5.2 Beta];
// - 03-06-2008: cleaned up code and changed custom loader for more use [v1.5.3 Beta];
// - 03-06-2008: added functions ro return all data and script names [v1.6 Beta];
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
/*//////////////////////////////////////////////////////////////////////////



//*** FRAMEWORK CHECK ***//
// Nothing to change here!!!
var z="US_updater";  // current script name;
var n1="1.4";  // minimum US_functions version;
var n2="1.3";  // minimum US_language version;
var m1="The following script doesn't exist, is disabled or something went wrong:\n	",m2=z+" only works with a newer version of the following script:\n	",m3="\n\nClick 'OK' to go to the homepage of the script to download the newest version:\n	",m4=" missing or wrongly imported!",m5=" is to old!",l1="http://userscripts.org/scripts/show/16142",l2="http://userscripts.org/scripts/show/16143",l3="http://userscripts.org/scripts/show/16144",u="undefined",f=false,t=true,o=null,w=window;if(typeof(US_functionsOK)==u){l('US_functions'+m4);a("US_functions",l1,1);}else if(US_functionsOK===f||g(n1,US_functionsOK)){l('US_functions'+m5);a("US_functions",l1,2);}if(typeof(US_languageOK)==u){l('US_language'+m4);a("US_language",l2,1);}else if(US_languageOK===f||g(n2,US_languageOK)){l('US_language'+m5);a("US_language",l2,2);}
function a(b,c,d){var e=confirm(((d==2)?m2:m1)+b+m3+c);if(e){GM_openInTab(c);}x();}function x(){w.US_language=function(){};w.US_update=function(){};return;}function g(h,i){r=/([\d.]+)/i;if(r.test(i)==f){return t;}i.match(r);is=RegExp.$1.split(".");h.match(r);hs=RegExp.$1.split(".");var j=f,k=f;for(var ii=0;ii<Math.max(is.length,hs.length);ii++){var h1=hs[ii],i1=is[ii];if(h1==u||h1==""||h1==o){h1=0;}if(i1==u||i1==""||i1==o){i1=0;}if(i1<h1&&!k){j=t;}if(i1>h1){k=t;}}return j;}function l(m){console.log(m);};



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
		title:			"This is just a test!!!",			// [string] UserScript name;
		check4Update:	true,								// [boolean] check for updates;
		updateTime:		1*60*60*1000,						// [integer MILLISECONDS] timeinterval between update check;
		language:		"en",								// [string LANGUAGE SHORT or "navigator"] language;
		thisVersion:	"v2.0.3 Beta",						// [string integer(.integer(.integer(.etc...)))] this scripts version (all extra content will be filtered);
		versionUrl:		12345,								// [number or string URL] userscripts.org script number or url were new version number is stored;
		updateUrl:		"http://some.site.com",				// [number or string URL] userscripts.org script number or url to visited for new update;
		addon:{												// (OPTIONAL) some optional extra addons:
			headers: 		{"User-Agent":"Mozilla/5.0"},		// [object] use specific HTTP headers;
			mimeType:		"text/html; charset=ISO-8859-1",	// [string] use specific MimeType;
			showLog: 		true,								// [boolean] show log;
			showLoader:		true,								// [boolean] show loader overlay;
			customLoader:	function(o,USU){},					// [function] override normal loader ("o,USU" are given variable you can use);
		}															// "o" contains onreadystatechange response;
	});																// "USU" contains all scripts data;
\*/
////////////////////////////////////////////////////////////////////////////
// ALL UPDATE SCRIPTS DATA
// If you want to show all scripts data that have checked for an update use the following code:
/*\
	new US_update().all();									// returns array of both the scripts variablen and the used variablen;
\*/
// Note: when adding above code only the earlier checked scripts are returned. The code can't check scripts that haven't been updated yet;
////////////////////////////////////////////////////////////////////////////
// ALL UPDATE SCRIPTS NAMES
// If you want to show all script names that have checked for an update use the following code:
/*\
	new US_update().names();								// returns array of script names;
\*/
// Note: when adding above code only the earlier checked scripts are returned. The code can't check scripts that haven't been updated yet;



//*** USER SETTINGS ***//
// All settings made here will override the settings made in the userscripts itself (OPTIONAL)!
var USUtitleOverRide		= "";		// [string] UserScript name;
										// [""] script depended;
var USUcheck4UpdateOverRide	= false;//null;		// [boolean] check for updates;
										// [null] script depended;
var USUupdateTimeOverRide	= 0; 		// [integer MILLISECONDS] time interval between update checks;
										// [0] script depended;
var USUDoSOverRide			= 1;		// [integer MILLISECONDS] anti-DoS time;
										// [0] script depended;
var USUlanguageOverRide		= "";		// [string LANGUAGE SHORT or "navigator"] language;
										// [""] script depended;
var USUheadersOverRide		= null;		// [object] use specific HTTP headers;
										// [null] script depended;
var USUmimeTypeOverRide		= "";		// [string] use specific MimeType;
										// [""] script depended;
var USUshowLogOverRide		= null;		// [boolean] show log;
										// [null] script depended;
var USUshowLoaderOverRide	= null;		// [boolean] show loader overlay;
										// [null] script depended;
var USUcustomLoaderOverRide	= null;		// [function] override normal loader;
										// [null] script depended;



//*** DEFAULT SETTINGS ***//
// Only change things here if you know what you're doing!
var USUtitleDefault = "this script";
var USUcheck4UpdateDefault = true;
var USUupdateTimeDefault = 1*60*60*1000;  // => 1 hour update interval;
var USUDoSDefault = 2*60*1000;  // => two minutes anti-DoS;
var USUlanguageDefault = "en";
var USUheadersDefault = new Object();
var USUmimeTypeDefault = new String();
var USUshowLogDefault = true;
var USUshowLoaderDefault = true;
var USUcustomLoaderDefault = false;



//*** USER SCRIPT ***//
// Only change things here if you know what you're doing!
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
		
			if(typeof(window.USUscripts)=="undefined"){window.USUscripts=[];}
			window.USUscripts.push([script,this]);
			if(typeof(window.USUnames)=="undefined"){window.USUnames=[];}
			window.USUnames.push(USUtitle);
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
						USUpdateTop = Math.min(($meaSureMentWindow('h') - USUpdateHeight)/2);
						USUpdateLeft = Math.min(($meaSureMentWindow('w') - USUpdateWidth)/2);
						var USUpdateOverlay = $ce("DIV");
						$sa(USUpdateOverlay,"id","USUpdateOverlay");
						$sa(USUpdateOverlay,"style",$setReturnOpacity(70)+"visibility:visible;background-color:#000;display:block;position:fixed;height:100%;width:100%;top:0px;left:0px;z-index:9998");
						$ac($d.body,USUpdateOverlay);
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
	all: function(){
		return window.USUscripts;
	},
	names: function(){
		return window.USUnames;
	}
};



	language=new US_language({langMod:"navigator"});
	
	new US_update({
		title:			'US_functions',
		check4Update:	true,
		updateTime:		1*60*60*1000,
		language:		"navigator",
		thisVersion:	'v1.4 Beta',
		versionUrl:		16142,
		updateUrl:		16142
	});
	
	new US_update({
		title:			'US_language',
		check4Update:	true,
		updateTime:		1*60*60*1000,
		language:		"navigator",
		thisVersion:	'v1.3 Beta',
		versionUrl:		16143,
		updateUrl:		16143
	});
	
	new US_update({
		title:			'US_updater',
		check4Update:	true,
		updateTime:		1*60*60*1000,
		language:		"navigator",
		thisVersion:	'v1.6 Beta',
		versionUrl:		16144,
		updateUrl:		16144
	});



//*** EXTRA ***//
window.US_updaterOK="v1.6 Beta";
console.log('US_updater correct imported!');
// Words: 1.848;
// Characters (no spaces): 19.310;
// Characters (with spaces): 22.314;
// Lines: 458;