(()=>{var e={476:e=>{function t(e){let t=e.split("-").join(""),n=t.substring(0,9),i=1,r=0;for(let e=0;e<n.length;e++)parsedChar=parseInt(n[e]),r+=i*parsedChar,i+=1;let u=r%11;return 10===u&&(u="X"),t[9]===u.toString()}e.exports={checkISBN:t,connectStrings:function(e,n,i,r){return t(e+n+i+r)}}}},t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={exports:{}};return e[i](r,r.exports,n),r.exports}(()=>{const{checkISBN:e}=n(476),{connectStrings:t}=n(476);function i(){document.getElementById("isbnOK").style.visibility="hidden",document.getElementById("isbnCorrupt").style.visibility="hidden"}function r(){i();const e=document.querySelector("#inputOne").value,n=document.querySelector("#inputThree").value,r=document.querySelector("#inputFive").value,u=document.querySelector("#inputCheck").value;!0===t(e,n,r,u)?document.getElementById("isbnOK").style.visibility="visible":document.getElementById("isbnCorrupt").style.visibility="visible"}i();const u=document.querySelector("#inputOne"),o=document.querySelector("#inputThree"),l=document.querySelector("#inputFive"),s=document.querySelector("#inputCheck");u.addEventListener("input",r),o.addEventListener("input",r),l.addEventListener("input",r),s.addEventListener("input",r),document.getElementsByClassName("inputFields")[0].onkeyup=function(e){var t=e.target,n=parseInt(t.attributes.maxlength.value,10),i=t.value.length;if(i>=n){for(var r=t;(r=r.nextElementSibling)&&null!=r;)if("input"==r.tagName.toLowerCase()){r.focus();break}}else if(0===i)for(var u=t;(u=u.previousElementSibling)&&null!=u;)if("input"===u.tagName.toLowerCase()){u.focus();break}}})()})();