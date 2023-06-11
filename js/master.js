function shift_likes() {
    document.getElementById("likes-grid").style.display = "grid";
    document.getElementById("gallery-grid").style.display = "none";
    document.getElementById("photos").classList.remove("active")
    document.getElementById("likes").classList.add("active")
}

function shift_photos() {
    document.getElementById("gallery-grid").style.display = "grid";
    document.getElementById("likes-grid").style.display = "none";
    document.getElementById("likes").classList.remove("active")
    document.getElementById("photos").classList.add("active")
}
