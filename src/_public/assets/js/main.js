$(document).ready(function(){

  // auto slide
  $('.c-slider__list').slick({
    fade: true,
    autoplay: true,
    autoplayspeed: 6000,
    speed: 2000,
    arrows: false,
    dots: false,
    pauseOnFocus: false,
    pauseOnHover: false,
  });

  // Animation Slide
  $('.c-slider__item.slick-active').addClass("anima");
  $('.c-slider__list').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    slick.$slides.eq(nextSlide).addClass("anima");
    setTimeout(function () {
      $(".c-slider__item:not(.slick-active)").removeClass("anima");
    }, 0);
  });

  // Tab Recruit
  $(".c-recruit__tabcont").hide();
  $(".c-recruit__tabs li:first").addClass("is-active").show();
  $(".c-recruit__tabcont:first").show();
  $(".c-recruit__tabs li").click(function () {
    $(".c-recruit__tabs li").removeClass("is-active");
    $(this).addClass("is-active");
    $(".c-recruit__tabcont").hide();
    var activeTab = $(this).find("a").attr("href");
    $(activeTab).fadeIn();
    return false;
  });

  // Back to top
  $(".c-backtotop").addClass("c-hidetop");
  $(window).scroll(function(){
      if ($(this).scrollTop() > 80) {
          $('.c-backtotop').removeClass("c-hidetop");
      } else {
          $('.c-backtotop').addClass("c-hidetop");
      }
  });
  $('.c-backtotop').click(function(){
      $('html, body').animate({scrollTop : 0},800);
      return false;
  });

  // Menu On Scroll
  $(document).on('click', 'a[href^="#"]', function(e) {
    var id = $(this).attr('href');
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }
    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();

    // top position relative to the document
    var pos = $id.offset().top - 30;
    if($(window).width() < 1050){
      pos = $id.offset().top - 80;
    }
    if($(window).width() < 767){
      pos = $id.offset().top - 60;
    }
    // animated top scrolling
    $('body, html').animate({scrollTop: pos},1000);
  });

  
  $(window).scroll(function () {
    var windowPos = $(window).scrollTop();
    $('.c-header  a[href^="#"]').each(function () {
      var currentLink = $(this);
      if ($(currentLink.attr("href")).length > 0) {
        var refElement = $(currentLink.attr("href"));
        if (
          refElement.position().top - $(".c-header").outerHeight() <= windowPos &&
          refElement.position().top + refElement.outerHeight() - $(".c-header").outerHeight() >= windowPos
        ) {
          $(".c-header .c-navmn__item a").removeClass("is-menuactive");
          currentLink.parent().addClass("is-menuactive");
        } else {
          currentLink.parent().removeClass("is-menuactive");
        }
      }
    });
  });

  //Menu Mobile c-navspbtn
  $('.c-header .c-navspbtn').click(function(){
    $('.c-header .c-navmn').toggleClass('is-open');
    $(this).toggleClass('is-active');
    $('body').toggleClass('is-fixed');
    
  });
  if($(window).width() <= 767){
    $('.c-navmn a').click(function(){
      $('.c-header .c-navmn').toggleClass('is-open');
      $('.c-header .c-navspbtn').toggleClass('is-active');
      $('body').toggleClass('is-fixed');
    });
    $('.c-btmenu a').click(function(){
      $('.c-header .c-navmn').removeClass('is-open');
      $('.c-header .c-navspbtn').removeClass('is-active');
      $('body').removeClass('is-fixed');
    });
  }
  

  // Open Popup Photo
  var imgPopup = $(".c-photopp");
  var imgCont = $(".c-photo__item");
  var popupImage = $(".c-photopp img");
  var overlay = $('.c-photopp__overlay');
  var closeBtn = $(".c-close");

  imgCont.on("click", function () {
    var img_src = $(this).find("img").attr("src");
    imgPopup.find("img").attr("src", img_src);
    imgPopup.addClass("c-opened");
    $('body').addClass('is-fixed');
  });

  $(closeBtn).on("click", function () {
    imgPopup.removeClass("c-opened");
    $('body').removeClass('is-fixed');
  });
  $(overlay).on("click", function () {
    imgPopup.removeClass("c-opened");
    $('body').removeClass('is-fixed');
  });

  popupImage.on("click", function (e) {
    e.stopPropagation();
  });
  
  // Open Popup Interview
  $("[data-popup-open]").on("click", function () {
    var popup_name = $(this).attr("data-popup-open");
    $('[data-popup-name="' + popup_name + '"]').fadeIn(300);
    $('.c-intervpp').addClass('is-openiv');
    $('body').addClass('is-fixed');
  });

  $("[data-popup-close]").on("click", function () {
    var popup_name = $(this).attr("data-popup-close");
    $('[data-popup-name="' + popup_name + '"]').fadeOut(300);
    $('.c-intervpp').removeClass('is-openiv');
    $('body').removeClass('is-fixed');
  });

  $(".c-intervpp__overlay").on("click", function () {
    $('.c-intervpp').removeClass('is-openiv');
    $('body').removeClass('is-fixed');
    $('.c-intervpp__box').fadeOut(300);
  });
});