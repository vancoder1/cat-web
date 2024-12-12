$(document).ready(function () {
    // Mobile menu toggle functionality
    $('.mobile-menu-toggle').on('click', function () {
        $('.sidebar, .mobile-sidebar-overlay').toggleClass('show');
    });

    $('.mobile-sidebar-overlay').on('click', function () {
        $('.sidebar, .mobile-sidebar-overlay').removeClass('show');
    });
});