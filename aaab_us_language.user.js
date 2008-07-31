/*//////////////////////////////////////////////////////////////////////////
// ==UserScript===
// @name            aaab_US_language
// @author          Jerone UserScript Productions
// @namespace       http://userscripts.org/users/31497
// @homepage        http://jervw.freehostia.com/artikels/art006/US_language.html
// @description     Part 2 of US_framework
// @description     Translate strings in a language.
// @description     US_updater v1.4 Beta
// @copyright       2007 - 2008 (See below for more)
// @version         v1.4 Beta
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
//   - Language Script
//   - Localise String
//   - Localise Replacement String
//   - All Languages
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
// - 04-05-2008: cleaned up code, added instructions [v1.1 Beta];
// - 18-05-2008: fixed wrongly usage instructions example [v1.1.1 Beta];
// - 20-05-2008: updated some translations [v1.1.2 Beta];
// - 30-05-2008: fixed framework check [v1.2 Beta];
// - 03-06-2008: fixed bug with new language [v1.3 Beta];
// - 31-07-2008: cleanded up code, added current language detection [v1.4 Beta];
////////////////////////////////////////////////////////////////////////////
// Todo:
// - option to maximize number of characters to a string;
////////////////////////////////////////////////////////////////////////////
// Note:
// - This script does NOT work without my other script: 
//   - US_functions => http://userscripts.org/scripts/show/16142
/*//////////////////////////////////////////////////////////////////////////



//*** FRAMEWORK CHECK ***//
// Nothing to change here!!!
var z="US_language";  // current script name;
var n1="1.4";  // minimum US_functions version;
var m1="The following script doesn't exist, is disabled or something went wrong:\n	",m2=z+" only works with a newer version of the following script:\n	",m3="\n\nClick 'OK' to go to the homepage of the script to download the newest version:\n	",m4=" missing or wrongly imported!",m5=" is to old!",l1="http://userscripts.org/scripts/show/16142",l2="http://userscripts.org/scripts/show/16143",l3="http://userscripts.org/scripts/show/16144",u="undefined",f=false,t=true,o=null,w=window;if(typeof(US_functionsOK)==u){l('US_functions'+m4);a("US_functions",l1,1);}else if(US_functionsOK===f||g(n1,US_functionsOK)){l('US_functions'+m5);a("US_functions",l1,2);}
function a(b,c,d){var e=confirm(((d==2)?m2:m1)+b+m3+c);if(e){GM_openInTab(c);}x();}function x(){w.US_language=function(){};w.US_update=function(){};return;}function g(h,i){r=/([\d.]+)/i;if(r.test(i)==f){return t;}i.match(r);is=RegExp.$1.split(".");h.match(r);hs=RegExp.$1.split(".");var j=f,k=f;for(var ii=0;ii<Math.max(is.length,hs.length);ii++){var h1=hs[ii],i1=is[ii];if(h1==u||h1==""||h1==o){h1=0;}if(i1==u||i1==""||i1==o){i1=0;}if(i1<h1&&!k){j=t;}if(i1>h1){k=t;}}return j;}function l(m){console.log(m);};



//*** USAGE INSTRUCTIONS ***//
// LANGUAGE SCRIPT
// This script lets you return a translated version of a needed string.
// Translate strings in different languages, choose which language you want to use and import that string in your script.
// There's also an option to use the navigator language. If an object string doesn't exist it will return the default string.
// Add the following code to your script and fill the correct information in, like below:
//  (please note the special characters and there places, like: ,"'(){}:; etc...)
/*\
	language=new US_language({
		langMod:	"navigator",		// ["navigator"] use navigator language; 
										// [string LANGUAGE SHORT] use specified language;	
		locals : {						// (OPTIONAL) add new translations:
			'en' : {						// [object {string LANGUAGE SHORT : object},{string LANGUAGE SHORT : object},etc...] language name 1:
				'test1' : {						// [object {string : object},{string : object},etc...] global object 1:
					'test1a'	: 'test1a',			// [object {string : string},{string : string},etc...] string object 1;
					'test1b'	: 'test1b',			// [object {string : string},{string : string},etc...] string object 2;
				},
				'test2' : {						// [object {string : object},{string : object},etc...] global object 1:
					'test2a'	: 'test2a',			// [object {string : string},{string : string},etc...] string object 1;
					'test2b'	: 'test2b',			// [object {string : string},{string : string},etc...] string object 2;
			}},
			'nl' : {						// [object {string LANGUAGE SHORT : object},{string LANGUAGE SHORT : object},etc...] language name 2:
				'test1' : {						// [object {string : object},{string : object},etc...] global object 1:
					'test1a'	: 'test1a',			// [object {string : string},{string : string},etc...] string object 1;
					'test1b'	: 'test1b',			// [object {string : string},{string : string},etc...] string object 2;
				},
				'test2' : {						// [object {string : object},{string : object},etc...] global object 1:
					'test2a'	: 'test2a',			// [object {string : string},{string : string},etc...] string object 1;
					'test2b'	: 'test2b',			// [object {string : string},{string : string},etc...] string object 2;
	}}}});
\*/
// Note: newly added translations/locals are only available in other scripts when they are lower in the tree!
////////////////////////////////////////////////////////////////////////////
// LOCALISE STRING
// Add the following code to your script where you want the translated string be placed:
// (the word 'language' needs to be the same as above used, but can be anything) 
/*\
	language.localise([					// [array [string,string,etc...]] referred object names:
						'common',			// [string] global object 1;
						'languageLong']		// [string] string object 1;
	);
\*/
// I suggest you use this code: language.localise(['common','languageLong']);
////////////////////////////////////////////////////////////////////////////
// LOCALISE REPLACEMENT STRING
// In addition to the above code you can insert some variables into a string.
// An example of such a string: "Update @1@ with version @version@ to version @3@?";
// (the word 'language' needs to be the same as above used, but can be anything) 
/*\
	language.localise([					// [array [string,string,etc...]] referred object names:
						'USU',				// [string] global object 1;
						'upDate']			// [string] string object 1;
					  ,{				// (OPTIONAL) [object {string : string},{string : string},etc...] add replacements strings:
						'1' :				// [string] refers to @1@;
						'script 1',			// [string] replacement string;
						'version' :			// [string] refers to @version@;
						'v2 Beta'}			// [string] replacement string;
	);
\*/
// I suggest you use this code: language.localise(['USU','upDate'],{'1':'script 1','version':'v2 Beta'});
// Note: the 3rd replacement string in above example wasn't filled-in in above code,
//  so an empty string returns: "Update script 1 with version v2 Beta to version ?";
////////////////////////////////////////////////////////////////////////////
// ALL LANGUAGES
// If you want to show all languages available add the following code:
// (the word 'language' needs to be the same as above used, but can be anything) 
/*\
	language.all();						// returns array of all object languages available;
\*/
////////////////////////////////////////////////////////////////////////////
// CURRENT LANGUAGE
// If you want to know the language that is used add the following code:
// (the word 'language' needs to be the same as above used, but can be anything) 
/*\
	language.current();					// returns string of current used languages;
\*/



//*** USER SETTINGS ***//
// All settings made here will override the settings made in the userscripts itself (OPTIONAL)!
var GMLlanguageMod		= "";		// ["navigator"] always use navigator language,;
									// string LANGUAGE SHORT] always use specified language;	
									// [""] script depended;



//*** DEFAULT SETTINGS ***//
// Only change things here if you know what you're doing!
var GMLlanguageDefault	= "en";		// [string language short] default language;



//*** USER SCRIPT ***//
// Only change things here if you know what you're doing!
window.US_language = function(script){
	if(script){this.init(script);}
};
US_language.prototype = {
	lang : (typeof(GMLlanguageDefault)!="undefined"?GMLlanguageDefault:"en").toLowerCase(),
	navi : window.navigator.language.substr(0,2).toLowerCase(),
	init : function(script){
		if(typeof(GMLlanguageMod)!="undefined" && GMLlanguageMod!=undefined && GMLlanguageMod!=null && GMLlanguageMod!=""){
			GMLlanguage = GMLlanguageMod.toLowerCase();
		}
		else if(typeof(script.langMod)!="undefined" && script.langMod!=undefined && script.langMod!=null && script.langMod!=""){
			GMLlanguage = script.langMod.toLowerCase();
		}
		else{
			GMLlanguage = "en";
		}
		
		if(GMLlanguage=='navigator' || GMLlanguage=='browser'){
			GMLlanguage = this.navi;
		}

		this.lang = (GMLlanguage && (this.locals.hasOwnProperty(GMLlanguage) || GMLlanguage in this.locals)) ? GMLlanguage : (typeof(GMLlanguageDefault)!="undefined"?GMLlanguageDefault:"en").toLowerCase();
		
		if(script.locals){
			for(var lang in script.locals){
				for(var key in script.locals[lang]){
					if(!this.locals[lang]){
						this.locals[lang] = script.locals[lang];
					}
					this.locals[lang][key] = script.locals[lang][key];
	}	}	}	},
	localise : function(string,params){
		if(this.lang){
			var currentLang = this.locals[this.lang];
			if(!currentLang){
				currentLang = this.locals[(typeof(GMLlanguageDefault)!="undefined"?GMLlanguageDefault:"en").toLowerCase()];
			}
			
			var loca = currentLang[string[0]];
			if(!loca){
				loca = this.locals[(typeof(GMLlanguageDefault)!="undefined"?GMLlanguageDefault:"en").toLowerCase()][string[0]];
			} 
			if(!loca){
				return 'Could not find: \"'+string[0]+'\".\nPlease contact the scriptwriter about this.';
			}
			
			var local = loca[string[1]];
			if(!local){
				local = this.locals[(typeof(GMLlanguageDefault)!="undefined"?GMLlanguageDefault:"en").toLowerCase()][string[0]][string[1]];
			} 
			if(!local){
				return 'Could not find: \"'+string+'\".\nPlease contact the scriptwriter about this.';
			}
			
			while(matches = /@([^@]+)@/g.exec(local)){
				if(matches[1]){
					var regexp = new RegExp('@'+matches[1]+'@','g');
					if(params[matches[1]]){
						local = local.replace(regexp,params[matches[1]].toString());
					}
					else{
						local = local.replace(regexp,'');
			}	}	}
			return local;
		}
		else return undefined;
	},
	all : function(){
		allLanguages=[];
		for(var lan in this.locals){
			allLanguages.push(lan);
		}
		return allLanguages;
	},
	current : function(){
		return this.lang;
	},
	locals : {
		'en' : {
			'language' : {
				'languageShort'	: 'en',
				'languageLong'	: 'English',
				'translator'	: 'Jerone'},
			'common' : {
				'ok'			: 'OK',
				'apply'			: 'Apply',
				'cancel'		: 'Cancel',
				'reset'			: 'Reset'},
			'tDW' : {
				'millisecond'	: 'millisecond',	'milliseconds'	: 'milliseconds',
				'second'		: 'second',			'seconds'		: 'seconds',
				'minute'		: 'minute',			'minutes'		: 'minutes',
				'hour'			: 'hour',			'hours'			: 'hours',
				'day'			: 'day',			'days'			: 'days',
				'week'			: 'week',			'weeks'			: 'weeks',
				'year'			: 'year',			'years'			: 'years'},
			'USU' : {
				'notYetDefined'	: 'Not yet defined',
				'upDate'		: "Update @1@ with version @2@ to version @3@?",
				'noUpdate'		: "You'll be informed again when you visit this website again after @1@.",
				'lower'			: 'is lower then',
				'equel'			: 'is equal to',
				'higher'		: 'is higher then',
				'this'			: 'this',
				'server'		: 'server'}},
		'nl' : {
			'common' : {
				'languageShort'	: 'nl',
				'languageLong'	: 'Nederlands',
				'translator'	: 'Jerone'},
			'common' : {
				'ok'			: 'OK',
				'apply'			: 'Toepassen',
				'cancel'		: 'Annuleren',
				'reset'			: 'Herstellen'},
			'tDW' : {
				'millisecond'	: 'milliseconde',	'milliseconds'	: 'milliseconden',
				'second'		: 'seconde',		'seconds'		: 'seconden',
				'minute'		: 'minuut',			'minutes'		: 'minuten',
				'hour'			: 'uur',			'hours'			: 'uren',
				'day'			: 'dag',			'days'			: 'dagen',
				'week'			: 'week',			'weeks'			: 'weken',
				'year'			: 'jaar',			'years'			: 'jaren'},
			'USU' : {
				'notYetDefined'	: 'Nog niet gespecificeerd',
				'upDate'		: "Update @1@ met versie @2@ naar versie @3@?",
				'noUpdate'		: "Je wordt opnieuw geïnformeerd zodra je deze site weer bezoekt na @1@.",
				'lower'			: 'is lager dan',
				'equel'			: 'is gelijk aan',
				'higher'		: 'is hoger dan',
				'this'			: 'deze',
				'server'		: 'server'
}	}	}	};



//*** EXTRA ***//
window.US_languageOK="v1.4 Beta";
console.log('US_language correct imported!');
// Words: 1.597;
// Characters (no spaces): 11.403;
// Characters (with spaces): 13.628;
// Lines: 310;