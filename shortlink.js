function loadscript(t){var l=document.createElement("script");l.setAttribute("type","text/javascript"),l.setAttribute("src",t),document.getElementsByTagName("head")[0].appendChild(l)}function urltinyfyprompt_callback(t){waitElm&&(waitElm.style.display="none");var l="Copy This Shortlink,";t.title&&""!=t.title?l+=' for "'+t.title+'"':t.longurl&&""!=t.longurl&&(l+=" for "+t.longurl),t.tinyurl&&""!=t.tinyurl?prompt(l+":",t.tinyurl):alert("Could not get short URL, try again later."+(t.error&&""!=t.error?"nError: "+t.error:""))}function shortenUrl(t,l,r){waitElm=t.parentNode.nextSibling,waitElm&&(waitElm.style.display="inline"),loadscript("https://urltinyfy.appspot.com/"+r+"?unify=1&url="+encodeURIComponent(l)+"&callback=urltinyfyprompt_callback")}var waitElm=null;