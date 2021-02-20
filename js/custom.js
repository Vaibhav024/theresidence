$(document).ready(function() {
    $('header ul li').on('click', function() {
        $('header ul li').removeClass('active');
        $(this).addClass('active');
    })
    $('.gallery_ul li').on('click', function() {
        $('.wrapper').addClass('open_details').removeClass('gallery_open');
    })
    $('header ul li:nth-child(2)').on('click', function() {
        $('.wrapper').removeClass('about_open').addClass('gallery_open');
    })
    $('header ul li:nth-child(1)').on('click', function() {
        $('.wrapper').removeClass('gallery_open open_details').addClass('about_open');
    })
});
$(window).on('load', function() {
    setTimeout(function() {
        $('.wrapper').addClass('about_open');
    }, 500);
})