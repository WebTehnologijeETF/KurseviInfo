function validirajFormu() {
    var naziv = document.forms["dodajForma"]["naziv"].value;
    var organizacija = document.forms["dodajForma"]["organizacija"].value;
    var email = document.forms["dodajForma"]["email"].value;
    var kategorija = document.getElementById("kategorija");
    var podkategorija = document.getElementById("podkategorija");
    var grad = document.forms["dodajForma"]["grad"].value;
    var mjesto = document.forms["dodajForma"]["mjesto"].value;
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
    var slike = document.getElementsByClassName("errorSlika");
    for (var i = slike.length - 1; i >= 0; i--) {
        slike[i].style.display = "none";
    };

    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {// Anonimna funkcija
        console.log(ajax.readyState);
        console.log(ajax.status);
        console.log(ajax.responseText);
        if (ajax.readyState == 4 && ajax.status == 200)
        {
            if (ajax.responseText == "{\"ok\":\"Mjesto je iz date općine\"}") {
                console.log("pise da je vratio true");
            }
            else if(grad !="" && mjesto !=""){
                var error = document.getElementById("errorMjesto");
                error.style.display = "inline";
                error.innerHTML = "Mjesto nije iz date opštine";

                var slika = document.getElementById("slikaMjesto");
                slika.style.display = "inline";

                ispravno = false;
            }
        }
        if (ajax.readyState == 4 && ajax.status == 404)
            document.getElementById("polje").innerHTML = "Greska: nepoznat URL";
    }
    var link = "http://zamger.etf.unsa.ba/wt/mjesto_opcina.php?opcina=" + grad + "&mjesto=" + mjesto;
    ajax.open("GET", link, true);
    ajax.send();

    if (naziv == null || naziv == "") {
        var error = document.getElementById("errorNaziv");
        error.style.display = "inline";
        error.innerHTML = "Morate unijeti naziv";

        var slika = document.getElementById("slikaNaziv");
        slika.style.display = "inline";

        ispravno = false;
    }

    if (testirajEmail(email) == false) {
        var error = document.getElementById("errorEmail");
        error.style.display = "inline";
        error.innerHTML = "Email nije ispravan";

        var slika = document.getElementById("slikaEmail");
        slika.style.display = "inline";

        ispravno = false;
    }

    if (cijena == null || parseFloat(cijena) < 0) {
        var error = document.getElementById("errorCijena");
        error.style.display = "inline";
        error.innerHTML = "Cijena ne može biti negativna";

        var slika = document.getElementById("slikaCijena");
        slika.style.display = "inline";

        ispravno = false;
    }

    if (grad == null || grad == "") {
        var error = document.getElementById("errorGrad");
        error.style.display = "inline";
        error.innerHTML = "Morate unijeti opštinu";

        var slika = document.getElementById("slikaGrad");
        slika.style.display = "inline";

        ispravno = false;
    }

    if (mjesto == null || mjesto == "") {
        var error = document.getElementById("errorMjesto");
        error.style.display = "inline";
        error.innerHTML = "Morate unijeti mjesto";

        var slika = document.getElementById("slikaMjesto");
        slika.style.display = "inline";

        ispravno = false;
    }

    if (pocetak == null || pocetak == "") {
        var error = document.getElementById("errorPocetak");
        error.style.display = "inline";
        error.innerHTML = "Datum početka ne može biti prazan";

        var slika = document.getElementById("slikaPocetak");
        slika.style.display = "inline";

        ispravno = false;
    }
    else if (pocetak.getFullYear() < 2015 || pocetak.getFullYear() > 2016) {
        var error = document.getElementById("errorPocetak");
        error.style.display = "inline";
        error.innerHTML = "Godina može biti 2015. ili 2016.";

        var slika = document.getElementById("slikaPocetak");
        slika.style.display = "inline";

        ispravno = false;
    };


    if (kraj == null || kraj == "") {
        var error = document.getElementById("errorKraj");
        error.style.display = "inline";
        error.innerHTML = "Datum kraja ne može biti prazan";

        var slika = document.getElementById("slikaKraj");
        slika.style.display = "inline";

        ispravno = false;
    }
    else if (kraj <= pocetak) {
        var error = document.getElementById("errorKraj");
        error.style.display = "inline";
        error.innerHTML = "Kraj mora biti poslije početka";

        var slika = document.getElementById("slikaKraj");
        slika.style.display = "inline";

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