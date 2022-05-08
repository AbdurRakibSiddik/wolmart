$(function(){
    'use strict';
//+++++++++++++manu fixed start++++++++++++++++++++++++

var manu = $('#manu').offset().top;

$(window).scroll(function(){
  var manu_fixed = $(this).scrollTop();
  if( manu_fixed > manu ){
    $('#manu').addClass('fixxed');
  }
  else{
    $('#manu').removeClass('fixxed');

  }
});

//+++++++++++++manu fixed end++++++++++++++++++++++++

// ++++++++++++++++++ back to top button start ++++++++++++++++++


$('.back_top').click(function(){
  $('html, body').animate({
    scrollTop:0,
  });
});

$(window).scroll(function(){
  var scroll = $(this).scrollTop();
  if( scroll > 300){
    $('.back_top').fadeIn();
  }
  else{
    
    $('.back_top').fadeOut();
  }
});


// ++++++++++++++++++ back to top button end++++++++++++++++++


    //=========banner slider start=======

    $('#banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        prevArrow: '<i class="fas fa-chevron-left prvarr"></i>',
        nextArrow:'<i class="fas fa-chevron-right nxtarr"></i>',
      });
                      
    //=========banner slider end=======

    //=============zoom count down start=================

    $('.zoom_count_down').countdown('2025/01/01', function(event) {
      $(this).html(event.strftime('%n, days %H : %M : %S'));
    });

    //=============zoom count down end=================


    //==============zoom handle counter start==============
    $('#handleCounter').handleCounter()
    //==============zoom handle counter end==============

    //=============zoom left slider start==========================

    $('.zoom_left_slide').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      arrows: true,
      prevArrow: '<i class="fas fa-chevron-left prvarr"></i>',
      nextArrow:'<i class="fas fa-chevron-right nxtarr"></i>',
    });

    //=============zoom left slider end==========================
    //=============fadein and fadeout start==========================
    $('.show').click(function(){
      $('.btn_body').toggle(200);
    });
  
  
    //=============fadein and fadeout end==========================

    //=============seller slider start==========================
    $('.top_seller').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      arrows: true,
      prevArrow: '<i class="fas fa-chevron-left prvarr"></i>',
      nextArrow:'<i class="fas fa-chevron-right nxtarr"></i>',
    });

    //=============seller slider end==========================
    //============= blog page populer slider slider start ==========================
    $('.populer_slide').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      arrows: true,
      prevArrow: '<i class="fas fa-chevron-left prvarr"></i>',
      nextArrow:'<i class="fas fa-chevron-right nxtarr"></i>',
    });

    //=============blog page populer slider slider end==========================
    //=============populer department filter start==========================

    var containerEl = document.querySelector('.p_department_img');

    var mixer = mixitup(containerEl);

    //=============populer department filter end==========================
    //============= pages counter up start==========================

    $('.counter').counterUp({
      delay: 10,
      time: 500,
    });
  
    //============= pages counter up end==========================










})