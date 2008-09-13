/*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ==UserScript===
// @name            aaaa_US_functions
// @author          Jerone UserScript Productions
// @namespace       http://userscripts.org/users/31497
// @homepage        http://jervw.freehostia.com/artikels/art006/US_functions.html
// @description     Part 1 of US_framework
// @description     Adds all needed functions.
// @description     US_functions v1.9.5 Beta
// @copyright       2007 - 2008 Jerone
// @version         v1.9.5 Beta
// @browser         FF3
// @include         *
// ==/UserScript==
////////////////////////////////////////////////////////////////////////////
// ToC:
// - Copyrights
// - History
// - Todo List
// - Usage Instructions
// - User Settings
// - Functions:
//   - Common
//   - Prototype
//   - Style
//   - Information
//   - Extra
//   - Userscript
// - Name Changes
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
// [+] = added; [-] = removed; [/] = fixed; [*] = updated;
// - 15-12-2007 15:00 [v1 Alpha]:
//   [+] initial release;
// - 05-01-2008 22:00 [v1.1 Beta]:
//   [*] every function;
// - 24-04-2008 18:00 [v1.2 Beta]:
//   [*] some functions;
//   [+] new functions;
// - 04-05-2008 18:00 [v1.3 Beta]:
//   [*] cleaned up code;
// - 30-05-2008 18:00 [v1.4 Beta]:
//   [/] framework check;
// - 20-06-2008 12:00 [v1.5 Beta]:
//   [+] $w=window;
// - 21-06-2008 12:00 [v1.6 Beta]:
//   [+] support for frames;
// - 22-06-2008 12:00 [v1.6.1 Beta]:
//   [*] cleaned up code;
// - 23-06-2008 12:00 [v1.7 Alpha]:
//   [/] problem with custom prototypes;
// - 08-08-2008 16:00 [v1.8 Alpha]:
//   [+] a lot new functions;
// - 11-08-2008 16:00 [v1.8.1 Beta]:
//   [*] renamed array.prototype.removeDuplicates to array.prototype.unique;
// - 16-08-2008 14:00 [v1.9 Alpha]:
//   [/] bug for FF3;
// - 19-08-2008 16:30 [v1.9.1 Beta]:
//   [/] Window.$scrollbar.$width;
// - 20-08-2008 12:00 [v1.9.2 Beta]:
//   [*] improved $addCSS;
// - 23-08-2008 12:00 [v1.9.3 Beta]:
//   [+] string.prototype.truncate;
// - 24-08-2008 17:00 [v1.9.4 Beta]:
//   [/] problem with inherit of prototypes;
// - 11-09-2008 11:45 [v1.9.5 Beta]:
//   [+] append first;
// -      -2008       [];
//   [*] browser detect with Google Chrome;
////////////////////////////////////////////////////////////////////////////
// Todo:
// - add US_log();
/*//////////////////////////////////////////////////////////////////////////



//*** USAGE INSTRUCTIONS ***//
// PROTOTYPE SCRIPT
// This script extends the prototype types.
// Common examples of prototype types are Array, Number, Object and String.
// You can choose from which prototype you need from the list below (see $prototype).
// Add the following code to your script and fill the correct information in, like below:
//  (please note the special characters and there places, like: ,"'(){}:; etc...)
/*\
	eval(US_functions.prototype({
		Array:	["search","clone","switch","exist"],	// prototype with it's functions;
		Number:	["between","repeat","replace"],
		Object:	["clone"],
		String:	[]
	}));
\*/
// Note: eval() is considered evil, but this script need it to work. 
// Please note that the last prototype hasn't got a comma at the end!



//*** USER SETTINGS ***//
// - none



//*** FUNCTIONS ***//
/** COMMON **/
window._=window;
_.$w=_;
_.$n=navigator;
_.$d=document;
_.$db=$d.body;
_.$2D=new Date();
_.$now=$2D.getTime();
_.$uA=$n.userAgent;
_.$gi=function(str){var doc=arguments[1]?arguments[1]:$d;if(what.type.of(str)=="array"){var nwArr=[];for(var i=0;i<str.length;i++){nwArr[i]=$gi(str[i],(arguments[1]?arguments[1]:false));}return nwArr;}else{if($d.getElementById){return doc.getElementById(str);}else if($d.all){return doc.all[str];}else if($d.layers){function getNodeNN4(node,str){var obj=node.layers,foundLayer;for(var i=0;i<obj.length;i++){if(obj[i].id==str){foundLayer=obj[i];}else if(obj[i].layers.length){var tmp=getNodeNN4(obj[i],str);}if(tmp){foundLayer=tmp;}}return foundLayer;};return getNodeNN4(doc,str);}}};
_.$gn=function(str){var doc=arguments[1]?arguments[1]:$d;return doc.getElementsByName(str);};
_.$gt=function(str){var doc=arguments[1]?arguments[1]:$d;if($d.getElementsByTagName){return doc.getElementsByTagName(str);}else if($d.all){return doc.all.tags(str);}else return [];};
_.$gb=function(node,tag,attr,value){var elems=(tag=="*"&&node.all)?node.all:node.getElementsByTagName(tag),returnElems=new Array(),nValue=(typeof value!="undefined")?new RegExp("(^|\\s)"+value+"(\\s|$)"):null,nAttr,cur;for(var i=0;i<elems.length;i++){cur=elems[i];nAttr=cur.getAttribute&&$ga(cur,attr);if(typeof nAttr=="string"&&nAttr.length>0){if(typeof value=="undefined"||(nValue&&nValue.test(nAttr))){returnElems.push(cur);}}}return returnElems;};
_.$gc=function(node,class,tag){return $getElementsByClassName(node,class,tag)};
_.$gv=function(str){
	var matches = [],
		tags = $gt("*",(arguments[1]?arguments[1]:false));
	for(var i=0; i<tags.length; i++){
		if(tags[i].value && tags[i].value===str){
			matches.push(tags[i]);
		}
	}
	return matches;
};
_.$ga=function(node,attr,flag){var isIE=/*@cc_on!@*/false,a=attr;if(isIE){switch(a.toLowerCase()){case"acceptcharset":a="acceptCharset";break;case"accesskey":return node.accessKey;break;case"allowtransparency":a="allowTransparency";break;case"bgcolor":a="bgColor";break;case"cellpadding":a="cellPadding";break;case"cellspacing":a="cellSpacing";break;case"checked":a="defaultChecked";break;case"class":a="className";break;case"colspan":a="colSpan";break;case"defaultchecked":a="defaultChecked";break;case"defaultselected":a="defaultSelected";break;case"defaultvalue":a="defaultValue";break;case"float":a="cssFloat";break;case"for":a="htmlFor";break;case"type":return node.type;break;case"frameborder":a="frameBorder";break;case"hspace":a="hSpace";break;case"longdesc":a="longDesc";break;case"maxlength":return node.maxLength;break;
  case"marginwidth":a="marginWidth";break;case"marginheight":a="marginHeight";break;case"noresize":a="noResize";break;case"noshade":a="noShade";break;case"readonly":a="readOnly";break;case"rowspan":a="rowSpan";break;case"style":return node.style.cssText;brak;case"tabindex":a="tabIndex";break;case"valign":a="vAlign";break;case"vspace":a="vSpace";break;}}return node.getAttribute(a,flag);};
_.$sa=function(node,attr,val,flag){var isIE=/*@cc_on!@*/false,a=attr;if(isIE){switch(a.toLowerCase()){case"acceptcharset":a="acceptCharset";break;case"accesskey":node.accessKey=val;return node;break;case"allowtransparency":a="allowTransparency";break;case"bgcolor":a="bgColor";break;case"cellpadding":a="cellPadding";break;case"cellspacing":a="cellSpacing";break;case"checked":a="defaultChecked";break;case"class":a="className";break;case"colspan":a="colSpan";break;case"defaultchecked":a="defaultChecked";break;case"defaultselected":a="defaultSelected";break;case"defaultvalue":a="defaultValue";break;case"float":a="cssFloat";break;case"for":a="htmlFor";break;case"name":node.outerHTML=node.outerHTML.replace(/name=[a-zA-Z]+/," name="+val+" ");return;break;case"type":node.outerHTML=node.outerHTML.replace(/type=[a-zA-Z]+/," type="+val+" ");return;break;case"frameborder":a="frameBorder";break;case"hspace":a="hSpace";break;case"longdesc":a="longDesc";break;case"maxlength":node.maxLength=val;return node;break;
  case"marginwidth":a="marginWidth";break;case"marginheight":a="marginHeight";break;case"noresize":a="noResize";break;case"noshade":a="noShade";break;case"readonly":a="readOnly";break;case"rowspan":a="rowSpan";break;case"style":node.style.cssText=val;return node;break;case"tabindex":a="tabIndex";break;case"valign":a="vAlign";break;case"vspace":a="vSpace";break;}}if(what.type.of(node)=="array"){for(var i=0;i<node.length;i++){node[i].setAttribute(a,val,flag);}}else{node.setAttribute(a,val,flag);}return node;};
_.$ra=function(node,attr,flag){var isIE=/*@cc_on!@*/false,a=attr;if(isIE){switch(a.toLowerCase()){case"acceptcharset":a="acceptCharset";break;case"accesskey":node.accessKey="";return;break;case"allowtransparency":a="allowTransparency";break;case"bgcolor":a="bgColor";break;case"cellpadding":a="cellPadding";break;case"cellspacing":a="cellSpacing";break;case"checked":a="defaultChecked";break;case"class":a="className";break;case"colspan":a="colSpan";break;case"defaultchecked":a="defaultChecked";break;case"defaultselected":a="defaultSelected";break;case"defaultvalue":a="defaultValue";break;case"float":a="cssFloat";break;case"for":a="htmlFor";break;case"name":node.outerHTML=node.outerHTML.replace(/name=[a-zA-Z]+/," ");return;break;case"type":node.outerHTML=node.outerHTML.replace(/type=[a-zA-Z]+/," ");return;break;case"frameborder":a="frameBorder";break;case"hspace":a="hSpace";break;case"longdesc":a="longDesc";break;case"maxlength":node.maxLength="";return;break;
  case"marginwidth":a="marginWidth";break;case"marginheight":a="marginHeight";break;case"noresize":a="noResize";break;case"noshade":a="noShade";break;case"readonly":a="readOnly";break;case"rowspan":a="rowSpan";break;case"style":node.style.cssText="";return;break;case"tabindex":a="tabIndex";break;case"valign":a="vAlign";break;case"vspace":a="vSpace";break;}}if(what.type.of(node)=="array"){for(var i=0;i<node.length;i++){node[i].removeAttribute(a,flag);}}else{node.removeAttribute(a,flag);}return node;};_.$ce=function(str){var doc=arguments[1]?arguments[1]:$d;return doc.createElement(str);};
_.$ct=function(str){var doc=arguments[1]?arguments[1]:$d;return doc.createTextNode(str);};
_.$ih=function(node,HTML){return node.innerHTML=HTML;};
_.$ac=function(node,nNode){return node.appendChild(nNode);};
_.$af=function(node,nNode){return node.insertBefore(nNode,node.firstChild);};
_.$ia=function(node,nNode){return node.parentNode.insertBefore(nNode,node.nextSibling);};
_.$ib=function(node,nNode){return node.parentNode.insertBefore(nNode,node);};
_.$re=function(node){return node.parentNode.removeChild(node);};
_.$rc=function(node){var childs=[];while(node.hasChildNodes()){node.removeChild(node.firstChild);childs.push(node.firstChild);}return childs;};
////////////////////////////////////////////////////////////////////////////
/** PROTOTYPE **/
_.US_functions={prototype:function(a){var b="Object.extend=function(a,b){for(var c in b)a[c]=b[c];return a;};";for(var y in a){var c="",d=a[y];for(var z in d){c+=d[z]+":"+y.toLowerCase()+".prototype."+d[z]+(d.length-1>z?",":"");}b+="Object.extend("+y+".prototype,{"+c+"});";}return b;}};_.number={prototype:{}};_.string={prototype:{}};_.array={prototype:{}};_.object={prototype:{}};
 array.prototype.clone=function(){var a=new Array();for(var property in this){a[property]=typeof(this[property])=='object'?this[property].clone():this[property];}return a;};
 array.prototype.compare=function(arr){if(this.length!=arr.length)return false;for(var i=0;i<arr.length;i++){if(this[i].compare){if(!this[i].compare(arr[i]))return false;else continue;}if(this[i]!=arr[i])return false;}return true;};if(typeof Array.prototype.push!="function"){Array.prototype.push=ArrayPush;function ArrayPush(value){this[this.length]=value;}}
 array.prototype.empty=function(){for(var i=0;i<=this.length;i++){this.shift();}return this;};
 array.prototype.exist=function(){for(var i=0;i<this.length;i++){if(what.type.of(this[i])!='node'){return false;}}return true;};
 array.prototype.find=function(str){var returnArr=false;for(var i=0;i<this.length;i++){if(typeof(str)=='function'){if(str.test(this[i])){if(!returnArr){returnArr=[];}returnArr.push(i);}}else{if(this[i]===str){if(!returnArr){returnArr=[];}returnArr.push(i);}}}return returnArr;};
 array.prototype.remove=function(from,to){var rest=this.slice((to||from)+1||this.length);this.length=from<0?this.length+from:from;return this.push.apply(this,rest);};
 array.prototype.unique=function(){for(var i=1;i<this.length;i++){if(this[i][0]==this[i-1][0]){this.splice(i,1);}}return this;};
 array.prototype.replace=function(exp,str){for(var i in this){if(this[i].replace){this[i].replace(exp,str);}while(this[i].toString().match(exp)){var isN=typeof(this[i])=="number"&&typeof(str)=="number";this[i]=this[i].toString().replace(exp,str);if(isN)this[i]=Number(this[i]);}}return this;};
 array.prototype.search=function(str,caseInsens,ignoreSpaces){var inArr=false,nArr=[];for(var i=0;i<this.length;i++){if(what.type.of(this[i])=="array"){inArr=this[i].search(str,caseInsens,ignoreSpaces);}else{nArr[i]=this[i];if(caseInsens!=false){if(typeof(str)=="string"){str=str.toLowerCase();}if(typeof(nArr[i])=="string"){nArr[i]=nArr[i].toLowerCase();}}if(ignoreSpaces!=false){if(typeof(str)=="string"){str=str.replace(/\s+/g,"");}if(typeof(nArr[i])=="string"){nArr[i]=nArr[i].replace(/\s+/g,"");}}if(nArr[i]===str){inArr=true;break;}}}return inArr;};
 array.prototype.switch=function(x,y){this.splice(y+1,0,this.slice(x,x+1)[0]);this.splice(x,1,this.splice(y,1)[0]);return this;};
 number.prototype.between=function(min,max){return(min<=this&&this<max);};
 number.prototype.repeat=function(n){return Number(new Array(n+1).join(this));};
 number.prototype.replace=function(exp,n){return Number(this.toString().replace(exp,n.toString()));}
 object.prototype.clone=function(){var o=new Object();for(var property in this){o[property]=typeof(this[property])=='object'?this[property].clone():this[property];}return o;};
 string.prototype.firstLetterCapital=function(){return this.toString().substr(0,1).toUpperCase()+this.toString().toLowerCase().substr(1,this.toString().length);};
 string.prototype.html2Entities=function(){return this.replace(/[^\x09\x0A\x0D\x20-\x7F]|[\x21-\x2F]|[\x3A-\x40]|[\x5B-\x60]/g,function(e){return '&#'+e.charCodeAt(0)+';'});};
 string.prototype.repeat=function(n){return new Array(n+1).join(this);};
 string.prototype.strip=function(exp){return this.replace(exp?exp:/\s/g,"");};
 string.prototype.toCamelCase=function(){return this.toString().replace(/([A-Z]+)/g,function(m,l){return l.substr(0,1).toUpperCase()+l.toLowerCase().substr(1,l.length);}).replace(/[\-_\s](.)/g,function(m,l){return l.toUpperCase();});};
 string.prototype.trim=function(){return this.replace(/^\s\s*/,'').replace(/\s\s*$/,'');};
 string.prototype.truncate=function(n,ellipsis){return this.substring(0,(ellipsis!==false&&this.length>n?n-3:n))+(ellipsis!==false&&this.length>n?(typeof ellipsis=="string"?ellipsis:".").repeat(3):"");};
eval(US_functions.prototype({Number:["between"/*used in $timeDateWords*/],String:["toCamelCase"/*used in $getStyle*/,"repeat"/*used in truncate()*/],Array:["search"],Object:[]}));
////////////////////////////////////////////////////////////////////////////
/** STYLE **/
_.$addCSS=function(css){if(typeof US_addStyle!="undefined"){GM_addStyle(css);}else if(typeof addStyle!="undefined"){addStyle(css);}else{var head=$gt("HEAD",(arguments[1]?arguments[1]:false)),node=$ce("STYLE");node.type="text/css";$ih(node,css);$ac(head[0],node);}};
_.$getStyle=function(node,attr){var doc=arguments[2]?arguments[2]:$d;if($d.defaultView&&$d.defaultView.getComputedStyle){return doc.defaultView.getComputedStyle(node,null).getPropertyValue(attr);}else if(node.currentStyle){return node.currentStyle[attr.toCamelCase()];}};
_.$setReturnOpacity=function(n){return "opacity:"+(n/100)+"; filter:alpha(opacity="+n+"); filter:progid:DXImageTransform.Microsoft.Alpha(opacity="+n+"); -moz-opacity:"+(n/100)+"; -khtml-opacity:"+(n/100)+";";};
_.$setOpacity=function(node,n){var node=node.style;node.opacity=(n/100);node.filter="alpha(opacity="+n+")";node.filter="progid:DXImageTransform.Microsoft.Alpha(opacity="+n+")";node.MozOpacity=(n/100);node.KhtmlOpacity=(n/100);};
_.$hs=function(node,way,riturn,inlineTable){hsDisplayObj=inlineTable?"":"block";if(riturn){if(way==1){if(node.style.display=="block"||node.style.display=="inline-table"||node.style.visibility=="visible"||!(node.style.display=="none"||node.style.visibility=="hidden")){return true;}else return false;}else if(way==2||way==0){if(node.style.display=="none"||node.style.visibility=="hidden"){return true;}else return false;}else if(way==3){$alert('',4,'$hs01','There is no toggle return');return null;}}else{if(way==1){node.style.display=hsDisplayObj;node.style.visibility="visible";}else if(way==2||way==0){node.style.display="none";node.style.visibility="hidden";}else if(way==3){if(node.style.display=="none"||node.style.visibility=="hidden"){node.style.display=hsDisplayObj;node.style.visibility="visible";}else{node.style.display="none";node.style.visibility="hidden";}}return node;}};
_.$opacityFadeIn=function(node,start,end,time,steps,fnFinish,fnBusy){if(start<end){$setOpacity(node,start);if(fnBusy&&typeof(fnBusy)=="function"){fnBusy();}var $opacityFadeInTimer=$w.setTimeout(function(){start+=(steps);$opacityFadeIn(node,start,end,time,steps,fnFinish,fnBusy)},time);}else if(start>=end){if(fnFinish&&typeof(fnFinish)=="function"){fnFinish();}}};
_.$opacityFadeOut=function(node,start,end,time,steps,fnFinish,fnBusy){if(start>end){$setOpacity(node,start);if(fnBusy&&typeof(fnBusy)=="function"){fnBusy();}var $opacityFadeOutTimer=$w.setTimeout(function(){start-=(steps);$opacityFadeOut(node,start,end,time,steps,fnFinish,fnBusy)},time);}else if(start<=end){if(fnFinish&&typeof(fnFinish)=="function"){fnFinish();}}};
////////////////////////////////////////////////////////////////////////////
/** INFORMATION **/
_.Navigator={$browser:function(){return this.searchString(this.dataBrowser)||"unknown";},$version:function(){return this.searchVersion($uA)||this.searchVersion($n.appVersion)||"unknown";},$OS:function(){return this.searchString(this.dataOS)||"unknown";},searchString:function(data){for(var i=0;i<data.length;i++){var dataString=data[i].str;var dataProp=data[i].obj;this.versionString=data[i].nr||data[i].id;if(dataString){if(dataString.indexOf(data[i].sub)!=-1)return data[i].id;}else if(dataProp){return data[i].id;}}},searchVersion:function(dataString){var index=dataString.indexOf(this.versionString);if(index==-1)return;return /^[\d\.]*/.exec(dataString.substring(index+this.versionString.length+1));},
  dataBrowser:[{str:$uA,sub:"Chrome",id:"Chrome"},{str:$uA,sub:"OmniWeb",nr:"OmniWeb/",id:"OmniWeb"},{str:$n.vendor,sub:"Apple",id:"Safari"},{obj:$w.opera,id:"Opera"},{str:$n.vendor,sub:"iCab",id:"iCab"},{str:$n.vendor,sub:"KDE",id:"Konqueror"},{str:$uA,sub:"K-Meleon",id:"K-Meleon"},{str:$uA,sub:"Firefox",id:"Firefox"},{str:$n.vendor,sub:"Camino",id:"Camino"},{str:$uA,sub:"Netscape",id:"Netscape"},{str:$uA,sub:"MSIE",id:"Explorer",nr:"MSIE"},{str:$uA,sub:"Gecko",id:"Mozilla",nr:"rv"},{str:$uA,sub:"Mozilla",id:"Netscape",nr:"Mozilla"}],dataOS:[{str:$n.platform,sub:"Win",id:"Windows"},{str:$n.platform,sub:"Mac",id:"Mac"},{str:$n.platform,sub:"Linux",id:"Linux"}]};
_.Program={$width:function(){var win=arguments[0]?arguments[0]:$w;if(win.outerWidth){return win.outerWidth;}else return null;},$height:function(){var win=arguments[0]?arguments[0]:$w;if(win.outerHeight){return win.outerHeight;}else return null;}};
_.Window={IEscrollbar:[20,20],$width:function(bar){var doc=arguments[1]?arguments[1]:$d,win=arguments[2]?arguments[2]:$w,ww=null;if(bar===false){if(doc.documentElement&&doc.documentElement.clientWidth){ww=doc.documentElement.clientWidth;}else if(doc.body&&doc.body.clientWidth&&(doc.body.clientWidth!=doc.body.scrollWidth)){ww=doc.body.clientWidth;}}else{if(win.innerWidth){ww=win.innerWidth;}else if(doc.documentElement&&doc.documentElement.offsetWidth){ww=doc.documentElement.offsetWidth;}if(Window.$width(false,doc,win)&&ww&&(ww-Window.$width(false,doc,win))<=0){ww=ww+Window.IEscrollbar[0];}}return ww;},
  $height:function(bar){var doc=arguments[1]?arguments[1]:$d,win=arguments[2]?arguments[2]:$w,wh=null;if(bar===false){if(doc.body&&doc.body.clientHeight){wh=doc.body.clientHeight;if(win.innerHeight&&wh>win.innerHeight){wh=doc.documentElement.clientHeight;}else if(doc.documentElement&&doc.documentElement.clientHeight&&wh>doc.documentElement.clientHeight){wh=doc.documentElement.clientHeight;}}}else{if(win.innerHeight){wh=win.innerHeight;}else if(doc.documentElement&&doc.documentElement.offsetHeight){wh=doc.documentElement.offsetHeight;if(wh<=Window.$height(false,doc,win)){wh=wh+Window.IEscrollbar[1]};}}return wh;},
  $scrollbar:{$width:function(){var doc=arguments[0]?arguments[0]:$d,win=arguments[1]?arguments[1]:$w,wsw=null;if(Window.$width(false,doc,win)&&Window.$width(true,doc,win)){wsw=(Window.$width(true,doc,win)-Window.$width(false,doc,win));if(wsw<0){wsw=Window.IEscrollbar[0];}}return wsw;},$height:function(){var doc=arguments[0]?arguments[0]:$d,win=arguments[1]?arguments[1]:$w;if(Window.$height(false,doc,win)&&Window.$height(true,doc,win)){return(Window.$height(true,doc,win)-Window.$height(false,doc,win));}else return null;}}};
_.Document={$width:function(){var doc=arguments[0]?arguments[0]:$d,dw=null;if(doc.documentElement&&doc.documentElement.scrollWidth){dw=doc.documentElement.scrollWidth;if(doc.body.scrollWidth&&doc.documentElement.scrollWidth==doc.documentElement.offsetWidth){dw=doc.body.scrollWidth;}}else if(doc.body.scrollWidth){dw=doc.body.scrollWidth;}return dw;},$height:function(){var doc=arguments[0]?arguments[0]:$d,dh=null;if(doc.documentElement&&doc.documentElement.scrollHeight){dh=doc.documentElement.scrollHeight;if(doc.body.scrollHeight&&(dh==doc.documentElement.offsetHeight&&dh==doc.body.offsetHeight)){dh=doc.body.scrollHeight;}}else if(doc.body.scrollHeight){dh=doc.body.scrollHeight;}return dh;},
  $left:function(){var doc=arguments[0]?arguments[0]:$d,dl=null;if(doc.documentElement&&(doc.documentElement.scrollLeft||doc.documentElement.scrollLeft==0)){dl=doc.documentElement.scrollLeft;if((doc.body.scrollLeft||doc.body.scrollLeft==0)&&dl<=0){dl=doc.body.scrollLeft;}}else if(doc.body.scrollLeft||doc.body.scrollLeft==0){dl=doc.body.scrollLeft;}return dl;},$top:function(){var doc=arguments[0]?arguments[0]:$d,dt=null;if(doc.documentElement&&doc.documentElement.scrollTop){dt=doc.documentElement.scrollTop;if((doc.body.scrollTop||doc.body.scrollTop==0)&&dt<=0){dt=doc.body.scrollTop;}}else if(doc.body.scrollTop||doc.body.scrollTop==0){dt=doc.body.scrollTop;}return dt;},
  $right:function(){var doc=arguments[0]?arguments[0]:$d,win=arguments[1]?arguments[1]:$w;if((Document.$width(doc)||Document.$width(doc)==0)&&(Document.$left(doc)||Document.$left(doc)==0)&&(Window.$width(false,doc,win)||Window.$width(false,doc,win)==0)){return(Document.$width(doc)-Document.$left(doc)-Window.$width(false,doc,win));}else return null;},$bottom:function(){var doc=arguments[0]?arguments[0]:$d,win=arguments[1]?arguments[1]:$w;if((Document.$height(doc)||Document.$height(doc)==0)&&(Document.$top(doc)||Document.$top(doc)==0)&&(Window.$height(false,doc,win)||Window.$height(false,doc,win)==0)){return(Document.$height(doc)-Document.$top(doc)-Window.$height(false,doc,win));}else return null;}};
_.$detectDoctype=function(){var regDTD=/\s*(.*)\/\/\s*(\w*)\/\/\s*(\w*)\s+(.*)\s*\/\/\s*(\w*)\s*/gi;var regLabel=/(\w*)\s+([a-zA-Z]*)\s*([\d\.]*)\s*(\w*)/gi;$w.doctype={};doctype.registration=null;doctype.organization=null;doctype.type=null;doctype.label=[null];doctype.label.host=null;doctype.label.version=null;doctype.label.type=null;doctype.language=null;if($d.doctype){identifier=$d.doctype.publicId;}else {return false;}if(typeof(identifier)=="string" && identifier.match(regDTD)){doctype.registration=RegExp.$1?RegExp.$1:null;doctype.organization=RegExp.$2?RegExp.$2:null;doctype.type=RegExp.$3?RegExp.$3:null;doctype.label=RegExp.$4?RegExp.$4:null;doctype.language=RegExp.$5?RegExp.$5:null;if(labels=doctype.label.split(/\s*plus\s*/)){doctype.label=labels;doctype.label.host=[];doctype.label.version=[];doctype.label.type=[];for(var i=0;i<labels.length;i++){labels[i].match(regLabel);doctype.label.host.push(RegExp.$1?RegExp.$1:null);doctype.label.version.push(RegExp.$3?RegExp.$3:null);
  if(RegExp.$2){doctype.label.type.push(RegExp.$2?RegExp.$2:null);}else{doctype.label.type.push(RegExp.$4?RegExp.$4:null);}}}return true;}else{doctype.registration=false;doctype.organization=false;doctype.type=false;doctype.label=[false];doctype.label.host=false;doctype.label.version=false;doctype.label.type=false;doctype.language=false;return false;}};
////////////////////////////////////////////////////////////////////////////
/** EXTRA **/
_.$addEvent=function(node,type,fn,useCapture){if(node.addEventListener){node.addEventListener(type,fn,useCapture);}else if(node.attachEvent){node["e"+type+fn]=fn;node[type+fn]=function(){node["e"+type+fn]($w.event);};node.attachEvent("on"+type,node[type+fn]);}};
_.$removeEvent=function(node,type,fn,useCapture){if(node.removeEventListener){node.removeEventListener(type,fn,useCapture);}else if(node.detachEvent){node.detachEvent("on"+type,node[type+fn]);node[type+fn]=null;node["e"+type+fn]=null;}};
_.$timeDateWords=function(n,lang,shorten){shorten?shorten=shorten:shorten=false;var word=false,l=lang,timeUnits=[{name:l.localise(["tDW","millisecond"]),plural:l.localise(["tDW","milliseconds"]),min:0,max:1000},{name:l.localise(["tDW","second"]),plural:l.localise(["tDW","secondes"]),min:1000,max:60*1000},{name:l.localise(["tDW","minute"]),plural:l.localise(["tDW","minutes"]),min:60*1000,max:60*60*1000},{name:l.localise(["tDW","hour"]),plural:l.localise(["tDW","hours"]),min:60*60*1000,max:24*60*60*1000},{name:l.localise(["tDW","day"]),plural:l.localise(["tDW","days"]),min:24*60*60*1000,max:7*24*60*60*1000},{name:l.localise(["tDW","week"]),plural:l.localise(["tDW","weeks"]),min:7*24*60*60*1000,max:365*24*60*60*1000},{name:l.localise(["tDW","year"]),plural:l.localise(["tDW","years"]),min:365*24*60*60*1000,max:Infinity}];for(var i=0,tU=null;tU=timeUnits[i];i++){if(n.between(tU.min,tU.max)){var val=Math.floor(n/(tU.min!=0?tU.min:1));word=(val!=(1&&shorten)?val+" ":"")+(val!=1?tU.plural:tU.name);}}return word;};
_.$namedColors=function(){return new Array('AliceBlue','AntiqueWhite','Aqua','Aquamarine','Azure','Beige','Bisque','Black','BlanchedAlmond','Blue','BlueViolet','Brown','BurlyWood','CadetBlue','Chartreuse','Chocolate','Coral','CornflowerBlue','Cornsilk','Crimson','Cyan','DarkBlue','DarkCyan','DarkGoldenRod','DarkGray','DarkGreen','DarkKhaki','DarkMagenta','DarkOliveGreen','Darkorange','DarkOrchid','DarkRed','DarkSalmon','DarkSeaGreen','DarkSlateBlue','DarkSlateGray','DarkTurquoise','DarkViolet','DeepPink','DeepSkyBlue','DimGray','DodgerBlue','Feldspar','FireBrick','FloralWhite','ForestGreen','Fuchsia','Gainsboro','GhostWhite','Gold','GoldenRod','Gray','Grey','Green','GreenYellow','HoneyDew','HotPink','IndianRed','Indigo','Ivory','Khaki','Lavender','LavenderBlush','LawnGreen','LemonChiffon','LightBlue','LightCoral','LightCyan','LightGoldenRodYellow','LightGrey','LightGreen',
  'LightPink','LightSalmon','LightSeaGreen','LightSkyBlue','LightSlateBlue','LightSlateGray','LightSteelBlue','LightYellow','Lime','LimeGreen','Linen','Magenta','Maroon','MediumAquaMarine','MediumBlue','MediumOrchid','MediumPurple','MediumSeaGreen','MediumSlateBlue','MediumSpringGreen','MediumTurquoise','MediumVioletRed','MidnightBlue','MintCream','MistyRose','Moccasin','NavajoWhite','Navy','OldLace','Olive','OliveDrab','Orange','OrangeRed','Orchid','PaleGoldenRod','PaleGreen','PaleTurquoise','PaleVioletRed','PapayaWhip','PeachPuff','Peru','Pink','Plum','PowderBlue','Purple','Red','RosyBrown','RoyalBlue','SaddleBrown','Salmon','SandyBrown','SeaGreen','SeaShell','Sienna','Silver','SkyBlue','SlateBlue','SlateGray','Snow','SpringGreen','SteelBlue','Tan','Teal','Thistle','Tomato','Turquoise','Violet','VioletRed','Wheat','White','WhiteSmoke','Yellow','YellowGreen',
  'ActiveBorder','ActiveCaption','AppWorkspace','Background','ButtonFace','ButtonHighlight','ButtonShadow','ButtonText','CaptionText','GrayText','Highlight','HighlightText','InactiveBorder','InactiveCaption','InactiveCaptionText','InfoBackground','InfoText','Menu','MenuText','Scrollbar','ThreeDDarkShadow','ThreeDFace','ThreeDHighlight','ThreeDLightShadow','ThreeDShadow','Window','WindowFrame','WindowText');};
_.$validateColorInput=function(node,alternativeObj){var colorField=node;var validateColorFalse=[];var v=0;var spaceRegExp=/\s+/g;var colorRegExp1a=/^#?([a-fA-F0-9]){6,6}\s*$/;var colorRegExp1b=/^#?([a-fA-F0-9]){3,3}\s*$/;var colorRegExp2=/^([a-zA-Z]){1}/;var colorRegExp3=/^#?([a-fA-F0-9]{1})([a-fA-F0-9]{1})([a-fA-F0-9]{1})\s*$/;for(var f=0;f<colorField.length;f++){colorField[f].value=colorField[f].value.replace(spaceRegExp,"");if(colorRegExp1a.test(colorField[f].value)){if(colorField[f].value.indexOf("#",0)){colorField[f].value="#"+colorField[f].value;validateColorFalse[v]=f;v++;}else{colorField[f].value=colorField[f].value;validateColorFalse[v]=f;v++;}}else if(colorRegExp1b.test(colorField[f].value)){colorField[f].value=colorField[f].value.replace(colorRegExp3,"$1$1$2$2$3$3");if(colorField[f].value.indexOf("#",0)){colorField[f].value="#"+colorField[f].value;validateColorFalse[v]=f;v++;}else{colorField[f].value=colorField[f].value;validateColorFalse[v]=f;v++;}}
  else if(colorRegExp2.test(colorField[f].value)){if($namedColors().searchArray(colorField[f].value)){colorField[f].value=colorField[f].value.charAt(0).toUpperCase()+colorField[f].value.substring(1,colorField[f].value.length).toLowerCase();validateColorFalse[v]=f;v++;}else colorField[f].value=colorField[f].value;}else{colorField[f].value=colorField[f].value;}$sa(colorField[f],"style","background-image:"+$getStyle(colorField[f],"background-image")+";background-repeat:no-repeat;background-position:right;"+"border-color:red;");for(j=0;j<v;j++){$sa(colorField[validateColorFalse[j]],"style","background-image:"+$getStyle(colorField[j],"background-image")+";background-repeat:no-repeat;background-position:right;"+"border-color:green;");}}for(var a=0;a<alternativeObj.length;a++){$sa(alternativeObj[a],"style","background-image:"+$getStyle(alternativeObj[a],"background-image")+";background-repeat:no-repeat;background-position:right;border-color:green;");}if((colorField.length-v)>0){return false;}else return true;};
_.$x=function(xpath,root){var doc=root?root.evaluate?root:root.ownerDocument:document,next;var got=doc.evaluate(xpath,root||doc,null,null,null),result=[];while(next=got.iterateNext())result.push(next);return result;};
_.$xs=function(xpath,root){var doc=root?root.evaluate?root:root.ownerDocument:document,next;return doc.evaluate(xpath,root||doc,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue;};
_.$isInt=function(n,way){var exp;if(way===true){exp=/^[0-9]+$/;}else if(way===false){exp=/^-[0-9]+$/;}else{exp=/^-?[0-9]+$/;}return exp.test(n.toString());};
_.$isUrl=function(str){if(str.indexOf(" ")!=-1){return false;}else if(str.indexOf("http://")==-1){return false;}else if(str=="http://"){return false;}else if(str.indexOf("http://")>0){return false;}str=str.substring(7,str.length);if(str.indexOf(".")==-1){return false;}else if(str.indexOf(".")==0){return false;}else if(str.charAt(str.length-1)=="."){return false;}if(str.indexOf("/")!=-1){str=str.substring(0,str.indexOf("/"));if(str.charAt(str.length-1)=="."){return false;}}if(str.indexOf(":")!=-1){if(str.indexOf(":")==(str.length-1)){return false;}else if(str.charAt(str.indexOf(":")+1)=="."){return false;}str=str.substring(0,str.indexOf(":"));if(str.charAt(str.length-1)=="."){return false;}}return true;};
_.$getElementsByClassName=function(node,class,tag){if($d.getElementsByClassName){getElementsByClassName=function(node,class,tag){var elems=node.getElementsByClassName(class),nodeName=(tag)?new RegExp("\\b"+tag+"\\b","i"):null,returnElems=[],cur;for(var i=0;i<elems.length;i++){cur=elems[i];if(!nodeName||nodeName.test(cur.nodeName)){returnElems.push(cur);}}return returnElems;};}else if($d.evaluate){
   getElementsByClassName=function(node,class,tag){tag=tag||"*";var classes=class.split(" "),classes2Check="",xhtmlNamespace="http://www.w3.org/1999/xhtml",namespaceResolver=($d.documentElement.namespaceURI === xhtmlNamespace)?xhtmlNamespace:null,returnElems=[],elems;for(var j=0;j<classes.length;j++){classes2Check+="[contains(concat(' ',@class,' '),' "+classes[j]+" ')]";}try{elems=$d.evaluate(".//"+tag+classes2Check,node,namespaceResolver,0,null);}catch(e){elems=$d.evaluate(".//"+tag+classes2Check,node,null,0,null);}while((node=elems.iterateNext())){returnElems.push(node);}return returnElems;};}else{
   getElementsByClassName=function(node,class,tag){tag=tag||"*";var classes=class.split(" "),classes2Check=[],elems=(tag==="*"&&node.all)?node.all:node.getElementsByTagName(tag),cur,returnElems=[],match;for(var k=0;k<classes.length;k++){classes2Check.push(new RegExp("(^|\\s)"+classes[k]+"(\\s|$)"));}for(var l=0;l<elems.length;l++){cur=elems[l];match=false;for(var m=0;m<classes2Check.length;m++){match=classes2Check[m].test(cur.class);if(!match){break;}}if(match){returnElems.push(cur);}}return returnElems;};}return getElementsByClassName(node,class,tag);};
_.isTypeOf=function(variable,constructor){return eval('(typeof('+variable+')=="'+constructor+'");');};
_.what={type:{of:function(node){for(var i in is){if(is[i](node)){return i.toLowerCase();}}}}};_.is={Null:function(a){return a===null;},Undefined:function(a){return a===undefined;},nt:function(a){return(a===null||a===undefined);},Node:function(a){return(typeof(a)==='object')?typeof(a.constructor)==='undefined':false;},Function:function(a){return(typeof(a)==='function')?a.constructor.toString().match(/Function/)!==null:false;},String:function(a){return(typeof(a)==='string')?true:(typeof(a)==='object')?a.constructor.toString().match(/string/i)!==null:false;},Array:function(a){return(typeof(a)==='object')?a.constructor.toString().match(/array/i)!==null||a.length!==undefined:false;},Boolean:function(a){return(typeof(a)==='boolean')?true:(typeof(a)==='object')?a.constructor.toString().match(/boolean/i)!==null:false;},Date:function(a){return(typeof(a)==='date')?true:(typeof(a)==='object')?a.constructor.toString().match(/date/i)!==null:false;},
  HTML:function(a){return(typeof(a)==='object')?a.constructor.toString().match(/html/i)!==null:false;},Number:function(a){return(typeof(a)==='number')?true:(typeof(a)==='object')?a.constructor.toString().match(/Number/)!==null:false;},Object:function(a){return(typeof(a)==='object')?a.constructor.toString().match(/object/i)!==null:false;},RegExp:function(a){return(typeof(a)==='function')?a.constructor.toString().match(/regexp/i)!==null:false;}};
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



//*** NAME CHANGES ***//
// example:	_.$gi=function(){var args=[];for(var n=0; n<arguments.length; n++){args.push(arguments[n]);}return eval("_.$giX('"+args.join("','")+"')");};
var error="You're using an old version of US_functions or something went wrong! Please update.";
 _.$tn=function(str){alert(error);return _.$gt(str)};
 _.$meaSureMentWindow=function(way){alert(error);var way=way.toUpperCase();if(way=='H'){return Window.$height();}if(way=='W'){return Window.$width();}};
 array.prototype.searchArray=array.prototype.search;
 array.prototype.removeDuplicates=array.prototype.unique;



//*** STATISTICS ***//
window.US_functionsOK="v1.9.5 Beta";
console.log('US_functions ' + US_functionsOK + ' correct imported!');
// Words: 1.161;
// Characters (no spaces): 37.378;
// Characters (with spaces): 38.555;
// Lines: 247;