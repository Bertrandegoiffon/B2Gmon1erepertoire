function show(id){var d=document.getElementById("smenu"+id),dNavidSearchSelect=document.getElementById("navidsearch"),dMoteurAttributsDiv=document.getElementById("MoteurAttributs"),dOrderByPrixPAPDiv=document.getElementById("trilist"),dOrderBySizeShoesDiv=document.getElementById("TAILLEPAP");if(navigator.appName=="Microsoft Internet Explorer"){if(!document.getElementById("menu"+id).contains(window.event.fromElement))if(d){d.style.display="block";var sNavigator=navigator.appVersion,iPositionVersion=sNavigator.indexOf("MSIE "),iIEVersion=sNavigator.substr(iPositionVersion+5,1);if(iIEVersion<7&&dNavidSearchSelect){for(var aSelectBasket=document.getElementsByTagName("select"),i=0;i<aSelectBasket.length;i++)aSelectBasket[i].style.visibility="hidden";dNavidSearchSelect.style.visibility="hidden";if(dMoteurAttributsDiv)dMoteurAttributsDiv.style.visibility="hidden";if(dOrderByPrixPAPDiv)dOrderByPrixPAPDiv.style.visibility="hidden";if(dOrderBySizeShoesDiv)dOrderBySizeShoesDiv.style.visibility="hidden"}}}else if(d)d.style.display="block";var o=document.getElementById("a"+id);if(o)if(o.className!="a"+id+"sel")o.className="a"+id+"on"}function hide(id){var d=document.getElementById("smenu"+id),dNavidSearchSelect=document.getElementById("navidsearch"),dMoteurAttributsDiv=document.getElementById("MoteurAttributs"),dOrderByPrixPAPDiv=document.getElementById("trilist"),dOrderBySizeShoesDiv=document.getElementById("TAILLEPAP");if(navigator.appName=="Microsoft Internet Explorer"){if(!document.getElementById("menu"+id).contains(window.event.toElement))if(d){d.style.display="none";var sNavigator=navigator.appVersion,iPositionVersion=sNavigator.indexOf("MSIE "),iIEVersion=sNavigator.substr(iPositionVersion+5,1);if(iIEVersion<7&&dNavidSearchSelect){for(var aSelectBasket=document.getElementsByTagName("select"),i=0;i<aSelectBasket.length;i++)aSelectBasket[i].style.visibility="visible";dNavidSearchSelect.style.visibility="visible";if(dMoteurAttributsDiv)dMoteurAttributsDiv.style.visibility="visible";if(dOrderByPrixPAPDiv)dOrderByPrixPAPDiv.style.visibility="visible";if(dOrderBySizeShoesDiv)dOrderBySizeShoesDiv.style.visibility="visible"}}}else if(d)d.style.display="none";var o=document.getElementById("a"+id);if(o)if(o.className!="a"+id+"sel")o.className="a"+id+"off"}function fnchangecss(sId,sCSS){if(!document.getElementById)return;var oElem=document.getElementById(sId);if(!oElem)return;oElem.className=sCSS}function checknewslet(form){var testform=false;if(form.email.value==""||form.email.value.indexOf("@")==-1||form.email.value.indexOf(".")==-1){form.email.focus();alert("Entrez un email valide sous la forme nom_utilisateur@nom_domaine")}else testform=true;if(testform){window.open("","po","scrollbars=yes,resizable=no,toolbar=no,status=no,menubar=no,width=580,height=570");return true}else return false};