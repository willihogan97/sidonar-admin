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
            "tgl_lahir": "11/07/97"
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
        "tgl_lahir": "11/07/97"
    };
    pengguna.push(penggunaNew);
    localStorage.setItem("hasNewPengguna", true);
    localStorage.setItem("lastPenggunaID", lastID+1);
    localStorage.setItem("pengguna", JSON.stringify(pengguna));
}

function setAll() {
    if (localStorage.getItem("pengguna") == null) {
        localStorage.setItem("pengguna", JSON.stringify([]));   
    }
    if (localStorage.getItem("faskes") == null) {
        all_faskes = []
         faskesNew = {
            "id": 1,
            "nama": "PMI Pusat",
            "no_telp": "081215482",
            "email": "team@pmi.co.id",
            "alamat": "Jl. Kramat Raya No.47 DKI Jakarta"
        }
        all_faskes.push(faskesNew)
        localStorage.setItem("lastFaskesID", 1);
        localStorage.setItem("faskes", JSON.stringify(all_faskes));   
    }
    if (localStorage.getItem("event") == null) {
        all_event = []
        eventNew = {
            "id": 1,
            "nama": "Donor Darah Serentak 2020",
            "penyelenggara": "PMI Jakarta",
            "lokasi": "Jakarta Pusat",
            "link_url": "http://utdpmidkijakarta.or.id/",
            "gambar_path": ""
        }
        all_event.push(eventNew)
        localStorage.setItem("lastEventID", 1);
        localStorage.setItem("event", JSON.stringify(all_event));   
    }
    if (localStorage.getItem("gol_darah") == null) {
        all_gol_darah = []
        id = 1
        for (var i = 0; i < 5; i++) {
            gol_darah = {
                "id": id,
                "gol_darah": "A (+)",
                "faskes": "PMI Pusat",
                "no_telp": "081231321",
                "alamat": "Jakarta Pusat",
                "jumlah": "24 Kantong"
            }
            id++
            all_gol_darah.push(gol_darah)
            gol_darah = {
                "id": id,
                "gol_darah": "AB (+)",
                "faskes": "PMI Pusat",
                "no_telp": "081231321",
                "alamat": "Jakarta Pusat",
                "jumlah": "14 Kantong"
            }
            id++
            all_gol_darah.push(gol_darah)
            gol_darah = {
                "id": id,
                "gol_darah": "O (+)",
                "faskes": "PMI Pusat",
                "no_telp": "081231321",
                "alamat": "Jakarta Pusat",
                "jumlah": "10 Kantong"
            }
            id++
            all_gol_darah.push(gol_darah)
        }
        localStorage.setItem("stok_darah", JSON.stringify(all_gol_darah));   
    }
}