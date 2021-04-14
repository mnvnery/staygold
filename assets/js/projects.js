$( ".projects-drop" ).click(function() {
    $(".projects").toggleClass("projects-open");
});

$( ".projects-drop" ).mouseover(function() {
    $(".projects").addClass("projects-open");
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