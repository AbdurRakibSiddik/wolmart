// var apps = $('.nav').offset().top;

// $(window).scroll(function(){
//     var appscroll = $(this).scrollTop();

//     if(appscroll > apps){
//            $('.nav').addClass('manu_fixed');
//     }
//     else{
//         $('.nav').removeClass('manu_fixed');
//     }
// });


// $('.back_top').click(function(){
//     var scrolling = $('html, body').animate({
//         scrollTop:0,
//     }, 1000);
// });

// $(window).scroll(function(){
//     var scroll = $(this).scrollTop();
//     if(scroll > 200){
//         $('.back_top').fadeIn();
//     }
//     else{

//         $('.back_top').fadeOut();
// }
// });
// $().();




$(function () {

    'use strict';

    //==============================manu fixed start-----------------

    // var manu = $('.mani_manu').offset().top;

    // $(window).scroll(function(){

    //     var manu_fix = $(this).scrollTop();
    //     if( manu_fix > manu ){
    //         $('.mani_manu').addClass('fixxed');
    //     }
    //     else{
    //         $('.mani_manu').removeClass('fixxed');

    //     }


    // });


    //==============================manu fixed end-----------------

    //==============================scroll fixed start-----------------


    $('.back_top').click(function () {
        $('html, body').animate({
            scrollTop: 0,
        });
    });





    //==============================scroll fixed end-----------------
    //==============================scrollling start-----------------

    $(window).scroll(function () {

        var scrolling = $(this).scrollTop();
        if (scrolling > 200) {
            $('.back_top').fadeIn();
        } else {
            $('.back_top').fadeOut();

        }

    });



    //==============================scrollling end-----------------



    //=================banner part slick slider start=======================


    $('#banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
    });

    $('.test_banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
    });


    //=================veno box code start=======================

    new VenoBox({
        selector: ".video"
    });

    //===================counter up======================


    $('.counter').counterUp();
})

//========================clients part=========================

// $('.client_slider').slick({
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 1000,
//    centerMode: true,
//    centerPadding: 0,
//     arrows: true,
//     nextArrow: '<i class="fas fa-chevron-right nxt_arr"></i>',
//     prevArrow: '<i class="fas fa-chevron-left prv_arr"></i>',
// });


$('.client_slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: true,
    centerMode: true,
    centerPadding: 0,
    nextArrow: '<i class="fas fa-chevron-right nxt_arr"></i>',
    prevArrow: '<i class="fas fa-chevron-left prv_arr"></i>',
});