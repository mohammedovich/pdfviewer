!function(e,t){"use strict";"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd?define([],t):e.PdfViewer=t()}("object"==typeof window?window:this,function(){"use strict";function e(e){this.pdfUrl=e.pdfUrl||"",this.onerror=e.onerror||null,this.staticHost=e.staticHost||""}return e.prototype.embed=function(e){this.container=e;var t=document.createElement("iframe");t.height="100%",t.width="100%",t.frameBorder="none",t.src=this.staticHost+"?file="+encodeURIComponent(this.pdfUrl)+"&width="+e.clientWidth,e.innerHTML="",e.appendChild(t);var i,n=this;return"function"==typeof n.onerror?(this.receiveMessage=i=function(e){var t=e.origin,o=e.data;-1!=n.staticHost.indexOf(t)&&(n.onerror(o),window.removeEventListener("message",i,!1))},window.addEventListener("message",i,!1),this):void 0},e.prototype.destroy=function(){this.container&&(this.container.innerHTML=""),this.receiveMessage&&window.removeEventListener("message",this.receiveMessage,!1)},e});