/* ====================================
Иницилизируем offcanvas меню 
==================================== */
$(document).ready(() => {
  $('.main-header__toggle').on('click', function (fn) {
    fn.preventDefault();
    $('.main-header__menu').toggleClass('main-header__menu_active');
  })
});

/* ===================================================
Функция закрывает шторку навигации в мобильной версии 
====================================================== */
var nav = document.querySelector('.main-header__menu');
(function (btn) {
  for (let value of btn)  
    value.onclick = function () {
      nav.classList.remove('main-header__menu_active');
    };
})(document.querySelectorAll(".header-list__link"));


/* ==========================================
Функция изменяет navbar при скролле навигации
============================================= */
$(document).ready(() => {
  $(window).on('scroll', function () {
    var $nav = $('.main-header__menu'),
      $nav_list = $('.header-list'),
      scroll = window.scrollY;
    if (scroll > 100) {
      $nav.addClass('main-header__menu_offcanvas'),
        $nav_list.addClass('header-list_offcanvas');
    } else {
      $nav.removeClass('main-header__menu_offcanvas');
      $nav.removeClass('main-header__menu_active');
      $nav_list.removeClass('header-list_offcanvas');
    }
  });
});


/* ================
Кнопка more\less
=================== */
$(document).ready(() => {
  $("#nextContentsMore").click(function () {
    $("#nextContentsList").fadeIn();
    $("#nextContentsLess").fadeIn();
    $("#nextContentsMore").hide();
  });
  $("#nextContentsLess").click(function () {
    $("#nextContentsList").fadeOut();
    $("#nextContentsLess").fadeOut();
    $("#nextContentsMore").fadeIn();
  });
});

/* ========================
Иницилизируем карусель slick
=========================== */
$(document).ready(() => {
  $('.block-slider').slick({
    arrows: false,
    dots: true
  });
});

/* ========================
Эффект мягкого скролла
=========================== */
$(document).ready(() => {
  var $page = $('html, body');
  $('.header-list__link').click(function () {
    $page.animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
    return false;
  });
});