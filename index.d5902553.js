document.querySelectorAll("li").forEach(function(e){var t=document.createElement("span");t.textContent=e.firstChild.textContent,e.replaceChild(t,e.firstChild),t.addEventListener("click",function(){var t=e.querySelector("ul");t&&(t.hidden=!t.hidden)})});
//# sourceMappingURL=index.d5902553.js.map
