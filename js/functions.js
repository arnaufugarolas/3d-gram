function showAlert(text, type) {
    document.getElementById("alert").innerText = text;
    document.getElementById("alert").className = "alert " + type;
    document.getElementById("alert").style.display = "block";
    window.setTimeout(function() {
        document.getElementById("alert").style.display = "none";
    }, 2000);
}