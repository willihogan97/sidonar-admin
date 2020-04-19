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
        allPengguna = []
        penggunaNew = {
            "id": 1,
            "nama": "William Adjandra",
            "gol_darah": "O",
            "rhesus": "+",
            "email": "william@email.com",
            "is_verified": false,
            "alamat": "Jl. Topi Saya Bundar No.8, Jakarta Selatan, DKI Jakarta",
            "no_telp": "08987654321",
            "no_telp_darurat": "08987654322",
            "tgl_lahir": "11/07/97",
            "gambar_path": "william.jpg"
        };
        allPengguna.push(penggunaNew)
        penggunaNew = {
            "id": 2,
            "nama": "Yosua Bisma",
            "gol_darah": "A",
            "rhesus": "+",
            "email": "yosua@email.com",
            "is_verified": true,
            "alamat": "Jl. Aku Anak Sehat No.8, Jakarta Selatan, DKI Jakarta",
            "no_telp": "08123456789",
            "no_telp_darurat": "08123456799",
            "tgl_lahir": "15/10/97",
            "gambar_path": "yosua.jpg"
        };
        allPengguna.push(penggunaNew)
        localStorage.setItem("lastPenggunaID", 2);
        localStorage.setItem("pengguna", JSON.stringify(allPengguna));   
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
                "jumlah": "24"
            }
            id++
            all_gol_darah.push(gol_darah)
            gol_darah = {
                "id": id,
                "gol_darah": "AB (+)",
                "faskes": "PMI Pusat",
                "no_telp": "081231321",
                "alamat": "Jakarta Pusat",
                "jumlah": "14"
            }
            id++
            all_gol_darah.push(gol_darah)
            gol_darah = {
                "id": id,
                "gol_darah": "O (+)",
                "faskes": "PMI Pusat",
                "no_telp": "081231321",
                "alamat": "Jakarta Pusat",
                "jumlah": "10"
            }
            id++
            all_gol_darah.push(gol_darah)
        }
        localStorage.setItem("stok_darah", JSON.stringify(all_gol_darah));   
    }
    if (localStorage.getItem("donor") == null) {
        all_donor = []
        donor = {
            "id": 1,
            "id_donor": "DO01",
            "tanggal": "24/04/2020",
            "resipien": "Jacob",
            "gol_darah": "A",
            "rhesus": "+",
            "deskripsi": "Kecelakaan",
            "pendonor": "Larry",
            "email_resipien": "jacob@email.com",
            "email_pendonor": "larry@email.com",
            "no_telp_resipien": "0815472353",
            "no_telp_pendonor": "0815236134",
            "faskes": "PMI Pusat",
            "alamat_pendonor": "Jl. Kramat Raya No.90 DKI Jakarta",
            "alamat_resipien": "Jl. Gunung Sahari Raya No.47 DKI Jakarta",
            "gambar_path": "rossi.jpeg"
        }
        all_donor.push(donor);
        donor = {
            "id": 2,
            "id_donor": "DO02",
            "tanggal": "20/04/2020",
            "resipien": "David",
            "gol_darah": "O",
            "rhesus": "+",
            "deskripsi": "Operasi",
            "pendonor": "Harry",
            "email_resipien": "david@email.com",
            "email_pendonor": "harry@email.com",
            "no_telp_resipien": "081468513",
            "no_telp_pendonor": "083654984",
            "faskes": "PMI Jakarta Selatan",
            "alamat_pendonor": "Jl. Topi Saya Lancip No.100, Jakarta Selatan, DKI Jakarta",
            "alamat_resipien": "Jl. Topi Saya Bundar No.65B, Jakarta Selatan, DKI Jakarta",
            "gambar_path": "operasi.jpg"
        }
        all_donor.push(donor);
        localStorage.setItem("donor", JSON.stringify(all_donor));
    }
}

function getAllJumlah() {
    allJumlah = []
    panjang_pengguna = JSON.parse(localStorage.getItem("pengguna")).length
    allJumlah.push(panjang_pengguna)
    panjang_event = JSON.parse(localStorage.getItem("event")).length
    allJumlah.push(panjang_event)
    panjang_faskes = JSON.parse(localStorage.getItem("faskes")).length
    allJumlah.push(panjang_faskes)
    total_stok = 0
    stok_darah = JSON.parse(localStorage.getItem("stok_darah"))
    for (var i = stok_darah.length - 1; i >= 0; i--) {
        total_stok = total_stok + parseInt(stok_darah[i].jumlah);
    }
    panjang_donor = JSON.parse(localStorage.getItem("donor")).length
    allJumlah.push(panjang_donor)
    allJumlah.push(total_stok + "")
    return allJumlah
}