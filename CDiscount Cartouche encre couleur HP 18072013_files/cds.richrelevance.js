(function(cds){var document=window.document,PRICER_PROXY_URL="/PricerServiceProxy.mvc",ADD_TO_BASKET_MANAGER_URL="/v2/Order/AddToBasketManager.aspx",placementsList=[],loadedPlacementsCount=0;cds.addRRPlacement=function(placementType){placementType&&placementsList.push(placementType);return placementsList};cds.getRRPlacements=function(){return placementsList};cds.clearRRPlacements=function(){placementsList=[]};cds.rrPlacement=function(placementType){if(typeof r3_placement==="function"&&typeof rr_flush_onload==="function"&&placementType){r3_placement(placementType);($("#hdnPageType").val()==="HomePage"||cds.getBrowser()["name"]!=="mozilla")&&++loadedPlacementsCount==placementsList.length&&rr_flush_onload()}};cds.addRRProductToBasket=function(productId,richRelevantUrl,isProductPageRedirect,productPageUrl){if(isProductPageRedirect===true&&!cds.isEmptyString(productPageUrl))document.location.href=productPageUrl;else if(productId){addToBasketData={productId:productId,isRichRelevanceProduct:true,isNotRrMaster:true};var options={};options.successFunction=function(){!cds.isEmptyString(richRelevantUrl)&&cds.sendRequest(richRelevantUrl)};if(typeof $.addToBasket!=="undefined")$.addToBasket(addToBasketData,options);else{var pageType=$("#hdnPageType").attr("value");cds.sendRequest(richRelevantUrl);var response=cds.getXHR(ADD_TO_BASKET_MANAGER_URL+"?pageType="+pageType+"&addMainProduct=true&isRichRelevanceProduct=true&productId="+productId+"&isNotRrMaster=true&isForcedPageType=true");obj=response&&!response.AddToBasketError?cds.parseJson(response):{};if(obj.GoToUrl)window.location.href=obj.GoToUrl}}};cds.getRRPriceInformations=function(productIdList){var response="";if(productIdList&&productIdList.push&&productIdList.length>0)response=cds.getXHR(PRICER_PROXY_URL+"?productidlist="+productIdList.join(";"));else cds.log("getProductPriceInformations: productIdList="+productIdList);return response&&!response.PricerServiceProxyError?cds.parseJson(response):{}};if(typeof jQuery!=="undefined"){$.addRichRelevanceProductToBasket=function(productId,richRelevantUrl,isProductPageRedirect,productPageUrl){cds.addRRProductToBasket(productId,richRelevantUrl,isProductPageRedirect,productPageUrl)};$.getProductPriceInformations=function(productIdList){return cds.getRRPriceInformations(productIdList)}}function getViewPortWidth(){if(typeof window.innerWidth!="undefined")viewportwidth=window.innerWidth;else if(typeof document.documentElement!="undefined"&&typeof document.documentElement.clientWidth!="undefined"&&document.documentElement.clientWidth!=0)viewportwidth=document.documentElement.clientWidth;else viewportwidth=document.getElementsByTagName("body")[0].clientWidth}over=function(ele){for(i=0;i<ele.childNodes.length;i++){var eleNode=ele.childNodes[i];if(eleNode.className!=null&&eleNode.className.indexOf("_h")==-1){var oldClass=eleNode.className;eleNode.setAttribute("className",oldClass+"_h");eleNode.setAttribute("class",oldClass+"_h")}}};out=function(ele){for(i=0;i<ele.childNodes.length;i++){var eleNode=ele.childNodes[i];if(eleNode.className!=null&&eleNode.className.indexOf("_h")!=-1){var oldClass=eleNode.className;eleNode.setAttribute("className",oldClass.substring(0,oldClass.length-2));eleNode.setAttribute("class",oldClass.substring(0,oldClass.length-2))}}};rr_carousel=function(carouselId,pb,nb,scrollBy,scrollSize,carouselOrientation,lazyLoad){var that=this,rrc_object=document.getElementById(carouselId),usePreviousNext=false,previousButton,nextButton;if(pb&&nb){usePreviousNext=true;previousButton=document.getElementById(pb);nextButton=document.getElementById(nb)}try{var rrc_totalItems=rrc_object.getElementsByTagName("li").length}catch(err){return}var rrc_doLazyload=false;if(lazyLoad)rrc_doLazyload=lazyLoad;var rrc_scrollBy=1;if(scrollBy!==undefined)rrc_scrollBy=scrollBy;var rrc_scrollSize=100;if(scrollSize!==undefined)rrc_scrollSize=scrollSize;var rrc_orientation="h";if(carouselOrientation!==undefined)rrc_orientation=carouselOrientation;var rrc_objectSize=0;if(rrc_orientation==="v")rrc_objectSize=rrc_object.parentNode.offsetHeight;else rrc_objectSize=rrc_object.parentNode.offsetWidth;var rrc_interval=80,rrc_moveTime=30,rrc_easingSpeed=.5,rrc_currLocation=0,rrc_currDestination=0,rrc_eInterval=0,rrc_lockMove=0,rrc_visibleItems=rrc_objectSize/rrc_scrollSize;rrSetClass(previousButton,"rrPrevious-disabled");rrc_orientation==="h"&&rrc_flexLayout();this.rrc_moveCarousel=function(direction){rrc_visibleItems=Math.floor(rrc_objectSize/rrc_scrollSize);var scrollBy=rrc_scrollBy;if(rrc_scrollBy<0)scrollBy=rrc_visibleItems;rrc_doLazyload&&rrc_lazyLoad(this.getRecImages,rrc_scrollSize*scrollBy,direction);if(rrc_visibleItems<rrc_totalItems){if(direction=="previous"&&rrc_lockMove===0){rrc_lockMove=1;if(rrc_currDestination<-(rrc_scrollSize*scrollBy)){rrc_currDestination=rrc_currDestination+rrc_scrollSize*scrollBy;rrSetClass(nextButton,"rrNext")}else{rrc_currDestination=0;rrSetClass(previousButton,"rrPrevious-disabled");rrSetClass(nextButton,"rrNext")}rrc_movesize=rrc_scrollSize*scrollBy;if(rrc_movesize>-rrc_currLocation)rrc_movesize=-rrc_currLocation;rrc_eInterval=rrc_interval;rrc_moveIt(direction)}if(direction=="next"&&rrc_lockMove===0){var offset=rrc_scrollSize*rrc_totalItems+rrc_currDestination-rrc_objectSize;rrc_lockMove=1;if(offset>rrc_scrollSize*scrollBy){rrc_currDestination=rrc_currDestination-rrc_scrollSize*scrollBy;rrSetClass(previousButton,"rrPrevious")}else{rrc_currDestination=rrc_currDestination-offset;rrSetClass(nextButton,"rrNext-disabled");rrSetClass(previousButton,"rrPrevious")}rrc_movesize=(rrc_currDestination-rrc_currLocation)*-1;rrc_eInterval=rrc_interval;rrc_moveIt(direction)}}};this.getRecImages=function(placement,index){var lis=placement.getElementsByTagName("li");if(lis&&index>=0&&lis.length>index)return lis[index].getElementsByTagName("img")[0]};function rrc_lazyLoad(getImgFunc,movement,d){for(var startingLow=-1*rrc_currDestination,low=d.toLowerCase()==="previous"?startingLow-movement:startingLow+movement,high=low+rrc_objectSize,visibleIndices=getVisibleRecIndices(low,high,rrc_scrollSize),i=0;i<visibleIndices.length;i++)rrc_loadRecImage(getImgFunc(rrc_object,visibleIndices[i]))}function getVisibleRecIndices(visibileWindowLow,visibileWindowHigh,recWidth,windowExtention){var indicies=[];windowExtention=windowExtention||0;for(var lowIndex=Math.floor((visibileWindowLow-windowExtention)/recWidth),highIndex=Math.ceil((visibileWindowHigh+windowExtention)/recWidth),i=lowIndex;i<highIndex;i++)indicies.push(i);return indicies}function rrc_loadRecImage(img,src){if(img){if(!src)src=img.getAttribute("rrSrc");src&&src!=img.src&&setTimeout(function(){img.src=src},1200)}}rrc_doLazyload&&rrc_lazyLoad(that.getRecImages,0,"");function rrc_moveIt(direction){if(rrc_currDestination>rrc_currLocation){rrc_pixels_left=(rrc_currLocation-rrc_currDestination)*-1;rrc_pixels_moved=rrc_movesize-(rrc_currLocation-rrc_currDestination)*-1;if(rrc_pixels_left/rrc_movesize<=.3)rrc_eInterval=Math.floor(rrc_pixels_left*rrc_easingSpeed);if(rrc_pixels_left/rrc_movesize>=.7)rrc_eInterval=Math.floor(rrc_pixels_moved*rrc_easingSpeed)+1;if(rrc_eInterval<1)rrc_eInterval=1;if(rrc_eInterval>rrc_interval)rrc_eInterval=rrc_interval;if(rrc_eInterval>rrc_pixels_left)rrc_eInterval=rrc_pixels_left;rrc_currLocation=rrc_currLocation+rrc_eInterval;if(rrc_orientation=="v")rrc_object.style.top=rrc_currLocation+"px";else rrc_object.style.left=rrc_currLocation+"px"}if(rrc_currDestination<rrc_currLocation){rrc_pixels_left=(rrc_currDestination-rrc_currLocation)*-1;rrc_pixels_moved=rrc_movesize-(rrc_currDestination-rrc_currLocation)*-1;if(rrc_pixels_left/rrc_movesize<=.3)rrc_eInterval=Math.floor(rrc_pixels_left*rrc_easingSpeed);if(rrc_pixels_left/rrc_movesize>=.7)rrc_eInterval=Math.floor(rrc_pixels_moved*rrc_easingSpeed)+1;if(rrc_eInterval<1)rrc_eInterval=1;if(rrc_eInterval>rrc_interval)rrc_eInterval=rrc_interval;if(rrc_eInterval>rrc_pixels_left)rrc_eInterval=rrc_pixels_left;rrc_currLocation=rrc_currLocation-rrc_eInterval;if(rrc_orientation=="v")rrc_object.style.top=rrc_currLocation+"px";else rrc_object.style.left=rrc_currLocation+"px"}if(rrc_currDestination==rrc_currLocation)rrc_lockMove=0;else window.setTimeout(function(){rrc_moveIt(direction)},rrc_moveTime)}function rrc_flexLayout(){var listWidth="100%",listItems=rrc_object.getElementsByTagName("li"),listItemWidth=100/listItems.length-.05+"%",allVisible=false;if(rrc_totalItems>rrc_visibleItems){listWidth="5000%";listItemWidth=rrc_scrollSize+"px";if(usePreviousNext){previousButton.className=previousButton.className.replace("rrPrevious-off"," ");nextButton.className=nextButton.className.replace("rrNext-off"," ")}}else{rrc_currLocation=0;rrc_object.style.left=rrc_currLocation+"px";if(usePreviousNext){rrSetClass(previousButton,"rrPrevious-disabled");rrSetClass(nextButton,"rrNext-disabled");previousButton.className+=" rrPrevious-off";nextButton.className+=" rrNext-off"}allVisible=true}return allVisible}var rrc_resizeTimer=false,rrc_resizeWait=75,winWidth=getViewPortWidth(),newWinWidth;function rrc_handleResize(){rrc_objectSize=rrc_object.parentNode.offsetWidth;rrc_visibleItems=Math.floor(rrc_objectSize/rrc_scrollSize);if(!rrc_flexLayout()){var offset=rrc_scrollSize*rrc_totalItems+rrc_currDestination-rrc_objectSize;if(offset<0){rrc_lockMove=1;rrc_currDestination=rrc_currDestination-offset;rrc_movesize=(rrc_currDestination-rrc_currLocation)*-1;rrc_eInterval=rrc_interval;rrc_moveIt("next");rrSetClass(nextButton,"rrNext-disabled")}else rrSetClass(nextButton,"rrNext")}rrc_doLazyload&&rrc_lazyLoad(that.getRecImages,0,"")}if(rrc_orientation==="h")if(window.addEventListener)window.addEventListener("resize",rrc_handleResize,false);else if(window.attachEvent)window.attachEvent("onresize",function(){newWinWidth=getViewPortWidth();if(winWidth!==newWinWidth){rrc_handleResize();winWidth=newWinWidth}});else window.onresize=rrc_handleResize();function rrSetClass(container,style){if(usePreviousNext)if(typeof container==="object"&&container!==null)container.className=style;else typeof console!=="undefined"&&console.log!=="undefined"&&console.log("container is null")}}})(cds,window);