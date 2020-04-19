function setEvent(nama, penyelenggara, lokasi, link_url, gambar_path) {
    event = JSON.parse(localStorage.getItem("event"));
    lastID = localStorage.getItem("lastEventID");
    if (lastID == null || lastID == NaN) {
        lastID = 0;
        localStorage.setItem("lastEventID", lastID);
    } else {
        lastID = parseInt(lastID)
    }
    eventNew = {
        "id": lastID + 1,
        "nama": nama,
        "penyelenggara": penyelenggara,
        "lokasi": lokasi,
        "link_url": link_url,
        "gambar_path": ""
    }
    if (event == null) {
        event = [];
        // eventNew = {
        //     "id": lastID + 1,
        //     "nama": "Tahunan 2020",
        //     "penyelenggara": "DKI Jakarta",
        //     "link_url": "http://utdpmidkijakarta.or.id/",
        //     "lokasi": "Jakarta",
        //     "gambar_path": ""
        // };
    }
    event.push(eventNew);
    localStorage.setItem("lastEventID", lastID+1);
    localStorage.setItem("event", JSON.stringify(event));
}

function getAllEvent() {
    return JSON.parse(localStorage.getItem("event"))
}

function getEvent(id) {
    allEvent = JSON.parse(localStorage.getItem("event"))
    for (var i = allEvent.length - 1; i >= 0; i--) {
        if (((allEvent[i].id)+"") == id) {
            return allEvent[i]
        }
    }
    return null
}

function deleteEvent(id) {
    if (id == undefined) {
        id = localStorage.getItem("deleteEventModal");
    }
    allEvent = JSON.parse(localStorage.getItem("event"));
    for (var i = allEvent.length - 1; i >= 0; i--) {
        if (((allEvent[i].id)+"") == id) {
            allEvent.splice(i, 1);
        }
    }
    localStorage.setItem("event", JSON.stringify(allEvent));
}

function setDeleteId(id) {
    localStorage.setItem("deleteEventModal", id);
}

function updateEvent(id, nama, penyelenggara, lokasi, link_url, gambar_path) {
    allEvent = JSON.parse(localStorage.getItem("event"))
    event = ""
    for (var i = allEvent.length - 1; i >= 0; i--) {
        if (((allEvent[i].id)+"") == id) {
            allEvent[i].nama = nama;
            allEvent[i].penyelenggara = penyelenggara;
            allEvent[i].lokasi = lokasi;
            allEvent[i].link_url = link_url;
            break;
        }
    }
    localStorage.setItem("event", JSON.stringify(allEvent));
}