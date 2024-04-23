$(function () {
  /*=================================================
  画面に表示されたタイミングで処理を実行
  ===================================================*/

  $(window).scroll(function () {
    $(".products-item").each(function () {
      var scroll = $(window).scrollTop();
      var target = $(this).offset().top;
      var windowHeight = $(window).height();
      if (scroll > target - windowHeight + $(this).outerHeight()) {
        // outerHeight()はpaddingを含めた高さを取得する
        $(this).addClass("slide-to-bottom");
      }
    });
  });

  $(window).scroll(function () {
    $("#news").each(function () {
      var scroll = $(window).scrollTop();
      var target = $(this).offset().top;
      var windowHeight = $(window).height();
      if (scroll > target - windowHeight +50 ) {
        $(this).addClass("slide-to-bottom");
      }
    });
  });

  $(document).ready(function () {
    $(".store").each(function () {
      var scroll = $(window).scrollTop();
      var target = $(this).offset().top;
      var windowHeight = $(window).height();
      if (scroll > target - windowHeight + $(this).outerHeight()) {
        $(this).addClass("slide-to-bottom");
      }
    });
  });

  $(document).ready(function () {
    $(".menu").each(function () {
      var scroll = $(window).scrollTop();
      var target = $(this).offset().top;
      var windowHeight = $(window).height();
      if (scroll > target - windowHeight + $(this).outerHeight()) {
        $(this).addClass("slide-to-top");
      }
    });
  });







  // 配列とfor文を使えば簡略化できる
  // $(window).scroll(function () {
  //   var classes = ["inview-slide-left", "inview-slide-right", "inview-balloon"];
  //   var addClasses = ["slide-left", "slide-right", "balloon"];

  //   var scroll = $(window).scrollTop();
  //   var windowHeight = $(window).height();

  //   for (var i = 0; i < classes.length; i++) {
  //     $("." + classes[i]).each(function () {
  //       var target = $(this).offset().top;
  //       if (scroll > target - windowHeight + $(this).outerHeight()) {
  //         $(this).addClass(addClasss[i]);
  //       }
  //     });
  //   }
  // });

});