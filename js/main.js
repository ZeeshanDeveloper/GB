//main
/*mbl-nav
$(".mbl-nav-opener").click(function () {
    $(".mbl-nav").addClass("mbl-nav-opened");
    $("body").addClass("lock");
    $(".mbl-nav-opened").bind("click", function () {
        $(".mbl-nav").removeClass("mbl-nav-opened");
        $("body").removeClass("lock");
    });
});
$(".mbl-nav .box").click(function (e) {
    e.stopPropagation();
});
$(".mbl-dot-nav-opener").click(function () {
    $(".mbl-nav").addClass("mbl-nav-opened");
    $("body").addClass("lock");
    $(".mbl-nav-opened").bind("click", function () {
        $(".mbl-nav").removeClass("mbl-nav-opened");
        $("body").removeClass("lock");
    });
});*/
/*mobile nav ropdown*/
$(".nav-cus ul .c-dropdown").click(function () {
    /*    let ele = document.getElementsByClassName("c-dropdown-menu");
        var i;
        for (i = 0; i < ele.length; i++) {
            let openDropdown = ele[i];
            if (openDropdown.classList.contains('show')) {
                $('.nav-cus ul .c-dropdown .show').animate({
                    height: 'toggle'
                });
                $('.nav-cus ul .c-dropdown .show').removeClass("show");
            }
            else {
                $(this).find('.c-dropdown-menu').animate({
                    height: 'toggle'
                });
                $(this).find('.c-dropdown-menu').addClass("show");
            }
        }*/
    if ($(this).find('.c-dropdown-menu').hasClass("show")) {
        $('.nav-cus ul .c-dropdown .show').animate({
            height: 'toggle'
        });
        $('.nav-cus ul .c-dropdown .c-dropdown-menu').removeClass("show");
    }
    else {
        $('.nav-cus ul .c-dropdown .show').animate({
            height: 'toggle'
        });
        $('.nav-cus ul .c-dropdown .c-dropdown-menu').removeClass("show");

        $(this).find('.c-dropdown-menu').animate({
            height: 'toggle'
        });
        $(this).find('.c-dropdown-menu').addClass("show");
    }
});

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName("c-dropdown-menu");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                $('.nav-cus ul .c-dropdown .show').animate({
                    height: 'toggle'
                });
                $('.nav-cus ul .c-dropdown .c-dropdown-menu').removeClass("show");
            }
        }
    }
}




/*categorie-side*/
$(".mbl-category-opener").click(function () {
    $('.mbl-nav .mbl-category').animate({
        height: 'toggle'
    });
    $('.mbl-nav .norm').animate({
        height: 'toggle'
    });
});
$(".mbl-nav .mbl-category .back").click(function () {
    $('.mbl-nav .mbl-category').animate({
        height: 'toggle'
    });
    $('.mbl-nav .norm').animate({
        height: 'toggle'
    });
});


$(".home-timeline .boxbox .box").click(function () {
    $(".home-timeline .boxbox .box").removeClass("active");
    $(this).addClass("active");
});


$(".nav-opener").click(function () {
    $(".mbl-nav").addClass("mbl-nav-opened");
    $("body").addClass("lock");
    $(".mbl-nav-opened").bind("click", function () {
        $(".mbl-nav").removeClass("mbl-nav-opened");
        $("body").removeClass("lock");
    });
});
$(".mbl-nav .box").click(function (e) {
    e.stopPropagation();
});
$(".mbl-dot-nav-opener").click(function () {
    $(".mbl-nav").addClass("mbl-nav-opened");
    $("body").addClass("lock");
    $(".mbl-nav-opened").bind("click", function () {
        $(".mbl-nav").removeClass("mbl-nav-opened");
        $("body").removeClass("lock");
    });
});


$("#about-opener").click(function () {
    $("#about-drop").addClass("block");
    $(".mbl-nav .norm").addClass("none");
});
$("#about-close").click(function () {
    $("#about-drop").removeClass("block");
    $(".mbl-nav .norm").removeClass("none");
});

$("#career-opener").click(function () {
    $("#career-drop").addClass("block");
    $(".mbl-nav .norm").addClass("none");
});
$("#career-close").click(function () {
    $("#career-drop").removeClass("block");
    $(".mbl-nav .norm").removeClass("none");
});

$("#media-opener").click(function () {
    $("#media-drop").addClass("block");
    $(".mbl-nav .norm").addClass("none");
});
$("#media-close").click(function () {
    $("#media-drop").removeClass("block");
    $(".mbl-nav .norm").removeClass("none");
});




/*mbl-nav
$(".mbl-nav-opener").click(function () {
    $(".mbl-nav").addClass("mbl-nav-opened");
    $("body").addClass("lock");
    $(".mbl-nav-opened").bind("click", function () {
        $(".mbl-nav").removeClass("mbl-nav-opened");
        $("body").removeClass("lock");
    });
});
$(".mbl-nav .box").click(function (e) {
    e.stopPropagation();
});
$(".mbl-dot-nav-opener").click(function () {
    $(".mbl-nav").addClass("mbl-nav-opened");
    $("body").addClass("lock");
    $(".mbl-nav-opened").bind("click", function () {
        $(".mbl-nav").removeClass("mbl-nav-opened");
        $("body").removeClass("lock");
    });
});
$(".search-opener").click(function () {
    $(this).toggleClass("opened");
    $(".header").toggleClass("search-opened");
});
$(".search-opener input").click(function (e) {
    e.stopPropagation();
});*/
