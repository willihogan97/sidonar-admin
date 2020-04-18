/*!
    * Start Bootstrap - SB Admin v6.0.0 (https://startbootstrap.com/templates/sb-admin)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-sb-admin/blob/master/LICENSE)
    */
    (function($) {
    "use strict";

    // Add active state to sidbar nav links
    var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
        $("#layoutSidenav_nav .sb-sidenav a.nav-link").each(function() {
            if (this.href === path) {
                $(this).addClass("active");
            }
        });

    // Toggle the side navigation
    $("#sidebarToggle").on("click", function(e) {
        e.preventDefault();
        $("body").toggleClass("sb-sidenav-toggled");
    });
})(jQuery);

function setPengguna() {
    pengguna = JSON.parse(localStorage.getItem("pengguna"))
    penggunaNew = {
        "nama": "William Adjandra",
        "gol_darah": "AB (-)",
        "email": "william@email.com",
        "is_verified": false
    }
    pengguna.push(penggunaNew)
    localStorage.setItem("pengguna", JSON.stringify(pengguna));
}

function getPengguna() {
    return JSON.parse(localStorage.getItem("pengguna"))
}