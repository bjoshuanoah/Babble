/**
 * Babble(aka the Babel project)
 *
 * Copyright (c) 2012 Brian Noah
 *
 *
 * http://www.wolframcreative.com
 *
 **/

var translator_switch = '<div class="translate_me"><span class="faux_selector"><span class="switch"></span></span><span class="translate_this_chat">They are speaking...</span><div class="incoming_language_container"> <div class="incoming_lang" id="en"> English </div> <div class="incoming_lang" id="sq"> Albanian </div> <div class="incoming_lang" id="ar"> Arabic </div> <div class="incoming_lang" id="hy"> Armenian </div> <div class="incoming_lang" id="az"> Azerbaijani </div> <div class="incoming_lang" id="eu"> Basque </div> <div class="incoming_lang" id="be"> Belarusian </div> <div class="incoming_lang" id="bn"> Bengali </div> <div class="incoming_lang" id="bg"> Bulgarian </div> <div class="incoming_lang" id="ca"> Catalan </div> <div class="incoming_lang" id="zh-CN"> Simplified Chinese </div> <div class="incoming_lang" id="zh-TW"> Traditional </div> <div class="incoming_lang" id="hr"> Croatian </div> <div class="incoming_lang" id="cs"> Czech </div> <div class="incoming_lang" id="da"> Danish </div> <div class="incoming_lang" id="nl"> Dutch </div> <div class="incoming_lang" id="eo"> Eperanto </div> <div class="incoming_lang" id="et"> Estonian </div> <div class="incoming_lang" id="tl"> Filipino </div> <div class="incoming_lang" id="fi"> Finnish </div> <div class="incoming_lang" id="fr"> French </div> <div class="incoming_lang" id="gl"> Galacian </div> <div class="incoming_lang" id="ka"> Georgian </div> <div class="incoming_lang" id="de"> German </div> <div class="incoming_lang" id="el"> Greek </div> <div class="incoming_lang" id="gu"> Gujarati </div> <div class="incoming_lang" id="ht"> Haitian Creole </div> <div class="incoming_lang" id="iw"> Hebrew </div> <div class="incoming_lang" id="hi"> Hindi </div> <div class="incoming_lang" id="hu"> Hungarian </div> <div class="incoming_lang" id="is"> Icelandic </div> <div class="incoming_lang" id="ga"> Irish </div> <div class="incoming_lang" id="it"> Italian </div> <div class="incoming_lang" id="ja"> Japanese </div> <div class="incoming_lang" id="kn"> Kannada </div> <div class="incoming_lang" id="ko"> Korean </div> <div class="incoming_lang" id="la"> Latin </div> <div class="incoming_lang" id="lv"> Latvian </div> <div class="incoming_lang" id="lt"> Lithuanian </div> <div class="incoming_lang" id="mk"> Macedonian </div> <div class="incoming_lang" id="ms"> Malay </div> <div class="incoming_lang" id="mt"> Maltese </div> <div class="incoming_lang" id="no"> Norwegian </div> <div class="incoming_lang" id="fa"> Persian </div> <div class="incoming_lang" id="pl"> Polish </div> <div class="incoming_lang" id="pt-BR"> Portuguese </div> <div class="incoming_lang" id="ro"> Romanian </div> <div class="incoming_lang" id="ru"> Russian </div> <div class="incoming_lang" id="sr"> Serbian </div> <div class="incoming_lang" id="sk"> Slovak </div> <div class="incoming_lang" id="sl"> Slovenian </div> <div class="incoming_lang" id="es"> Spanish </div> <div class="incoming_lang" id="sw"> Swahili </div> <div class="incoming_lang" id="sv"> Swedish </div> <div class="incoming_lang" id="ta"> Tamil </div> <div class="incoming_lang" id="te"> Telugu </div> <div class="incoming_lang" id="th"> Thai </div> <div class="incoming_lang" id="tr"> Turkish </div> <div class="incoming_lang" id="uk"> Ukrainian </div> <div class="incoming_lang" id="ur"> Urdu </div> <div class="incoming_lang" id="vi"> Vietnamese </div> <div class="incoming_lang" id="cy"> Welsh </div> <div class="incoming_lang" id="yi"> Yiddish </div> </div> <span class="translator_setting_switch">Configuration</span></div>';
var translator_settings_overlay = '<section class="translator_settings_overlay"> <div class="close"></div> <div class="container"> <div id="back_arrow"></div> <div id="forward_arrow"></div> <div class="lang_cont first" id="en" > <div class="i_am_speaking">I speak</div> <div class="language_selector">English</div> </div> <div class="lang_cont" id="af"> <div class="i_am_speaking">Ek praat</div> <div class="language_selector">Afrikaans</div> </div> <div class="lang_cont" id="sq"> <div class="i_am_speaking">Unë flas</div> <div class="language_selector">Shqiptare</div> </div> <div class="lang_cont" id="ar"> <div class="i_am_speaking">وأنا أتكلم</div> <div class="language_selector">العربية</div> </div> <div class="lang_cont" id="hy"> <div class="i_am_speaking">Ես խոսում եմ</div> <div class="language_selector">հայերեն</div> </div> <div class="lang_cont" id="az"> <div class="i_am_speaking">Mən Azərbaycan dilini</div> <div class="language_selector"></div> </div> <div class="lang_cont" id="eu"> <div class="i_am_speaking">Euskal hitz egiten dut</div> <div class="language_selector"></div> </div> <div class="lang_cont" id="be"> <div class="i_am_speaking">Я кажу</div> <div class="language_selector">беларускіх</div> </div> <div class="lang_cont" id="bn"> <div class="i_am_speaking">আমি বাংলা কথা বলা</div> <div class="language_selector"></div> </div> <div class="lang_cont" id="bg"> <div class="i_am_speaking">Аз говоря</div> <div class="language_selector">български</div> </div> <div class="lang_cont" id="ca"> <div class="i_am_speaking">Parlo</div> <div class="language_selector">català</div> </div> <div class="lang_cont" id="zh-CN"> <div class="i_am_speaking">我说中国</div> <div class="language_selector"></div> </div> <div class="lang_cont" id="zh-TW"> <div class="i_am_speaking">我說中國</div> <div class="language_selector"></div> </div> <div class="lang_cont" id="hr"> <div class="i_am_speaking">Ja govorim</div> <div class="language_selector">hrvatski</div> </div> <div class="lang_cont" id="cs"> <div class="i_am_speaking">Mluvím</div> <div class="language_selector">česky</div> </div> <div class="lang_cont" id="da"> <div class="i_am_speaking">Jeg taler</div> <div class="language_selector">dansk</div> </div> <div class="lang_cont" id="nl"> <div class="i_am_speaking">Ik spreek</div> <div class="language_selector">Nederlands</div> </div> <div class="lang_cont" id="eo"> <div class="i_am_speaking">Mi parolas</div> <div class="language_selector">Esperanton</div> </div> <div class="lang_cont" id="et"> <div class="i_am_speaking">Ma räägin</div> <div class="language_selector">eesti</div> </div> <div class="lang_cont" id="tl"> <div class="i_am_speaking">Ginagamit ko</div> <div class="language_selector">Pilipino</div> </div> <div class="lang_cont" id="fi"> <div class="i_am_speaking">Puhun suomea</div> <div class="language_selector"></div> </div> <div class="lang_cont" id="fr"> <div class="i_am_speaking">Je parle</div> <div class="language_selector">français</div> </div> <div class="lang_cont" id="gl"> <div class="i_am_speaking">Eu falo </div> <div class="language_selector">galego</div> </div> <div class="lang_cont" id="ka"> <div class="i_am_speaking">ვსაუბრობ</div> <div class="language_selector">ქართულ</div> </div> <div class="lang_cont" id="de"> <div class="i_am_speaking">Ich Spreche</div> <div class="language_selector">Deutch</div> </div> <div class="lang_cont" id="el"> <div class="i_am_speaking">Μιλάω</div> <div class="language_selector">Ελληνικά</div> </div> <div class="lang_cont" id="gu"> <div class="i_am_speaking">હું ગુજરાતી બોલે છે</div> <div class="language_selector"></div> </div> <div class="lang_cont" id="ht"> <div class="i_am_speaking">Mwen pale</div> <div class="language_selector">kreyòl ayisyen</div> </div> <div class="lang_cont" id="iw"> <div class="i_am_speaking">אני מדבר</div> <div class="language_selector">עברית</div> </div> <div class="lang_cont" id="hi"> <div class="i_am_speaking">मैं हिंदी बोलते हैं</div> <div class="language_selector"></div> </div> <div class="lang_cont" id="hu"> <div class="i_am_speaking">Beszélek</div> <div class="language_selector">magyarul</div> </div> <div class="lang_cont" id="is"> <div class="i_am_speaking">Ég tala</div> <div class="language_selector">íslensku</div> </div> <div class="lang_cont" id="ga"> <div class="i_am_speaking">Labhairt liom</div> <div class="language_selector">Íoslainnis</div> </div> <div class="lang_cont" id="it"> <div class="i_am_speaking">Parlo</div> <div class="language_selector">italiano</div> </div> <div class="lang_cont" id="ja"> <div class="i_am_speaking">私は日本語を話す</div> <div class="language_selector"></div> </div> <div class="lang_cont" id="kn"> <div class="i_am_speaking">ನಾನು ಕನ್ನಡ ಮಾತನಾಡಲು</div> <div class="language_selector"></div> </div> <div class="lang_cont" id="ko"> <div class="i_am_speaking">나는</div> <div class="language_selector">한국어를</div> </div> <div class="lang_cont" id="la"> <div class="i_am_speaking">Ego Latine loqui</div> <div class="language_selector"></div> </div> <div class="lang_cont" id="lv"> <div class="i_am_speaking">Es runāju</div> <div class="language_selector">latviski</div> </div> <div class="lang_cont" id="lt"> <div class="i_am_speaking">Aš kalbu</div> <div class="language_selector">lietuviškai</div> </div> <div class="lang_cont" id="mk"> <div class="i_am_speaking">Јас зборувам</div> <div class="language_selector">македонски</div> </div> <div class="lang_cont" id="ms"> <div class="i_am_speaking">Saya bercakap</div> <div class="language_selector">Melayu</div> </div> <div class="lang_cont" id="mt"> <div class="i_am_speaking">I jitkellmu</div> <div class="language_selector">Malti</div> </div> <div class="lang_cont" id="no"> <div class="i_am_speaking">Jeg snakker</div> <div class="language_selector">norsk</div> </div> <div class="lang_cont" id="fa"> <div class="i_am_speaking">من فارسی صحبت می کنند</div> <div class="language_selector"></div> </div> <div class="lang_cont" id="pl"> <div class="i_am_speaking">Mówię</div> <div class="language_selector">Polskiej</div> </div> <div class="lang_cont" id="pt-BR"> <div class="i_am_speaking">Eu falo</div> <div class="language_selector">Português</div> </div> <div class="lang_cont" id="ro"> <div class="i_am_speaking">Eu vorbesc</div> <div class="language_selector">limba română</div> </div> <div class="lang_cont" id="ru"> <div class="i_am_speaking">Я говорю</div> <div class="language_selector">на русском</div> </div> <div class="lang_cont" id="sr"> <div class="i_am_speaking">Ја говорим</div> <div class="language_selector">српски</div> </div> <div class="lang_cont" id="sk"> <div class="i_am_speaking">Aj hovorí</div> <div class="language_selector">slovenská</div> </div> <div class="lang_cont" id="sl"> <div class="i_am_speaking">Govorim</div> <div class="language_selector">slovenskega</div> </div> <div class="lang_cont" id="es"> <div class="i_am_speaking">Yo hablo</div> <div class="language_selector">Español</div> </div> <div class="lang_cont" id="sw"> <div class="i_am_speaking">Mimi kuongea</div> <div class="language_selector">Kiswahili</div> </div> <div class="lang_cont" id="sv"> <div class="i_am_speaking">Jag talar</div> <div class="language_selector">svenska</div> </div> <div class="lang_cont" id="ta"> <div class="i_am_speaking">நான் தமிழ் பேச</div> <div class="language_selector"></div> </div> <div class="lang_cont" id="te"> <div class="i_am_speaking">నేను తెలుగు మాట్లాడుతారు</div> <div class="language_selector"></div> </div> <div class="lang_cont" id="th"> <div class="i_am_speaking">ผมพูดภาษาไทย</div> <div class="language_selector"></div> </div> <div class="lang_cont" id="tr"> <div class="i_am_speaking">Ben</div> <div class="language_selector">Türkçe</div> </div> <div class="lang_cont" id="uk"> <div class="i_am_speaking">Я розмовляю</div> <div class="language_selector">українською</div> </div> <div class="lang_cont" id="ur"> <div class="i_am_speaking">میں اردو بول</div> <div class="language_selector"></div> </div> <div class="lang_cont" id="vi"> <div class="i_am_speaking">Tôi nói tiếng</div> <div class="language_selector">Việt</div> </div> <div class="lang_cont" id="cy"> <div class="i_am_speaking">Rwy\'n siarad</div> <div class="language_selector">Cymraeg</div> </div> <div class="lang_cont" id="yi"> <div class="i_am_speaking">איך רעדן</div> <div class="language_selector">ייִדיש</div> </div> </div> </section>';
var incoming_list ='<div class="incoming_language_container"> <div class="incoming_lang" id="en"> English </div> <div class="incoming_lang" id="sq"> Albanian </div> <div class="incoming_lang" id="ar"> Arabic </div> <div class="incoming_lang" id="hy"> Armenian </div> <div class="incoming_lang" id="az"> Azerbaijani </div> <div class="incoming_lang" id="eu"> Basque </div> <div class="incoming_lang" id="be"> Belarusian </div> <div class="incoming_lang" id="bn"> Bengali </div> <div class="incoming_lang" id="bg"> Bulgarian </div> <div class="incoming_lang" id="ca"> Catalan </div> <div class="incoming_lang" id="zh-CN"> Simplified Chinese </div> <div class="incoming_lang" id="zh-TW"> Traditional </div> <div class="incoming_lang" id="hr"> Croatian </div> <div class="incoming_lang" id="cs"> Czech </div> <div class="incoming_lang" id="da"> Danish </div> <div class="incoming_lang" id="nl"> Dutch </div> <div class="incoming_lang" id="eo"> Eperanto </div> <div class="incoming_lang" id="et"> Estonian </div> <div class="incoming_lang" id="tl"> Filipino </div> <div class="incoming_lang" id="fi"> Finnish </div> <div class="incoming_lang" id="fr"> French </div> <div class="incoming_lang" id="gl"> Galacian </div> <div class="incoming_lang" id="ka"> Georgian </div> <div class="incoming_lang" id="de"> German </div> <div class="incoming_lang" id="el"> Greek </div> <div class="incoming_lang" id="gu"> Gujarati </div> <div class="incoming_lang" id="ht"> Haitian Creole </div> <div class="incoming_lang" id="iw"> Hebrew </div> <div class="incoming_lang" id="hi"> Hindi </div> <div class="incoming_lang" id="hu"> Hungarian </div> <div class="incoming_lang" id="is"> Icelandic </div> <div class="incoming_lang" id="ga"> Irish </div> <div class="incoming_lang" id="it"> Italian </div> <div class="incoming_lang" id="ja"> Japanese </div> <div class="incoming_lang" id="kn"> Kannada </div> <div class="incoming_lang" id="ko"> Korean </div> <div class="incoming_lang" id="la"> Latin </div> <div class="incoming_lang" id="lv"> Latvian </div> <div class="incoming_lang" id="lt"> Lithuanian </div> <div class="incoming_lang" id="mk"> Macedonian </div> <div class="incoming_lang" id="ms"> Malay </div> <div class="incoming_lang" id="mt"> Maltese </div> <div class="incoming_lang" id="no"> Norwegian </div> <div class="incoming_lang" id="fa"> Persian </div> <div class="incoming_lang" id="pl"> Polish </div> <div class="incoming_lang" id="pt-BR"> Portuguese </div> <div class="incoming_lang" id="ro"> Romanian </div> <div class="incoming_lang" id="ru"> Russian </div> <div class="incoming_lang" id="sr"> Serbian </div> <div class="incoming_lang" id="sk"> Slovak </div> <div class="incoming_lang" id="sl"> Slovenian </div> <div class="incoming_lang" id="es"> Spanish </div> <div class="incoming_lang" id="sw"> Swahili </div> <div class="incoming_lang" id="sv"> Swedish </div> <div class="incoming_lang" id="ta"> Tamil </div> <div class="incoming_lang" id="te"> Telugu </div> <div class="incoming_lang" id="th"> Thai </div> <div class="incoming_lang" id="tr"> Turkish </div> <div class="incoming_lang" id="uk"> Ukrainian </div> <div class="incoming_lang" id="ur"> Urdu </div> <div class="incoming_lang" id="vi"> Vietnamese </div> <div class="incoming_lang" id="cy"> Welsh </div> <div class="incoming_lang" id="yi"> Yiddish </div> </div>';
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-32318579-3']);
_gaq.push(['_trackPageview']);

(function() {
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();



$('body').append(translator_settings_overlay);

setTimeout(function(){
	$('#en.lang_cont').addClass('active');
	if ($.cookie('translator_viewed') == undefined){
		$('.translator_settings_overlay').fadeIn(800);
	} else if ($.cookie('translator_language') != undefined){
		$('#en.lang_cont').removeClass('active');
		var language = $.cookie('translator_language');
		$('#'+language+'.lang_cont').addClass('active').prevAll('.lang_cont').addClass('prev');
	}
},2000);

var translateThis = function(text, elem, incoming_language){
	if (incoming_language == null){
		var incoming_language = 'en';
	}
	if ($.cookie('translator_language') == undefined){
		var language = 'en';
	} else {
		var language = $.cookie('translator_language');
		var query = 'http://mymemory.translated.net/api/get?q='+text+'&langpair='+incoming_language+'|'+language+'&de=brianjoshuanoah@gmail.com';
		if (incoming_language != language){
			$.ajax({
	            url: query,
	            type: 'GET',
	            dataType: 'json',
	            success: function(s) { 
	            	var translation = s['responseData']['translatedText'];
	            	elem.text(translation).addClass('translated');
	            	_gaq.push(['_trackEvent', 'translation', 'translated', ''+incoming_language+' to '+language+'']);
	            },
	            error: function(e) { console.log('something went wrong!', e)}
	        });
		}
	}
}

setInterval(function(){
	$('div[role="dialog"]').each(function(){
		var this_chat_box = $(this);
		var incoming_language = this_chat_box.attr('data-language');
		
		if (this_chat_box.hasClass('trans_added')){
			if(this_chat_box.hasClass('translate_this')){
				
				this_chat_box.find('.km[chat-dir="t"] .kk span:not(.kn)').each(function(){
					var to_be_translated = $(this);
					

					if (to_be_translated.hasClass('translated')){
					} else {
						var text = to_be_translated.text();
						translateThis(text, to_be_translated, incoming_language)
					}
				});
				this_chat_box.find('.km[chat-dir="t"] .kl').each(function(){
					var to_be_translated = $(this);
					if (to_be_translated.hasClass('translated')){
					} else {
						var text = to_be_translated.text();
						translateThis(text, to_be_translated, incoming_language)
					}
				});
			}
		} else {
			this_chat_box.addClass('trans_added').children('.nH:not(.Hy)').append(translator_switch);
			setTimeout(function(){
				
				var a = $('.translate_this_chat');
				var a_text = a.text();
				var b = $('.translator_setting_switch');
				var b_text = b.text();
				translateThis(a_text, a, 'en');
				translateThis(b_text, b, 'en');
				//a.after(incoming_list);
				setTimeout(function(){
					$('.incoming_language_container div').each(function(){
						var elem = $(this);
						var language = $(this).text();
						translateThis(language, elem, 'en');
					});
				},500);
			},500);
		}
	});
},3000);



$('.faux_selector').live('click', function(){
	var this_selector = $(this);
	this_selector.find('.switch').toggleClass('active');
	this_selector.closest('[role="dialog"]').toggleClass('translate_this');
});

$('.translator_setting_switch').live('click', function(){
	$('.translator_settings_overlay').fadeIn(800);
});

$('#back_arrow').live('click', function(){
	if ($('.lang_cont.active').hasClass('first')){
	} else {
		$('.lang_cont.active').removeClass('active').prev('.lang_cont').removeClass('prev').addClass('active');
	}
});

$('#forward_arrow').live('click', function(){
	if ($('.lang_cont:last-of-type').hasClass('active')){
	} else {
		$('.lang_cont.active').removeClass('active').addClass('prev').next('.lang_cont').addClass('active');
	}
});

$('.close').live('click', function(){
	$.cookie('translator_viewed', true, {expires:365});
	$('.translator_settings_overlay').fadeOut(800);
});

$('.lang_cont').live('click', function(){
	var language = $(this).attr('id');
	$.cookie('translator_language', language, {expires:365});
	$('.translator_settings_overlay').fadeOut(800);
	console.log($.cookie('translator_language'));
});


$('.translate_this_chat').live('click', function(){
	$(this).next('.incoming_language_container').fadeToggle(500);
});

$('.incoming_lang').live('click', function(){
	var this_language = $(this);
	var language = this_language.attr('id');
	this_language.addClass('active').siblings().removeClass('active').parent().delay(500).fadeOut(500);
	setTimeout(function(){
		this_language.parent().parent().parent().parent().attr('data-language', language);
	},1000);
});




















