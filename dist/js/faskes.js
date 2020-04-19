function setFaskes(nama, no_telp, email, alamat) {
    faskes = JSON.parse(localStorage.getItem("faskes"));
    lastID = localStorage.getItem("lastFaskesID");
    if (lastID == null || lastID == NaN) {
        lastID = 0;
        localStorage.setItem("lastFaskesID", lastID);
    } else {
        lastID = parseInt(lastID)
    }
    faskesNew = {
        "id": lastID + 1,
        "nama": nama,
        "no_telp": no_telp,
        "email": email,
        "alamat": alamat
    }
    if (faskes == null) {
        faskes = [];
        // faskesNew = {
        //     "id": lastID + 1,
        //     "nama": "Tahunan 2020",
        //     "penyelenggara": "DKI Jakarta",
        //     "link_url": "http://utdpmidkijakarta.or.id/",
        //     "lokasi": "Jakarta",
        //     "gambar_path": ""
        // };
    }
    faskes.push(faskesNew);
    localStorage.setItem("lastFaskesID", lastID+1);
    localStorage.setItem("faskes", JSON.stringify(faskes));
}

function getAllFaskes() {
    return JSON.parse(localStorage.getItem("faskes"))
}

function getFaskes(id) {
    allFaskes = JSON.parse(localStorage.getItem("faskes"))
    for (var i = allFaskes.length - 1; i >= 0; i--) {
        if (((allFaskes[i].id)+"") == id) {
            return allFaskes[i]
        }
    }
    return null
}

function deleteFaskes(id) {
    if (id == undefined) {
        id = localStorage.getItem("deleteFaskesModal");
    }
    allFaskes = JSON.parse(localStorage.getItem("faskes"));
    for (var i = allFaskes.length - 1; i >= 0; i--) {
        if (((allFaskes[i].id)+"") == id) {
            allFaskes.splice(i, 1);
        }
    }
    localStorage.setItem("faskes", JSON.stringify(allFaskes));
}

function setDeleteId(id) {
    localStorage.setItem("deleteFaskesModal", id);
}

function updateFaskes(id, nama, no_telp, email, alamat) {
    allFaskes = JSON.parse(localStorage.getItem("faskes"))
    faskes = ""
    for (var i = allFaskes.length - 1; i >= 0; i--) {
        if (((allFaskes[i].id)+"") == id) {
            allFaskes[i].nama = nama;
            allFaskes[i].no_telp = no_telp;
            allFaskes[i].email = email;
            allFaskes[i].alamat = alamat;
            break;
        }
    }
    localStorage.setItem("faskes", JSON.stringify(allFaskes));
}