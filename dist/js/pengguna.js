function setPengguna() {
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
    localStorage.setItem("lastPenggunaID", lastID+1);
    localStorage.setItem("pengguna", JSON.stringify(pengguna));
}

function getAllPengguna() {
    return JSON.parse(localStorage.getItem("pengguna"))
}

function getPengguna(id) {
    allPengguna = JSON.parse(localStorage.getItem("pengguna"))
    for (var i = allPengguna.length - 1; i >= 0; i--) {
        if (((allPengguna[i].id)+"") == id) {
            return allPengguna[i]
        }
    }
    return null
}

function deletePengguna(id) {
    if (id == undefined) {
        id = localStorage.getItem("deletePenggunaModal");
    }
    allPengguna = JSON.parse(localStorage.getItem("pengguna"));
    for (var i = allPengguna.length - 1; i >= 0; i--) {
        if (((allPengguna[i].id)+"") == id) {
            localStorage.setItem("deletePenggunaModalRow", i + 1);
            allPengguna.splice(i, 1);
        }
    }
    localStorage.setItem("pengguna", JSON.stringify(allPengguna));
}

function setDeleteId(id) {
    localStorage.setItem("deletePenggunaModal", id);
}

function verifikasiPengguna(id) {
    allPengguna = JSON.parse(localStorage.getItem("pengguna"));
    for (var i = allPengguna.length - 1; i >= 0; i--) {
        if (((allPengguna[i].id)+"") == id) {
            allPengguna[i].is_verified = true;
        }
    }
    localStorage.setItem("pengguna", JSON.stringify(allPengguna));
}

function batalVerifikasiPengguna(id) {
    allPengguna = JSON.parse(localStorage.getItem("pengguna"));
    for (var i = allPengguna.length - 1; i >= 0; i--) {
        if (((allPengguna[i].id)+"") == id) {
            allPengguna[i].is_verified = false;
        }
    }
    localStorage.setItem("pengguna", JSON.stringify(allPengguna));
}

function sayHi() {
  alert('Hello');
}