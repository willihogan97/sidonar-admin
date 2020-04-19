function setDonor() {
    donor = JSON.parse(localStorage.getItem("donor"));
    lastID = localStorage.getItem("lastDonorID");
    if (lastID == null || lastID == NaN) {
        lastID = 0;
        localStorage.setItem("lastDonorID", lastID);
    } else {
        lastID = parseInt(lastID)
    }
    if (donor == null) {
        donor = [];
        donorNew = {
            "id": lastID + 1,
            "nama": "William Adjandra",
            "gol_darah": "O",
            "rhesus": "+",
            "email": "william@email.com",
            "is_verified": false,
            "alamat": "Jl. Topi Saya Bundar No.8, Jakarta Selatan, DKI Jakarta",
            "no_telp": "08967123123",
            "no_telp_darurat": "08967123123",
            "tgl_lahir": "11/07/97"
        };
        donor.push(donorNew);
    }
    localStorage.setItem("lastDonorID", lastID+1);
    localStorage.setItem("donor", JSON.stringify(donor));
}

function getAllDonor() {
    return JSON.parse(localStorage.getItem("donor"))
}

function getDonor(id) {
    allDonor = JSON.parse(localStorage.getItem("donor"))
    for (var i = allDonor.length - 1; i >= 0; i--) {
        if (((allDonor[i].id)+"") == id) {
            return allDonor[i]
        }
    }
    return null
}

function deleteDonor(id) {
    if (id == undefined) {
        id = localStorage.getItem("deleteDonorModal");
    }
    allDonor = JSON.parse(localStorage.getItem("donor"));
    for (var i = allDonor.length - 1; i >= 0; i--) {
        if (((allDonor[i].id)+"") == id) {
            allDonor.splice(i, 1);
        }
    }
    localStorage.setItem("donor", JSON.stringify(allDonor));
}

function setDeleteId(id) {
    localStorage.setItem("deleteDonorModal", id);
}