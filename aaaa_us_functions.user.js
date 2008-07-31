/*//////////////////////////////////////////////////////////////////////////
// ==UserScript===
// @name            aaaa_US_functions
// @author          Jerone UserScript Productions
// @namespace       http://userscripts.org/users/31497
// @homepage        http://jervw.freehostia.com/artikels/art006/US_functions.html
// @description     Part 1 of US_framework
// @description     Adds all needed functions.
// @description     US_functions v1.4 Beta
// @copyright       2007 - 2008 (See below for more)
// @version         v1.4 Beta
// @browser         FF2
// @statussize      
// @defaulticon     
// @resource        
// @require         
// @include         *
// ==/UserScript==
////////////////////////////////////////////////////////////////////////////
// ToC:
// - Rights
// - History
// - Todo List
// - User Settings
// - Functions:
//   - Common
//   - Prototype
//   - Style
//   - Information
//   - Extra
//   - Userscript
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
// - 15-12-2007: initial release [v1.0 Alpha];
// - 05-01-2008: updated every function [v1.1 Beta];
// - 24-04-2008: updated some functions and added new functions [v1.2 Beta];
// - 04-05-2008: cleaned up code [v1.3 Beta];
// - 30-05-2008: fixed framework check [v1.4 Beta];
// - 20-06-2008: added $w=window [v1.5 Beta];
// - 21-06-2008: added support for frames in $gi() [v1.6 Beta];
// - 22-06-2008: cleaned up code [v1.6.1 Beta];
////////////////////////////////////////////////////////////////////////////
// Todo:
// - make usersettings ($alertMOD);
// - $hs: change 2=hide to 0=hide;
// - $hs: riturn + 3 (toggle) => returns boolean for situation;
// - add instructions about prototype;
// - add support for frames on every function;
/*//////////////////////////////////////////////////////////////////////////



//*** USER SETTINGS ***//
// All settings made here will override the settings made in the userscripts itself (optional)!
// - none



//*** FUNCTIONS ***//
/** COMMON **/
try{window._=unsafeWindow;}catch(e){window._=window;};
_.$w=_;
_.$n=navigator;
_.$d=document;
_.$db=$d.body;
_.$2D=new Date();
_.$now=$2D.getTime();
_.$uA=$n.userAgent.toLowerCase();
_.$gi=function(str){var doc=arguments[1]?arguments[1].contentDocument:$d;return doc.getElementById(str);};
_.$gn=function(str){var doc=arguments[1]?arguments[1].contentDocument:$d;return doc.getElementsByName(str);};
_.$gt=function(str){var doc=arguments[1]?arguments[1].contentDocument:$d;if($d.getElementsByTagName){return doc.getElementsByTagName(str);}else if($d.all){return doc.all.tags(str);}else return [];};
_.$ga=function(node,attr,flag){if(/msie/.test($uA)&&!/opera/.test($uA)){switch(attr.toLowerCase()){case "class":attr="className";break;case "for":attr="htmlFor";break;case "style":attr="cssText";break;case "float":attr="cssFloat";break;}}return node.getAttribute(attr,flag);};
_.$sa=function(node,attr,val,flag){if(/msie/.test($uA)&&!/opera/.test($uA)){switch(attr.toLowerCase()){case "class":attr="className";break;case "for":attr="htmlFor";break;case "style":attr="cssText";break;case "float":attr="cssFloat";break;}}node.setAttribute(attr,val,flag);return node;};
_.$ra=function(node,attr){if(/msie/.test($uA)&&!/opera/.test($uA)){switch(attr.toLowerCase()){case "class":attr="className";break;case "for":attr="htmlFor";break;case "style":attr="cssText";break;case "float":attr="cssFloat";break;}}node.removeAttribute(attr);return node;};
_.$ce=function(str){var doc=arguments[1]?arguments[1].contentDocument:$d;return doc.createElement(str);};
_.$ct=function(str){var doc=arguments[1]?arguments[1].contentDocument:$d;return doc.createTextNode(str);};
_.$ih=function(node,HTML){return node.innerHTML=HTML;};
_.$ac=function(node,nNode){return node.appendChild(nNode);};
_.$ia=function(node,nNode){return node.parentNode.insertBefore(nNode,node.nextSibling);};
_.$ib=function(node,nNode){return node.parentNode.insertBefore(nNode,node);};
_.$re=function(node){return node.parentNode.removeChild(node);};
_.$rc=function(node){var childs=[];while(node.hasChildNodes()){node.removeChild(node.firstChild);childs.push(node.firstChild);}return childs;};
////////////////////////////////////////////////////////////////////////////
/** PROTOTYPE **/
_.US_functions={prototype:function(a){var b="Object.extend=function(a,b){for(var c in b)a[c]=b[c];return a;};";for(var y in a){var c="",d=a[y];for(var z in d){c+=d[z]+":"+y.toLowerCase()+".prototype."+d[z]+(d.length-1>z?",":"");}b+="Object.extend("+y+".prototype,{"+c+"});";}return b;}};_.number={prototype:{}};_.string={prototype:{}};_.array={prototype:{}};_.object={prototype:{}};eval(US_functions.prototype({Number:["between"],String:[],Array:["search"],Object:[]}));
 number.prototype.between=function(min,max){return(min<=this&&this<max);};
 number.prototype.repeat=function(n){return Number(new Array(n+1).join(this));};
 number.prototype.replace=function(exp,n){return Number(this.toString().replace(exp,n.toString()));}
 string.prototype.firstLetterCapital=function(){return this.toString().substr(0,1).toUpperCase()+this.toString().toLowerCase().substr(1,this.toString().length);};
 string.prototype.html2Entities=function(){return this.replace(/[^\x09\x0A\x0D\x20-\x7F]|[\x21-\x2F]|[\x3A-\x40]|[\x5B-\x60]/g,function(e){return '&#'+e.charCodeAt(0)+';'});};
 string.prototype.repeat=function(n){return new Array(n+1).join(this);};
 string.prototype.strip=function(exp){return this.replace(exp?exp:/\s/g,"");};
 string.prototype.toCamelCase=function(){return this.toString().replace(/([A-Z]+)/g,function(m,l){return l.substr(0,1).toUpperCase()+l.toLowerCase().substr(1,l.length);}).replace(/[\-_\s](.)/g,function(m,l){return l.toUpperCase();});};
 string.prototype.trim=function(){return this.replace(/^\s\s*/,'').replace(/\s\s*$/,'');};
 array.prototype.clone=function(){var a=new Array();for(var property in this){a[property]=typeof(this[property])=='object'?this[property].clone():this[property];}return a;};
 array.prototype.compare=function(arr){if(this.length!=arr.length)return false;for(var i=0;i<arr.length;i++){if(this[i].compare){if(!this[i].compare(arr[i]))return false;else continue;}if(this[i]!=arr[i])return false;}return true;};if(typeof Array.prototype.push!="function"){Array.prototype.push=ArrayPush;function ArrayPush(value){this[this.length]=value;}}
 array.prototype.find=function(str){var returnArr=false;for(var i=0;i<this.length;i++){if(typeof(str)=='function'){if(str.test(this[i])){if(!returnArr){returnArr=[];}returnArr.push(i);}}else{if(this[i]===str){if(!returnArr){returnArr=[];}returnArr.push(i);}}}return returnArr;};
 array.prototype.replace=function(exp,str){for(var i in this){if(this[i].replace){this[i].replace(exp,str);}while(this[i].toString().match(exp)){var isN=typeof(this[i])=="number"&&typeof(str)=="number";this[i]=this[i].toString().replace(exp,str);if(isN)this[i]=Number(this[i]);}}return this;};
 array.prototype.search=function(str,caseInsens,ignoreSpaces){var inArr=false,nArr=[];for(var i=0;i<this.length;i++){if(what.type.of(this[i])=="array"){inArr=this[i].search(str,caseInsens,ignoreSpaces);}else{nArr[i]=this[i];if(caseInsens!=false){if(typeof(str)=="string"){str=str.toLowerCase();}if(typeof(nArr[i])=="string"){nArr[i]=nArr[i].toLowerCase();}}if(ignoreSpaces!=false){if(typeof(str)=="string"){str=str.replace(/\s+/g,"");}if(typeof(nArr[i])=="string"){nArr[i]=nArr[i].replace(/\s+/g,"");}}if(nArr[i]===str){inArr=true;break;}}}return inArr;};
 array.prototype.switch=function(x,y){this.splice(y+1,0,this.slice(x,x+1)[0]);this.splice(x,1,this.splice(y,1)[0]);return this;};
 object.prototype.clone=function(){var o=new Object();for(var property in this){o[property]=typeof(this[property])=='object'?this[property].clone():this[property];}return o;};

////////////////////////////////////////////////////////////////////////////
/** STYLE **/
_.$addCSS=function(css){if(typeof US_addStyle!="undefined"){GM_addStyle(css);}else if(typeof addStyle!="undefined"){addStyle(css);}else{var heads=$gt("head");if(heads.length>0){var node=$ce("style");node.type="text/css";$ih(node,css);$ac(heads[0],node);}}};
_.$getStyle=function(node,attr){var doc=arguments[2]?arguments[2].contentDocument:$d;if($w.getComputedStyle){return doc.defaultView.getComputedStyle(node,null).getPropertyValue(attr);}else if(node.currentStyle){attr=attr.replace(/\-(\w)/g,function(a,b){return b.toUpperCase();});return node.currentStyle[attr];}};
_.$setReturnOpacity=function(n){return "opacity:"+(n/100)+"; filter:alpha(opacity="+n+"); filter:progid:DXImageTransform.Microsoft.Alpha(opacity="+n+"); -moz-opacity:"+(n/100)+"; -khtml-opacity:"+(n/100)+";";};
_.$setOpacity=function(node,n){var node=node.style;node.opacity=(n/100);node.filter="alpha(opacity="+n+")";node.filter="progid:DXImageTransform.Microsoft.Alpha(opacity="+n+")";node.MozOpacity=(n/100);node.KhtmlOpacity=(n/100);};
_.$hs=function(node,way,riturn,inlineTable){hsDisplayObj=inlineTable?"":"block";if(riturn){if(way==1){if(node.style.display=="block"||node.style.display=="inline-table"||node.style.visibility=="visible"||!(node.style.display=="none"||node.style.visibility=="hidden")){return true;}else return false;}else if(way==2||way==0){if(node.style.display=="none"||node.style.visibility=="hidden"){return true;}else return false;}else if(way==3){$alert('',4,'$hs01','There is no toggle return');return null;}}else{if(way==1){node.style.display=hsDisplayObj;node.style.visibility="visible";}else if(way==2||way==0){node.style.display="none";node.style.visibility="hidden";}else if(way==3){if(node.style.display=="none"||node.style.visibility=="hidden"){node.style.display=hsDisplayObj;node.style.visibility="visible";}else{node.style.display="none";node.style.visibility="hidden";}}return node;}};
_.$opacityFadeIn=function(node,start,end,time,steps,fnFinish,fnBusy){if(start<end){$setOpacity(node,start);if(fnBusy&&typeof(fnBusy)=="function"){fnBusy();}var $opacityFadeInTimer=$w.setTimeout(function(){start+=(steps);$opacityFadeIn(node,start,end,time,steps,fnFinish,fnBusy)},time);}else if(start>=end){if(fnFinish&&typeof(fnFinish)=="function"){fnFinish();}}};
_.$opacityFadeOut=function(node,start,end,time,steps,fnFinish,fnBusy){if(start>end){$setOpacity(node,start);if(fnBusy&&typeof(fnBusy)=="function"){fnBusy();}var $opacityFadeOutTimer=$w.setTimeout(function(){start-=(steps);$opacityFadeOut(node,start,end,time,steps,fnFinish,fnBusy)},time);}else if(start<=end){if(fnFinish&&typeof(fnFinish)=="function"){fnFinish();}}};
////////////////////////////////////////////////////////////////////////////
/** INFORMATION **/
_.Program={$width:function(){if($w.outerWidth){return $w.outerWidth;}else return null;},$height:function(){if($w.outerHeight){return $w.outerHeight;}else return null;}};
_.Window={IEscrollbar:[20,20],$width:function(bar){var doc=arguments[1]?arguments[1].contentDocument:$d,win=arguments[1]?arguments[1].contentWindow:$w,ww=null;if(bar===false){if(doc.documentElement&&doc.documentElement.clientWidth){ww=doc.documentElement.clientWidth;}else if(doc.body&&doc.body.clientWidth&&(doc.body.clientWidth!=doc.body.scrollWidth)){ww=doc.body.clientWidth;}}else{if(win.innerWidth){ww=win.innerWidth;}else if(doc.documentElement&&doc.documentElement.offsetWidth){ww=doc.documentElement.offsetWidth;}/*if(Window.$width(false,(arguments[1]?arguments[1]:false))&&ww&&(ww-Window.$width(false,(arguments[1]?arguments[1]:false)))<=0){ww=ww+Window.IEscrollbar[0];}*/}return ww;},
  $height:function(bar){var doc=arguments[1]?arguments[1].contentDocument:$d,win=arguments[1]?arguments[1].contentWindow:$w,wh=null;if(bar===false){if(doc.body&&doc.body.clientHeight){wh=doc.body.clientHeight;if(win.innerHeight&&wh>win.innerHeight){wh=doc.documentElement.clientHeight;}else if(doc.documentElement&&doc.documentElement.clientHeight&&wh>doc.documentElement.clientHeight){wh=doc.documentElement.clientHeight;}}}else{if(win.innerHeight){wh=win.innerHeight;}else if(doc.documentElement&&doc.documentElement.offsetHeight){wh=doc.documentElement.offsetHeight;if(wh<=Window.$height(false,(arguments[1]?arguments[1]:false))){wh=wh+Window.IEscrollbar[1]};}}return wh;},$scrollbar:{$width:function(){var ar=arguments[0]?arguments[0]:false,wsw=null;if(Window.$width(false,ar)&&Window.$width(true,ar)){wsw=(Window.$width(true,ar)-Window.$width(false,ar));/*if(wsw<=0){wsw=Window.IEscrollbar[0];}*/}return wsw;},
  $height:function(){var ar=arguments[0]?arguments[0]:false,wsh=null;if(Window.$height(false,ar)&&Window.$height(true,ar)){wsh=(Window.$height(true,ar)-Window.$height(false,ar));}return wsh;}}};
_.Document={$width:function(){var doc=arguments[0]?arguments[0].contentDocument:$d,dw=null;if(doc.documentElement&&doc.documentElement.scrollWidth){dw=doc.documentElement.scrollWidth;if(doc.body.scrollWidth&&doc.documentElement.scrollWidth==doc.documentElement.offsetWidth){dw=doc.body.scrollWidth;}}else if(doc.body.scrollWidth){dw=doc.body.scrollWidth;}return dw;},$height:function(){var doc=arguments[0]?arguments[0].contentDocument:$d,dh=null;if(doc.documentElement&&doc.documentElement.scrollHeight){dh=doc.documentElement.scrollHeight;if(doc.body.scrollHeight&&(dh==doc.documentElement.offsetHeight&&dh==doc.body.offsetHeight)){dh=doc.body.scrollHeight;}}else if(doc.body.scrollHeight){dh=doc.body.scrollHeight;}return dh;},
  $left:function(){var doc=arguments[0]?arguments[0].contentDocument:$d,dl=null;if(doc.documentElement&&(doc.documentElement.scrollLeft||doc.documentElement.scrollLeft==0)){dl=doc.documentElement.scrollLeft;if((doc.body.scrollLeft||doc.body.scrollLeft==0)&&dl<=0){dl=doc.body.scrollLeft;}}else if(doc.body.scrollLeft||doc.body.scrollLeft==0){dl=doc.body.scrollLeft;}return dl;},$top:function(){var doc=arguments[0]?arguments[0].contentDocument:$d,dt=null;if(doc.documentElement&&doc.documentElement.scrollTop){dt=doc.documentElement.scrollTop;if((doc.body.scrollTop||doc.body.scrollTop==0)&&dt<=0){dt=doc.body.scrollTop;}}else if(doc.body.scrollTop||doc.body.scrollTop==0){dt=doc.body.scrollTop;}return dt;},$right:function(){var ar=arguments[0]?arguments[0]:false;if((Document.$width(ar)||Document.$width(ar)==0)&&(Document.$left(ar)||Document.$left(ar)==0)&&(Window.$width(false,ar)||Window.$width(false,ar)==0)){return(Document.$width(ar)-Document.$left(ar)-Window.$width(false,ar));}else return null;},
  $bottom:function(){var ar=arguments[0]?arguments[0]:false;if((Document.$height(ar)||Document.$height(ar)==0)&&(Document.$top(ar)||Document.$top(ar)==0)&&(Window.$height(false,ar)||Window.$height(false,ar)==0)){return(Document.$height(ar)-Document.$top(ar)-Window.$height(false,ar));}else return null;}};
_.$detectDoctype=function(){var regDTD=/\s*(.*)\/\/\s*(\w*)\/\/\s*(\w*)\s+(.*)\s*\/\/\s*(\w*)\s*/gi;var regLabel=/(\w*)\s+([a-zA-Z]*)\s*([\d\.]*)\s*(\w*)/gi;$w.doctype={};doctype.registration=null;doctype.organization=null;doctype.type=null;doctype.label=[null];doctype.label.host=null;doctype.label.version=null;doctype.label.type=null;doctype.language=null;if($d.doctype){identifier=$d.doctype.publicId;}else {return false;}if(typeof(identifier)=="string" && identifier.match(regDTD)){doctype.registration=RegExp.$1?RegExp.$1:null;doctype.organization=RegExp.$2?RegExp.$2:null;doctype.type=RegExp.$3?RegExp.$3:null;doctype.label=RegExp.$4?RegExp.$4:null;doctype.language=RegExp.$5?RegExp.$5:null;if(labels=doctype.label.split(/\s*plus\s*/)){doctype.label=labels;doctype.label.host=[];doctype.label.version=[];doctype.label.type=[];for(var i=0; i<labels.length; i++){labels[i].match(regLabel);doctype.label.host.push(RegExp.$1?RegExp.$1:null);doctype.label.version.push(RegExp.$3?RegExp.$3:null);
  if(RegExp.$2){doctype.label.type.push(RegExp.$2?RegExp.$2:null);}else{doctype.label.type.push(RegExp.$4?RegExp.$4:null);}}}return true;}else{doctype.registration=false;doctype.organization=false;doctype.type=false;doctype.label=[false];doctype.label.host=false;doctype.label.version=false;doctype.label.type=false;doctype.language=false;return false;}};
////////////////////////////////////////////////////////////////////////////
/** EXTRA **/
_.$addEvent=function(node,type,fn,useCapture){if(node.addEventListener){node.addEventListener(type,fn,useCapture);}else if(node.attachEvent){node["e"+type+fn]=fn;node[type+fn]=function(){node["e"+type+fn]($w.event);};node.attachEvent("on"+type,node[type+fn]);}};
_.$removeEvent=function(node,type,fn,useCapture){if(node.removeEventListener){node.removeEventListener(type,fn,useCapture);}else if(node.detachEvent){node.detachEvent("on"+type,node[type+fn]);node[type+fn]=null;node["e"+type+fn]=null;}};
_.$getElementsByClassName=function(class,tag,node){if(typeof class!=="string"||typeof node!=="object"){throw "You're using an old version of US_functions or something went wrong! Please update.";}var doc=arguments[3]?arguments[3].contentDocument:$d;if($d.getElementsByClassName){getElementsByClassName=function(class,tag,node){var elements=(node||doc).getElementsByClassName(class),nodeName=(tag)?new RegExp("\\b"+tag+"\\b","i"):null,returnElements=[],current;for(var i=0;i<elements.length;i++){current=elements[i];if(!nodeName||nodeName.test(current.nodeName)){returnElements.push(current);}}return returnElements;};}else if($d.evaluate){getElementsByClassName=function(class,tag,node){tag=tag||"*";node=node||doc;var classes=class.split(" "),classesToCheck="",xhtmlNamespace="http://www.w3.org/1999/xhtml",namespaceResolver=($d.documentElement.namespaceURI===xhtmlNamespace)?xhtmlNamespace:null,returnElements=[],elements,node;
  for(var j=0;j<classes.length;j++){classesToCheck+="[contains(concat(' ',@class,' '),' "+classes[j]+" ')]";}try{elements=$d.evaluate(".//"+tag+classesToCheck,node,namespaceResolver,0,null);}catch(e){elements=$d.evaluate(".//"+tag+classesToCheck,node,null,0,null);}while((node=elements.iterateNext())){returnElements.push(node);}return returnElements;};}else{getElementsByClassName=function(class,tag,node){tag=tag||"*";node=node||doc;var classes=class.split(" "),classesToCheck=[],elements=(tag==="*"&&node.all)?node.all:node.getElementsByTagName(tag),current,returnElements=[],match;for(var k=0;k<classes.length;k++){classesToCheck.push(new RegExp("(^|\\s)"+classes[k]+"(\\s|$)"));}for(var l=0;l<elements.length;l++){current=elements[l];match=false;for(var m=0;m<classesToCheck.length;m++){match=classesToCheck[m].test(current.class);if(!match){break;}}if(match){returnElements.push(current);}}return returnElements;};}return getElementsByClassName(class,tag,node);};
_.$timeDateWords=function(n,lang,shorten){shorten?shorten=shorten:shorten=false;var word=false,l=lang,timeUnits=[{name:l.localise(["tDW","millisecond"]),plural:l.localise(["tDW","milliseconds"]),min:0,max:1000},{name:l.localise(["tDW","second"]),plural:l.localise(["tDW","secondes"]),min:1000,max:60*1000},{name:l.localise(["tDW","minute"]),plural:l.localise(["tDW","minutes"]),min:60*1000,max:60*60*1000},{name:l.localise(["tDW","hour"]),plural:l.localise(["tDW","hours"]),min:60*60*1000,max:24*60*60*1000},{name:l.localise(["tDW","day"]),plural:l.localise(["tDW","days"]),min:24*60*60*1000,max:7*24*60*60*1000},{name:l.localise(["tDW","week"]),plural:l.localise(["tDW","weeks"]),min:7*24*60*60*1000,max:365*24*60*60*1000},{name:l.localise(["tDW","year"]),plural:l.localise(["tDW","years"]),min:365*24*60*60*1000,max:Infinity}];for(var i=0,tU=null;tU=timeUnits[i];i++){if(n.between(tU.min,tU.max)){var val=Math.floor(n/(tU.min!=0?tU.min:1));word=(val!=(1&&shorten)?val+" ":"")+(val!=1?tU.plural:tU.name);}}return word;};
_.$namedColors=function(){return new Array('AliceBlue','AntiqueWhite','Aqua','Aquamarine','Azure','Beige','Bisque','Black','BlanchedAlmond','Blue','BlueViolet','Brown','BurlyWood','CadetBlue','Chartreuse','Chocolate','Coral','CornflowerBlue','Cornsilk','Crimson','Cyan','DarkBlue','DarkCyan','DarkGoldenRod','DarkGray','DarkGreen','DarkKhaki','DarkMagenta','DarkOliveGreen','Darkorange','DarkOrchid','DarkRed','DarkSalmon','DarkSeaGreen','DarkSlateBlue','DarkSlateGray','DarkTurquoise','DarkViolet','DeepPink','DeepSkyBlue','DimGray','DodgerBlue','Feldspar','FireBrick','FloralWhite','ForestGreen','Fuchsia','Gainsboro','GhostWhite','Gold','GoldenRod','Gray','Grey','Green','GreenYellow','HoneyDew','HotPink','IndianRed','Indigo','Ivory','Khaki','Lavender','LavenderBlush','LawnGreen','LemonChiffon','LightBlue','LightCoral','LightCyan','LightGoldenRodYellow','LightGrey','LightGreen',
  'LightPink','LightSalmon','LightSeaGreen','LightSkyBlue','LightSlateBlue','LightSlateGray','LightSteelBlue','LightYellow','Lime','LimeGreen','Linen','Magenta','Maroon','MediumAquaMarine','MediumBlue','MediumOrchid','MediumPurple','MediumSeaGreen','MediumSlateBlue','MediumSpringGreen','MediumTurquoise','MediumVioletRed','MidnightBlue','MintCream','MistyRose','Moccasin','NavajoWhite','Navy','OldLace','Olive','OliveDrab','Orange','OrangeRed','Orchid','PaleGoldenRod','PaleGreen','PaleTurquoise','PaleVioletRed','PapayaWhip','PeachPuff','Peru','Pink','Plum','PowderBlue','Purple','Red','RosyBrown','RoyalBlue','SaddleBrown','Salmon','SandyBrown','SeaGreen','SeaShell','Sienna','Silver','SkyBlue','SlateBlue','SlateGray','Snow','SpringGreen','SteelBlue','Tan','Teal','Thistle','Tomato','Turquoise','Violet','VioletRed','Wheat','White','WhiteSmoke','Yellow','YellowGreen',
  'ActiveBorder','ActiveCaption','AppWorkspace','Background','ButtonFace','ButtonHighlight','ButtonShadow','ButtonText','CaptionText','GrayText','Highlight','HighlightText','InactiveBorder','InactiveCaption','InactiveCaptionText','InfoBackground','InfoText','Menu','MenuText','Scrollbar','ThreeDDarkShadow','ThreeDFace','ThreeDHighlight','ThreeDLightShadow','ThreeDShadow','Window','WindowFrame','WindowText');};
_.$validateColorInput=function(node,alternativeObj){var colorField=node;var validateColorFalse=[];var v=0;var spaceRegExp=/\s+/g;var colorRegExp1a=/^#?([a-fA-F0-9]){6,6}\s*$/;var colorRegExp1b=/^#?([a-fA-F0-9]){3,3}\s*$/;var colorRegExp2=/^([a-zA-Z]){1}/;var colorRegExp3=/^#?([a-fA-F0-9]{1})([a-fA-F0-9]{1})([a-fA-F0-9]{1})\s*$/;for(var f=0;f<colorField.length;f++){colorField[f].value=colorField[f].value.replace(spaceRegExp,"");if(colorRegExp1a.test(colorField[f].value)){if(colorField[f].value.indexOf("#",0)){colorField[f].value="#"+colorField[f].value;validateColorFalse[v]=f;v++;}else{colorField[f].value=colorField[f].value;validateColorFalse[v]=f;v++;}}else if(colorRegExp1b.test(colorField[f].value)){colorField[f].value=colorField[f].value.replace(colorRegExp3,"$1$1$2$2$3$3");if(colorField[f].value.indexOf("#",0)){colorField[f].value="#"+colorField[f].value;validateColorFalse[v]=f;v++;}else{colorField[f].value=colorField[f].value;validateColorFalse[v]=f;v++;}}
  else if(colorRegExp2.test(colorField[f].value)){if($namedColors().searchArray(colorField[f].value)){colorField[f].value=colorField[f].value.charAt(0).toUpperCase()+colorField[f].value.substring(1,colorField[f].value.length).toLowerCase();validateColorFalse[v]=f;v++;}else colorField[f].value=colorField[f].value;}else{colorField[f].value=colorField[f].value;}$sa(colorField[f],"style","background-image:"+$getStyle(colorField[f],"background-image")+";background-repeat:no-repeat;background-position:right;"+"border-color:red;");for(j=0;j<v;j++){$sa(colorField[validateColorFalse[j]],"style","background-image:"+$getStyle(colorField[j],"background-image")+";background-repeat:no-repeat;background-position:right;"+"border-color:green;");}}for(var a=0;a<alternativeObj.length;a++){$sa(alternativeObj[a],"style","background-image:"+$getStyle(alternativeObj[a],"background-image")+";background-repeat:no-repeat;background-position:right;"+"border-color:green;");}if((colorField.length-v)>0){return false;}else return true;}
	_.$x=function(xpath,root){var doc=root?root.evaluate?root:root.ownerDocument:document,next;var got=doc.evaluate(xpath,root||doc,null,null,null),result=[];while(next=got.iterateNext())result.push(next);return result;};
	_.$xs=function(xpath,root){var doc=root?root.evaluate?root:root.ownerDocument:document,next;return doc.evaluate(xpath,root||doc, null,XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;};
_.$isInt=function(n,way){var exp;if(way===true){exp=/^[0-9]+$/;}else if(way===false){exp=/^-[0-9]+$/;}else{exp=/^-?[0-9]+$/;}return exp.test(n.toString());};
_.$isUrl=function(str){if(str.indexOf(" ")!=-1){return false;}else if(str.indexOf("http://")==-1){return false;}else if(str=="http://"){return false;}else if(str.indexOf("http://")>0){return false;}str=str.substring(7,str.length);if(str.indexOf(".")==-1){return false;}else if(str.indexOf(".")==0){return false;}else if(str.charAt(str.length-1)=="."){return false;}if(str.indexOf("/")!=-1){str=str.substring(0,str.indexOf("/"));if(str.charAt(str.length-1)=="."){return false;}}if(str.indexOf(":")!=-1){if(str.indexOf(":")==(str.length-1)){return false;}else if(str.charAt(str.indexOf(":")+1)=="."){return false;}str=str.substring(0,str.indexOf(":"));if(str.charAt(str.length-1)=="."){return false;}}return true;};
_.isTypeOf=function(variable,constructor){return eval('(typeof('+variable+')=="'+constructor+'");');};
_.what={type:{of:function(node){for(var i in is){if(is[i](node)){return i.toLowerCase();}}}}};
_.is={Null:function(a){return a===null;},Undefined:function(a){return a===undefined;},nt:function(a){return(a===null||a===undefined);},Function:function(a){return(typeof(a)==='function')?a.constructor.toString().match(/Function/)!==null:false;},String:function(a){return(typeof(a)==='string')?true:(typeof(a)==='object')?a.constructor.toString().match(/string/i)!==null:false;},Array:function(a){return(typeof(a)==='object')?a.constructor.toString().match(/array/i)!==null||a.length!==undefined:false;},Boolean:function(a){return(typeof(a)==='boolean')?true:(typeof(a)==='object')?a.constructor.toString().match(/boolean/i)!==null:false;},Date:function(a){return(typeof(a)==='date')?true:(typeof(a)==='object')?a.constructor.toString().match(/date/i)!==null:false;},HTML:function(a){return(typeof(a)==='object')?a.constructor.toString().match(/html/i)!==null:false;},
  Number:function(a){return(typeof(a)==='number')?true:(typeof(a)==='object')?a.constructor.toString().match(/Number/)!==null:false;},Object:function(a){return(typeof(a)==='object')?a.constructor.toString().match(/object/i)!==null:false;},RegExp:function(a){return(typeof(a)==='function')?a.constructor.toString().match(/regexp/i)!==null:false;}};
	// alert msg; [type: 'n'=normal / 'g'=US_log / 'c'=console] [methode: '1'=debug / '2'=info / '3'=warn / '4'=error] (use '' for empty)(on console-debug and -info no contacttext is shown)  || $alert('c',2,'test01','testtxt');
	//  Since Firebug 1.0, extensions.firebug.showChromeMessages must be set to true for GM_log messages to show up in the Firebug console.
	_.$alert=function(type,methode,error,msg){contactTxt="\nContact. : Please contact the owner/scripter about this problem.";if(typeof(console)!="undefined"&&type!='g'&&type!='n'){var consoleErrorTxt="Error Nr : "+error+" (console)\n"+"Message  : "+msg+contactTxt;var consoleInfoTxt="Error Nr : "+error+" (console)\n"+"Message  : "+msg;if(methode==1)console.debug(consoleInfoTxt);else if(methode==2)console.info(consoleInfoTxt);else if(methode==3)console.warn(consoleErrorTxt);else if(methode==4)console.error(consoleErrorTxt);else console.warn(consoleErrorTxt);}if(typeof(US_log)!="undefined"&&type!='c'&&type!='n'){US_log("Error Nr. : "+error+" (US_log)\n"+"Message : "+msg+contactTxt);}if(type!='c'&&type!='g')alert("Error Nr. : "+error+" (normal)\n"+"Message : "+msg+contactTxt);};
////////////////////////////////////////////////////////////////////////////
/** USERSCRIPT **/
	_.US_setValue=function(name,value){if(GM_setValue){return GM_setValue(name,value);}else if(PRO_setValue){return PRO_setValue(name,value);}else{}};
	_.US_getValue=function(name,defValue){if(GM_getValue){return GM_getValue(name,defValue);}else if(PRO_getValue){return PRO_getValue(name);}else{}};
	_.US_log=function(msg){if(GM_log){return GM_log(msg);}else if(PRO_log){return PRO_log(msg);}else{}};
	_.US_openInTab=function(url,flags){if(GM_openInTab){return GM_openInTab(url);}else if(PRO_openInTab){return PRO_openInTab(url,flags);}else{}};
	_.US_addStyle=function(css,documentFrame){if(GM_addStyle){return GM_addStyle(css);}else if(PRO_addStyle){return PRO_addStyle(css,documentFrame);}else{$addCSS(css);}};
	_.US_registerMenuCommand=function(commandName,commandFunc,accelKey,accelModifiers,accessKey){if(GM_registerMenuCommand){return GM_registerMenuCommand(commandName,commandFunc,accelKey,accelModifiers,accessKey);}else if(PRO_registerMenuCommand){return PRO_registerMenuCommand(accelKey,commandFunc);}else{}};
	_.US_prompt=function(label,defValue){if(PRO_prompt){return PRO_prompt(label,defValue);}else{}};
	_.PRO_documentText=function(){if(PRO_documentText){return PRO_documentText();}else{}};
	_.PRO_roundCorner=function(node,options,document){if(PRO_roundCorner){return PRO_roundCorner(node,options,document);}else{}};
	_.PRO_getLang=function(){if(PRO_getLang){return PRO_getLang();}else{}};
	_.PRO_showModalDialog=function(sURL,vArguments,sFeatures){if(PRO_showModalDialog){return PRO_showModalDialog(sURL,vArguments,sFeatures)}else{}};
	_.PRO_showModelessDialog=function(sURL,vArguments,sFeatures){if(PRO_showModelessDialog){return PRO_showModelessDialog(sURL,vArguments,sFeatures)}else{}};
	_.GM_getResourceText=function(resourceName){if(GM_getResourceText){return GM_getResourceText(resourceName);}else{}};
	_.GM_getResourceURL=function(resourceName){if(GM_getResourceURL){return GM_getResourceURL(resourceName);}else{}};
////////////////////////////////////////////////////////////////////////////



/** NAME CHANGES **/
// example:	_.$gi=function(){var args=[];for(var n=0; n<arguments.length; n++){args.push(arguments[n]);}return eval("_.$giX('"+args.join("','")+"')");};
var error="You're using an old version of US_functions or something went wrong! Please update.";
 _.$tn=function(str){alert(error);return _.$gt(str)};
 _.$meaSureMentWindow=function(way){alert(error);var way=way.toUpperCase();if(way=='H'){return Window.$height();}if(way=='W'){return Window.$width();}};
 array.prototype.searchArray=array.prototype.search;


/** FUTURE **/
function createElement(type, attrArray, evtListener, html){
	var node = document.createElement(type);

	for (var attr in attrArray) if (attrArray.hasOwnProperty(attr)){
		node.setAttribute(attr, attrArray[attr]);
	}

	if(evtListener){
		var a = evtListener.split(' ');
		node.addEventListener(a[0], eval(a[1]), eval(a[2]));
	} 
 
	if(html) 
		node.innerHTML = html;
	
	return node;
}//createElement('a', {href:"javascript:void(0)", title:"remove from updater", id:id, style:"color:#aaaaaa"}, 'click unregister false', 'remove');

function getElementsByAttribute(oElm, strTagName, strAttributeName, strAttributeValue){
	var arrElements = (strTagName == "*" && oElm.all)? oElm.all : oElm.getElementsByTagName(strTagName);
	var arrReturnElements = new Array();
	var oAttributeValue = (typeof strAttributeValue != "undefined")? new RegExp("(^|\\s)" + strAttributeValue + "(\\s|$)") : null;
	var oCurrent;
	var oAttribute;
	for(var i=0; i<arrElements.length; i++){
		oCurrent = arrElements[i];
		oAttribute = oCurrent.getAttribute && oCurrent.getAttribute(strAttributeName);
		if(typeof oAttribute == "string" && oAttribute.length > 0){
			if(typeof strAttributeValue == "undefined" || (oAttributeValue && oAttributeValue.test(oAttribute))){
				arrReturnElements.push(oCurrent);
			}
		}
	}
	return arrReturnElements;
}//http://www.robertnyman.com/2006/01/23/monday-code-giveaway-getelementsbyattribute/


function initSaveValue() {
	if (window.globalStorage) {
		glStorage = globalStorage.namedItem(nameSpace + document.domain)
		_setValue = function(name, value) {
			glStorage.setItem(name, value);
		};
		_getValue = function(name, defaultValue) {
			var data = glStorage.getItem(name);
			return (data) ? data.value : defaultValue;
		};
		_removeValue = function(name) {
			glStorage.removeItem(name);
		};
	} else if (typeof GM_setValue != "undefined") {
		_setValue = function(name, value) { GM_setValue(name, value)};
		_getValue = function(name,defaultValue) { return GM_getValue(name, defaultValue)};
		_removeValue = function(name) { GM_setValue(name, '')};
	} else {
		_setValue = function(name, value) {
			document.cookie = nameSpace + name + '=' + escape(value) + ';expires="";path=/';
		};
		_getValue = function(name, defaultValue) {
			var exp = new RegExp(nameSpace + name + "=([^;\n\r]*);?", "i");
			var data = exp.exec(document.cookie);
			if (data == null || data.length <= 1) {
			return defaultValue;	
			} else 	return unescape(data[1]);
		};
		_removeValue = function(name) {
			_setValue(name, '');
		};
	}
}


if (typeof Array.prototype.push == 'undefined'){  // IE5.0
    Array.prototype.push = function(){
        var l = this.length, i = 0, j = arguments.length;
        while (i < j) this[l++] = arguments[i++];
        return l;
    }
}

if (typeof Array.prototype.pop == 'undefined'){  // IE5.0
    Array.prototype.pop = function(){
        var l = this.length, r;
        if (l){
            r = this[--l];
            this.length = l;
        }

        return r;        
    }
}



//*** EXTRA ***//
window.US_functionsOK="v1.4 Beta";
console.log('US_functions correct imported!');
// Words: 739;
// Characters (no spaces): 23.698;
// Characters (with spaces): 24.429;
// Lines: 152;