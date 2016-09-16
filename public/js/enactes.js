$(window).load(function() {
   new WOW().init();
});

// header opacity fades on scroll
if ($('.a-propos') != undefined) {
    var header = $('.a-propos');
    var range = 200;
}
$(window).on('scroll', function () {
    if ($('.a-propos') != undefined) {
        var scrollTop = $(this).scrollTop();
        var offset = header.offset().top;
        var height = header.outerHeight();
        offset = offset + 5 * height / 6;
        var calc = 1 - (scrollTop - offset + range) / range;

        header.css({ 'opacity': calc });

        if ( calc > '1' ) {
          header.css({ 'opacity': 1 });
        } else if ( calc < '0' ) {
          header.css({ 'opacity': 0 });
        }
    }
});

// a.page-scroll scrolls to #id
$('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: ($($anchor.attr('href')).offset().top)
    }, 1250, 'easeInOutQuart');
    event.preventDefault();
});
