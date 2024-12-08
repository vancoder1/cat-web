$(document).ready(function () {
    $('.mobile-menu-toggle').on('click', function () {
        $('.sidebar, .mobile-sidebar-overlay').toggleClass('show');
    });

    $('.mobile-sidebar-overlay').on('click', function () {
        $('.sidebar, .mobile-sidebar-overlay').removeClass('show');
    });
});