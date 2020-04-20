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
            var hrefBaru = this.href.substring(this.href.lastIndexOf('/') + 1)
            var pathBaru = path.substring(this.href.lastIndexOf('/') + 1)
            var indexPath = pathBaru.indexOf('?')
            if (indexPath > 0 ) {
                pathBaru = pathBaru.substring(0, pathBaru.indexOf('?'))    
            }
            if (hrefBaru === pathBaru) {
                $(this).addClass("active");
            }
            if (("tambah-" + hrefBaru) === pathBaru) {
                $(this).addClass("active");
            }
            if (("detail-" + hrefBaru) === pathBaru) {
                $(this).addClass("active");
            }
        });

    // Toggle the side navigation
    $("#sidebarToggle").on("click", function(e) {
        e.preventDefault();
        $("body").toggleClass("sb-sidenav-toggled");
    });
})(jQuery);

function removeParam(key, sourceURL) {
    var rtn = sourceURL.split("?")[0],
        param,
        params_arr = [],
        queryString = (sourceURL.indexOf("?") !== -1) ? sourceURL.split("?")[1] : "";
    if (queryString !== "") {
        params_arr = queryString.split("&");
        for (var i = params_arr.length - 1; i >= 0; i -= 1) {
            param = params_arr[i].split("=")[0];
            if (param === key) {
                params_arr.splice(i, 1);
            }
        }
        rtn = rtn + "?" + params_arr.join("&");
    }
    return rtn;
}

function setPenggunaTimer() {
    pengguna = JSON.parse(localStorage.getItem("pengguna"));
    lastID = localStorage.getItem("lastPenggunaID");
    if (lastID == null || lastID == NaN) {
        lastID = 0;
        localStorage.setItem("lastPenggunaID", lastID);
    } else {
        lastID = parseInt(lastID)
    }
    arr_nama = ["Marcel", "Intan", "Fahmi", "Bisma", "Harry", "Larry"]
    arr_gol = ["A", "B", "AB", "O"]
    arr_rhesus = ["+", "-"]
    arr_alamat = ["Jl. Aku Anak Sehat No.", "Jl. Topi Saya Bundar No.", "Jl. Desaku yang Kucinta No."]
    arr_alamat_belakang = [", Jakarta Selatan, DKI Jakarta", ", Jakarta Pusat, DKI Jakarta", ", Jakarta Timur, DKI Jakarta", ", Jakarta Barat, DKI Jakarta", ", Jakarta Utara, DKI Jakarta"]
    random_no_alamat = Math.floor((Math.random() * 100) + 1);
    jalan = arr_alamat[Math.floor(Math.random() * arr_alamat.length)] + random_no_alamat + arr_alamat_belakang[Math.floor(Math.random() * arr_alamat_belakang.length)]
    no_telp = "08" + Math.floor((Math.random() * 100000000) + 1);
    no_telp_darurat = "08" + Math.floor((Math.random() * 100000000) + 1);
    var date = randomDate(new Date(1970, 0, 1), new Date(2000, 0 ,1));
    tgl_lahir = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear()
    random_nama = arr_nama[Math.floor(Math.random() * arr_nama.length)];
    random_gol = arr_gol[Math.floor(Math.random() * arr_gol.length)];
    random_rhesus = arr_rhesus[Math.floor(Math.random() * arr_rhesus.length)];
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    email = ""
    for ( var i = 0; i < 8; i++ ) {
        email += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    email += "@email.com"
    penggunaNew = {
        "id": lastID + 1,
        "nama": random_nama,
        "gol_darah": random_gol,
        "rhesus": random_rhesus,
        "email": email,
        "is_verified": false,
        "alamat": jalan,
        "no_telp": no_telp,
        "no_telp_darurat": no_telp_darurat,
        "tgl_lahir": tgl_lahir,
        "is_seen": false
    };
    pengguna.push(penggunaNew);
    localStorage.setItem("hasNewPengguna", true);
    localStorage.setItem("lastPenggunaID", lastID+1);
    localStorage.setItem("pengguna", JSON.stringify(pengguna));
    return penggunaNew
}

function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function setAll() {
    if (localStorage.getItem("pengguna") == null) {
        allPengguna = []
        penggunaNew = {
            "id": 1,
            "nama": "William",
            "gol_darah": "O",
            "rhesus": "+",
            "email": "william@email.com",
            "is_verified": false,
            "alamat": "Jl. Topi Saya Bundar No.8, Jakarta Selatan, DKI Jakarta",
            "no_telp": "08987654321",
            "no_telp_darurat": "08987654322",
            "tgl_lahir": "11/07/1997",
            "gambar_path": "william.jpg",
            "is_seen": true
        };
        allPengguna.push(penggunaNew)
        penggunaNew = {
            "id": 2,
            "nama": "Yosua",
            "gol_darah": "A",
            "rhesus": "+",
            "email": "yosua@email.com",
            "is_verified": true,
            "alamat": "Jl. Aku Anak Sehat No.8, Jakarta Selatan, DKI Jakarta",
            "no_telp": "08123456789",
            "no_telp_darurat": "08123456799",
            "tgl_lahir": "15/10/1997",
            "gambar_path": "yosua.jpg",
            "is_seen": true
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

function checkNewNotif() {
    pengguna = JSON.parse(localStorage.getItem("pengguna"))
    for (var i = pengguna.length - 1; i >= 0; i--) {
        if (pengguna[i].is_seen == false) {
            return true
        }
    }
    return false
}