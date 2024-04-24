$('.hamburger > img, .closeicon > span').click(() => {
    if ($('.nav_list').hasClass('showbar')) {
        $(".nav_list").removeClass('showbar');
    } else {
        $(".nav_list").addClass('showbar');
    }
});