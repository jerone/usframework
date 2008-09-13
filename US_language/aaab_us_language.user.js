/*//////////////////////////////////////////////////////////////////////////
// ==UserScript===
// @name            aaab_US_language
// @author          Jerone UserScript Productions
// @namespace       http://userscripts.org/users/31497
// @homepage        http://jervw.freehostia.com/artikels/art006/US_language.html
// @description     Part 2 of US_framework
// @description     Translate strings in a language.
// @description     US_updater v1.4.2 Beta
// @copyright       2007 - 2008 Jerone
// @version         v1.4.2 Beta
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
// - 04-05-2008: cleaned up code, added instructions [v1.1 Beta];
// - 18-05-2008: fixed wrongly usage instructions example [v1.1.1 Beta];
// - 20-05-2008: updated some translations [v1.1.2 Beta];
// - 30-05-2008: fixed framework check [v1.2 Beta];
// - 03-06-2008: fixed bug with new language [v1.3 Beta];
// - 08-08-2008: cleanded up code, added current language detection [v1.4 Beta];
// - 17-08-2008: added new translations [v1.4.1 Beta];
// - 19-08-2008: added new translations [v1.4.2 Beta];
////////////////////////////////////////////////////////////////////////////
// Todo:
// - option to maximize number of characters to a string;
// - solution for capitalization;
////////////////////////////////////////////////////////////////////////////
// Note:
// - This script does NOT work without my other script: 
//   - US_functions => http://userscripts.org/scripts/show/16142
/*//////////////////////////////////////////////////////////////////////////



//*** FRAMEWORK CHECK ***//
// Nothing to change here!!!
(function(){
var name			= "US_language";	// current script name;
var US_functionsV	= "1.9.4";			// minimum US_functions version;
var m1="The following script doesn't exist, is disabled or something went wrong:\n	",m2=name+" only works with a newer version of the following script:\n	",m3="\n\nClick 'OK' to go to the homepage of that script to download the newest version:\n	",l1="http://userscripts.org/scripts/show/16142",l2="http://userscripts.org/scripts/show/16143",l3="http://userscripts.org/scripts/show/31458",l4="http://userscripts.org/scripts/show/16144",USf="US_functions",USl="US_language",USo="US_options",USu="US_update",u="undefined",f=false,t=true,o=null,w=window;if(!(w.US_frameworkOK)){function a(b,c,d){var e=confirm(((d==1)?m1:m2)+b+m3+c);if(e)GM_openInTab(c);if(d==1){w.US_functions=function(){};w.US_language=function(){};w.US_language.localise=function(){};w.US_language.all=function(){};w.US_language.current=function(){};w.US_options=function(){};w.US_update=function(){};w.US_update.all=function(){};w.US_update.names=function(){};}return;}
function g(h,i){var j=k=f,r=/([\d.]+)/i;if(r.test(i)==f)return t;i.match(r);is=RegExp.$1.split(".");h.match(r);hs=RegExp.$1.split(".");for(var x=0;x<Math.max(is.length,hs.length);x++){var hx=hs[x],ix=is[x];if(hx==u||hx==""||hx==o)hx=0;if(ix==u||ix==""||ix==o)ix=0;if(ix<hx&&!k)j=t;if(ix>hx)k=t;}return j;}var fd=ld=od=ud=f;if(typeof US_functionsV!=u){if(!(w.US_functionsOK))a(USf,l1,1);else if(g(US_functionsV,US_functionsOK))a(USf,l1);fd=t;}if(typeof US_languageV!=u){if(!(w.US_languageOK))a(USl,l2,1);else if(g(US_languageV,US_languageOK))a(USl,l2);ld=t;}if(typeof US_optionsV!=u){if(!(w.US_optionsOK))a(USo,l3,1);else if(g(US_optionsV,US_optionsOK))a(USo,l3);od=t;}if(typeof US_updateV!=u){if(!(w.US_updateOK))a(USu,l4,1);else if(g(US_updateV,US_updateOK))a(USu,l4);ud=t;}if(fd&&ld&&od&&ud){w.US_frameworkOK=t;console.log('US_framework correct imported!');}else w.US_frameworkOK=f;}})();



//*** USAGE INSTRUCTIONS ***//
// LANGUAGE SCRIPT
// This script lets you return a translated version of a needed string.
// Translate strings in different languages, choose which language you want to use and import that string in your script.
// There's also an option to use the browser/navigator language. If an translation string doesn't exist it will return the default string.
// Add the following code to your script and fill the correct information in, like below:
//  (please note the special characters and there places, like: ,"'(){}:; etc...)
/*\
	language = new US_language({
		langMod: "browser",				// ["browser"/"navigator"] browser/navigator language;
										// [String LANGUAGE SHORT] specified language;
		locals : {						// [Object] include new translations (optional):
			'en' : {						// [Object Language {String LANGUAGE SHORT : Object Group},{String LANGUAGE SHORT : Object Group},...] language name 1:
				'test1' : {						// [Object Group {String : Object Translation},{String : Object Translation},...] group name 1:
					'test1a' : 'test1a',			// [Object Translation {String : String},{String : String},...] translation string 1;
					'test1b' : 'test1b',			// [Object Translation {String : String},{String : String},...] translation string 2;
				},
				'test2' : {						// [Object Group {String : Object Translation},{String : Object Translation},...] group name 2:
					'test2a' : 'test2a',			// [Object Translation {String : String},{String : String},...] translation string 1;
					'test2b' : 'test2b',			// [Object Translation {String : String},{String : String},...] translation string 2;
			}},
			'nl' : {						// [Object Language {String LANGUAGE SHORT : Object Group},{String LANGUAGE SHORT : Object Group},...] language name 2:
				'test1' : {						// [Object Group {String : Object Translation},{String : Object Translation},...] group name 1:
					'test1a' : 'test1a',			// [Object Translation {String : String},{String : String},...] translation string 1;
					'test1b' : 'test1b',			// [Object Translation {String : String},{String : String},...] translation string 2;
				},
				'test2' : {						// [Object Group {String : Object Translation},{String : Object Translation},...] group name 2:
					'test2a' : 'test2a',			// [Object Translation {String : String},{String : String},...] translation string 1;
					'test2b' : 'test2b',			// [Object Translation {String : String},{String : String},...] translation string 2;
	}}}});
\*/
// Note: newly added translations/locals are only available in other scripts when they are lower in the tree!
////////////////////////////////////////////////////////////////////////////
// LOCALISE STRING
// Add the following code to your script where you want the translated string be placed:
// (the word 'language' needs to be the same as above used, but can be anything) 
/*\
	language.localise([					// [Array [String,String,...]] referred object names:
						'common',			// [String] group name;
						'languageLong']		// [String] translation string;
	);
\*/
// I suggest you use this code: language.localise(['common','languageLong']);
////////////////////////////////////////////////////////////////////////////
// LOCALISE REPLACEMENT STRING
// In addition to the above code you can insert some variables into a string.
// An example of such a string: "Update @1@ with version @version@ to version @3@?";
// (the word 'language' needs to be the same as above used, but can be anything) 
/*\
	language.localise([					// [Array [String,String,...]] referred object names:
						'USU',				// [String] group name;
						'upDate']			// [String] translation string;
					  ,{				// [Object {String : String},{String : String},...] add replacements strings (optional):
						'1' :				// [String] refers to @1@;
						'script 1',			// [String] replacement string;
						'version' :			// [String] refers to @version@;
						'v2 Beta'}			// [String] replacement string;
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
////////////////////////////////////////////////////////////////////////////



//*** USER SETTINGS ***//
const GMLlangModOverRide	= "";		// ["browser"/"navigator"] browser/navigator language;
										// [String LANGUAGE SHORT] specified language;
										// [""] script depended;



//*** DEFAULT SETTINGS ***//
const GMLlangModDefault		= "en";		// [String LANGUAGE SHORT] default language;



//*** USER SCRIPT ***//
window.US_language = function(script){
	if(script){this.init(script);}
};
US_language.prototype = {
	lang : (typeof(GMLlangModDefault)!="undefined"?GMLlangModDefault:"en").toLowerCase(),
	navi : window.navigator.language.substr(0,2).toLowerCase(),
	init : function(script){
		if(typeof(GMLlangModOverRide)!="undefined" && GMLlangModOverRide!=undefined && GMLlangModOverRide!=null && GMLlangModOverRide!=""){
			GMLlanguage = GMLlangModOverRide.toLowerCase();
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

		this.lang = (GMLlanguage && (this.locals.hasOwnProperty(GMLlanguage) || GMLlanguage in this.locals)) ? GMLlanguage : (typeof(GMLlangModDefault)!="undefined"?GMLlangModDefault:"en").toLowerCase();
		
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
				currentLang = this.locals[(typeof(GMLlangModDefault)!="undefined"?GMLlangModDefault:"en").toLowerCase()];
			}
			
			var loca = currentLang[string[0]];
			if(!loca){
				loca = this.locals[(typeof(GMLlangModDefault)!="undefined"?GMLlangModDefault:"en").toLowerCase()][string[0]];
			} 
			if(!loca){
				return 'Could not find: \"'+string[0]+'\".\nPlease contact the scriptwriter about this.';
			}
			
			var local = loca[string[1]];
			if(!local){
				local = this.locals[(typeof(GMLlangModDefault)!="undefined"?GMLlangModDefault:"en").toLowerCase()][string[0]][string[1]];
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
				'settings'		: 'Settings',
				'options'		: 'Options',
				'ok'			: 'OK',
				'apply'			: 'Apply',
				'cancel'		: 'Cancel',
				'reset'			: 'Reset',
				'add'			: 'Add',
				'remove'		: 'Remove',
				'edit'			: 'Edit',
				'up'			: 'Up',
				'down'			: 'Down'},
			'time' : {
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
				'settings'		: 'Instellingen',
				'options'		: 'Opties',
				'ok'			: 'OK',
				'apply'			: 'Toepassen',
				'cancel'		: 'Annuleren',
				'reset'			: 'Herstellen',
				'add'			: 'Toevoegen',
				'remove'		: 'Verwijderen',
				'edit'			: 'Bewerken',
				'up'			: 'Omhoog',
				'down'			: 'Omlaag'},
			'time' : {
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



//*** STATISTICS ***//
window.US_languageOK="v1.4.2 Beta";
console.log('US_language ' + US_languageOK + ' correct imported!');
// Words: 1.648;
// Characters (no spaces): 12.390;
// Characters (with spaces): 14.715;
// Lines: 322;