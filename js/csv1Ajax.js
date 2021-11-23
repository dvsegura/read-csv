//solo para servidores 
window.addEventListener("load", () => {
    loadDoc();
});

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
        }
    };
    xhttp.open("GET", "csv/task.csv", true);
    xhttp.send();
}