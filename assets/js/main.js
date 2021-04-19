$(function () {
    "use strict";
    $(window).on("load", function (event) {
        $("#preloader").delay(500).fadeOut(500);
    });
    //Start navbar
    // Modal Activation
    $('#search-switch').on('click', function (){
        $('.search-model-box').fadeIn(400);
    });

    $('.search-close-btn').on('click', () => {
        $('.search-model-box').fadeOut(400, () => {
            $('#search-input').val('');
        });
    });
    $(".binduz-er-news-canvas_open").on("click", function () {
        $(".binduz-er-news-offcanvas_menu_wrapper,.binduz-er-news-off_canvars_overlay").addClass("binduz-er-news-active");
    });
    $(".binduz-er-news-canvas_close,.binduz-er-news-off_canvars_overlay").on("click", function () {
        $(".binduz-er-news-offcanvas_menu_wrapper,.binduz-er-news-off_canvars_overlay").removeClass("binduz-er-news-active");
    });
    var $offcanvasNav = $(".binduz-er-news-offcanvas_main_menu"),
        $offcanvasNavSubMenu = $offcanvasNav.find(".binduz-er-news-sub-menu");
    $offcanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i class="far fa-angle-down"></i></span>');
    $offcanvasNavSubMenu.slideUp();
    $offcanvasNav.on("click", "li a, li .menu-expand", function (e) {
        var $this = $(this);
        if (
            $this
                .parent()
                .attr("class")
                .match(/\b(binduz-er-news-menu-item-has-children|has-children|has-sub-menu)\b/) &&
            ($this.attr("href") === "#" || $this.hasClass("menu-expand"))
        ) {
            e.preventDefault();
            if ($this.siblings("ul:visible").length) {
                $this.siblings("ul").slideUp("binduz-er-news-slow");
            } else {
                $this.closest("li").siblings("li").find("ul:visible").slideUp("binduz-er-news-slow");
                $this.siblings("ul").slideDown("binduz-er-news-slow");
            }
        }
        if ($this.is("a") || $this.is("span") || $this.attr("clas").match(/\b(binduz-er-news-menu-expand)\b/)) {
            $this.parent().toggleClass("binduz-er-news-menu-open");
        } else if ($this.is("li") && $this.attr("class").match(/\b('binduz-er-news-menu-item-has-children')\b/)) {
            $this.toggleClass("binduz-er-news-menu-open");
        }
    });
    $(".binduz-er-newsr-popup-audio").magnificPopup({ type: "inline", midClick: true });
    $(".container").imagesLoaded(function () {
        var $grid = $(".binduz-er-grid").isotope({ transitionDuration: "1s" });
        $(".binduz-er-project-menu ul").on("click", "li", function () {
            var filterValue = $(this).attr("data-filter");
            $grid.isotope({ filter: filterValue });
        });
        $(".binduz-er-project-menu ul li").on("click", function (event) {
            $(this).siblings(".binduz-er-active").removeClass("binduz-er-active");
            $(this).addClass("binduz-er-active");
            event.preventDefault();
        });
    });
    // Start Video Popup
    $('.binduz-er-video-popup').magnificPopup({type: "iframe"});
    $(".binduz-er-image-popup").magnificPopup({ type: "image", gallery: { enabled: true } });
    
    //Start Search Box
    $(".binduz-er-news-search-open").on("click", function () {
        $(".binduz-er-news-search-box").addClass("open");
    });
    $(".binduz-er-news-search-close-btn").on("click", function () {
        $(".binduz-er-news-search-box").removeClass("open");
    });
    $(".binduz-er-select-item select").niceSelect();
    
    // Start Scroll Up
    $(window).on("scroll", function (event) {
        if ($(this).scrollTop() > 600) {
            $(".binduz-er-back-to-top").fadeIn(200);
        } else {
            $(".binduz-er-back-to-top").fadeOut(200);
        }
    });
    $(".binduz-er-back-to-top").on("click", function (event) {
        event.preventDefault();
        $(window).scrollTop(0);
    });
});
