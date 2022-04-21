jQuery(document).ready(function ($) {
  var $window = $(window), // Основное окно
    $target = $("main-nav"), // Блок, который нужно фиксировать при прокрутке
    $h = $target.offset().top; // Определяем координаты верха нужного блока (например, с навигацией или виджетом, который надо фиксировать)

  $window.on("scroll", function () {
    // Как далеко вниз прокрутили страницу
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Если прокрутили скролл ниже макушки нужного блока, включаем ему фиксацию
    if (scrollTop > $h) {
      $target.addClass("about-us");

      // Иначе возвращаем всё назад
    } else {
      $target.removeClass("about-us");
    }
  });
});
