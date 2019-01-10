function createCountdown() {
    var e = $('[data-hide-countdown="false"]#wedding-countdown');
    if (1 !== e.length) return !1;
    var t = e.data("wedding-date"),
        i = moment(t).startOf("day").diff(moment().startOf("day"), "days");
    if (0 === i) return e.html("Today!");
    var n = Math.abs(i),
        s = 0 > i ? "ago" : "to go",
        o = 1 != n ? "days" : "day",
        r = n + " " + o + " " + s;
    i > 0 && (r += "!"), e.html(r)
}
var mainNavContainerTop, mainNavContainerContainerHeight, onMainNavButtonPressed = function() {
        $("#main-nav").hasClass("visible") ? $("#main-nav").removeClass("visible") : $("#main-nav").addClass("visible"), onResize()
    },
    onResize = function() {
        mainNavContainerTop = $(".main-nav-container-container").offset().top, mainNavContainerContainerHeight = $("#main-nav-container").outerHeight(!0), $(".main-nav-container-container").css("min-height", mainNavContainerContainerHeight + "px"), $(".main-nav-container-container").width("100%"), checkLocationWrap()
    },
    onScroll = function() {
        var e = $("body").scrollTop(),
            t = $("html").scrollTop(),
            i = 0 != t ? t : e;
        i > mainNavContainerTop ? $("#main-nav-container.has_content").addClass("fixed") : $("#main-nav-container.has_content").removeClass("fixed")
    },
    init = function() {
        document.domain = window.location.hostname.match(/\.theknot.com/) ? "theknot.com" : window.location.hostname, window.location.hash && $(window.location.hash).length > 0 && $("html, body").animate({
            scrollTop: $(window.location.hash).eq(0).offset().top
        }, 0), createCountdown(), onResize(), $("button.main-nav").on("click", onMainNavButtonPressed), $(".rsvp-link").on("click", segmentIoTrackRsvp), $(".visit-website").on("click", segmentIoWebsiteClickThrough), checkTheme(), checkEditButton(), checkLocationWrap(), resizeCoverPhoto(), disableTurbolinks()
        $('#main-nav > ul > li').on('click', function() {
        	$("#main-nav").removeClass("visible")
        });
    };
$(window).scroll(onScroll), $(window).resize(onResize), $(function() {
    init()
}), $(document).on("page:load", function() {
    init()
});