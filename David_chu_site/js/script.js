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
  