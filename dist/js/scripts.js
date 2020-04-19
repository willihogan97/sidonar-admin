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

function setPenggunaTimer() {
    pengguna = JSON.parse(localStorage.getItem("pengguna"));
    lastID = localStorage.getItem("lastPenggunaID");
    if (lastID == null || lastID == NaN) {
        lastID = 0;
        localStorage.setItem("lastPenggunaID", lastID);
    } else {
        lastID = parseInt(lastID)
    }
    if (pengguna == null) {
        pengguna = [];
        penggunaNew = {
            "id": lastID + 1,
            "nama": "William Adjandra",
            "gol_darah": "O",
            "rhesus": "+",
            "email": "william@email.com",
            "is_verified": false,
            "alamat": "Jln. asdasd",
            "no_telp": "08967123123",
            "no_telp_darurat": "08967123123",
        };
        pengguna.push(penggunaNew);
    }
    penggunaNew = {
        "id": lastID + 1,
        "nama": "William Adjandra",
        "gol_darah": "AB",
        "rhesus": "-",
        "email": "william@email.com",
        "is_verified": false,
        "alamat": "Jln. asdasd",
        "no_telp": "08967123123",
        "no_telp_darurat": "08967123123",
    };
    pengguna.push(penggunaNew);
    localStorage.setItem("hasNewPengguna", true);
    localStorage.setItem("lastPenggunaID", lastID+1);
    localStorage.setItem("pengguna", JSON.stringify(pengguna));
}