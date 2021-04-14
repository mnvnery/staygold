$( ".projects-drop" ).click(function() {
    $(".projects").toggleClass("projects-open");
});

$( ".projects-drop" ).mouseover(function() {
    $(".projects").addClass("projects-open");
});

$( ".pledge" ).mouseover(function() {
    $(".projects").removeClass("projects-open");
});


$('a').attr('target', function() {
    if(this.host == location.host) return '_self'
    else return '_blank'
});

// On click
$( ".hamburger" ).click(function() {
    // Toggle class "is-active"
    $( ".hamburger" ).toggleClass("is-active");
    $(".menu").toggle();
    $(".mobile-grid").toggleClass("mobile-sidebar");
    $(".logo").toggleClass("logo-open");
    // Do something else, like open/close menu
});