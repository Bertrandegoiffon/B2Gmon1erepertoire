(function($){$.fn.openPopIn=function(){var $page=$("#page"),$bckd=$("div.popin-page-background");$page.length&&$bckd.css({height:$page.height(),width:$page.width()});$bckd.show();$(this).show()};$.fn.openPopInAndScroll=function(x,y){$(this).openPopIn();window.scrollTo(x,y)};$.fn.closePopIn=function(options){var options_default={wrapperSelector:"div.popin-wrapper",containerSelector:'div[class*="popin-container"]',backgroundSelector:"div.popin-page-background",isAutoHiddenBackGround:true};options=$.extend({},options_default,options);$(this).parents(options.containerSelector).hide();$(options.wrapperSelector+" > "+options.containerSelector+":visible").length===0&&options.isAutoHiddenBackGround===true&&$(options.backgroundSelector).hide()};$.fn.showOverLayerBackground=function(){var $page=$("#page"),$bckd=$("div.popin-page-background");$page.length&&$bckd.css({height:$page.height(),width:$page.width()});$bckd.show()};$.fn.hideOverLayerBackground=function(){$("div.popin-wrapper  > div.popin-container:visible").length===0&&$("div.popin-page-background").hide()};$("div.popin-wrapper input.button:not(.jqDoNotClose) , div.popin-wrapper .popin-close, div.popin-wrapper .button-close").live("click",function(){$(this).closePopIn()});$("div.popin-wrapper .popin-choice-close").live("click",function(){cds.ui.closeAllPopin()})})(jQuery);