function validirajFormu() {
    var naziv = document.forms["dodajForma"]["naziv"].value;
    var organizacija = document.forms["dodajForma"]["organizacija"].value;
    var email = document.forms["dodajForma"]["email"].value;
    var kategorija = document.getElementById("kategorija");
    var podkategorija = document.getElementById("podkategorija");
    var grad = document.forms["dodajForma"]["grad"].value;
    var cijena = document.forms["dodajForma"]["cijena"].value;
    var tipcijene = document.forms["dodajForma"]["tipcijene"].value;
    var dodatno = document.forms["dodajForma"]["dodatno"].value;
    var pocetak = document.getElementById("pocetakDatePick").valueAsDate;
    var kraj = document.getElementById("krajDatePick").valueAsDate;
    var ispravno = true;

    var erori = document.getElementsByClassName("errorDodaj");
    for (var i = erori.length - 1; i >= 0; i--) {
        erori[i].innerHTML = "";
        erori[i].style.display = "none";
    };



    if (naziv == null || naziv == "") {
        var error = document.getElementById("errorNaziv");
        error.style.display = "inline";
        error.innerHTML = "Morate unijeti naziv";
        ispravno = false;
    }

    if (testirajEmail(email) == false) {
        var error = document.getElementById("errorEmail");
        error.style.display = "inline";
        error.innerHTML = "Email nije ispravan";
        ispravno = false;
    }

    if (cijena == null || parseFloat(cijena) < 0) {
        var error = document.getElementById("errorCijena");
        error.style.display = "inline";
        error.innerHTML = "Cijena ne može biti negativna";
        ispravno = false;
    }

    if (pocetak == null || pocetak == "") {
        var error = document.getElementById("errorPocetak");
        error.style.display = "inline";
        error.innerHTML = "Datum početka ne može biti prazan";
        ispravno = false;
    }
    else if (pocetak.getFullYear() < 2015 || pocetak.getFullYear() > 2016) {
        var error = document.getElementById("errorPocetak");
        error.style.display = "inline";
        error.innerHTML = "Godina može biti 2015. ili 2016.";
        ispravno = false;
    };


    if (kraj == null || kraj == "") {
        var error = document.getElementById("errorKraj");
        error.style.display = "inline";
        error.innerHTML = "Datum kraja ne može biti prazan";
        ispravno = false;
    }
    else if (kraj <= pocetak) {
        var error = document.getElementById("errorKraj");
        error.style.display = "inline";
        error.innerHTML = "Kraj mora biti poslije početka";
        ispravno = false;
    };


    if (ispravno) {
        alert("Uspješno ste dodali kurs");
    };
    return ispravno;
}
function testirajEmail(email){
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}