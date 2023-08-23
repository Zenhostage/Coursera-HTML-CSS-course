document.addEventListener("DOMContentLoaded", function() {
    var navbarToggle = document.querySelector("#navbarToggle");
    navbarToggle.addEventListener("blur", function(event) {
      var screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        var collapsableNav = document.querySelector("#navbarSupportedContent");
        var bsCollapse = new bootstrap.Collapse(collapsableNav, { toggle: false });
        bsCollapse.hide();
      }
    });
  });
  
(function (global){

var dc ={};

var homeHtml ="snippets/home-snippet.html";

var insertHtml = function( selector, html){
    var targetElem = document.querySelector(selector);
    targetElem.innerHTML = html;

}
var showLoading = function(selector){
  var html = "<div class= 'text center'>";
  html += "<img src= 'images/ajax-loader.gif'></div>"
  insertHtml(selector, html);

}

// On page load) before images or CSS)
document.addEventListener("DOMContentLoaded", function(event){

  
showLoading("#main-content");


$ajaxUtils.sendGetRequest(
  homeHtml,
  function(responseText){
    document.querySelector("#main-content").innerHTML =responseText;
  },
  false);
  
});




global.$dc = dc;

})(window);