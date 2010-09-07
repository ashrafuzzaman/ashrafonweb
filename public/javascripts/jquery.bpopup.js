/************************************************************************
 * @name: bPopup
 * @author: Bjoern Klinggaard (http://dinbror.dk/bpopup)
 * @version: 0.3.6.min
 ************************************************************************/ 
(function(a){a.fn.openPopup=function(f,i){function s(){var b=a("input[type=text]",c).length!=0,j=o.vStart!=null?o.vStart:d.scrollTop()+g;if(o.xLink){a("a#bContinue").attr({href:a("a.xlink").attr("href")});a("a#bContinue .btnLink").text(a("a.xlink").attr("title"))}c.css({left:d.scrollLeft()+h,position:"absolute",top:j,"z-index":o.zIndex}).appendTo(o.appendTo).hide(function(){b&&c.each(function(){c.find("input[type=text]").val("")});o.loadUrl!=null&&c.load(o.loadUrl)}).fadeIn(o.fadeSpeed,function(){b&&
c.find("input[type=text]:first").focus();a.isFunction(i)&&i()});t()}function l(){o.modal&&a("#bModal").fadeOut(o.fadeSpeed,function(){a("#bModal").remove()});c.fadeOut(o.fadeSpeed,function(){o.loadUrl!=null&&c.empty()});o.scrollBar||a("html").css("overflow","auto");a("."+o.closeClass).die("click");d.unbind("keydown.bPopup");e.unbind(".bPopup")}function u(){if(m){var b=[d.height(),d.width()];return{"background-color":o.modalColor,height:b[0],left:k(),opacity:0,position:"absolute",top:0,width:b[1],
"z-index":o.zIndex-1}}else return{"background-color":o.modalColor,height:"100%",left:0,opacity:0,position:"fixed",top:0,width:"100%","z-index":o.zIndex-1}}function t(){a("."+o.closeClass).live("click",function(){l();return false});o.follow&&e.bind("scroll.bPopup",function(){c.stop().animate({left:d.scrollLeft()+h,top:d.scrollTop()+g},o.followSpeed)}).bind("resize.bPopup",function(){if(o.modal&&m){var b=[d.height(),d.width()];n.css({height:b[0],width:b[1],left:k()})}b=p(c,o.amsl);g=b[0];h=b[1];c.stop().animate({left:d.scrollLeft()+
h,top:d.scrollTop()+g},o.followSpeed)});o.escClose&&d.bind("keydown.bPopup",function(b){b.which==27&&l()})}function k(){return e.width()<a("body").width()?0:(a("body").width()-e.width())/2}function p(b,j){var q=(e.height()-b.height())/2-j,v=(e.width()-b.width())/2+k();return[q<20?20:q,v]}if(a.isFunction(f)){i=f;f=null}o=a.extend({},a.fn.openPopup.defaults,f);o.scrollBar||a("html").css("overflow","hidden");var c=a(this),n=a('<div id="bModal"></div>'),d=a(document),e=a(window),r=p(c,o.amsl),g=r[0],
h=r[1],m=a.browser.msie&&parseInt(a.browser.version)==6&&typeof window.XMLHttpRequest!="object";return this.each(function(){o.modal&&n.css(u()).appendTo(o.appendTo).animate({opacity:o.opacity},o.fadeSpeed);s()})};a.fn.openPopup.defaults={amsl:150,appendTo:"body",closeClass:"bClose",escClose:true,fadeSpeed:250,follow:true,followSpeed:500,loadUrl:null,modal:true,modalColor:"#000",opacity:0.5,scrollBar:true,xLink:false,zIndex:9999};a.fn.closePopup=function(){a(this).trigger("click")}})(jQuery);
