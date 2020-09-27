(function ($) {
  "use strict";

  jQuery(document).ready(function ($) {

    $(".open-btn").click(function () {
      $(".main-menu").addClass("active");
    });
    $(".close-btn").click(function () {
      $(".main-menu").removeClass("active");
    });

  });
})(jQuery);
