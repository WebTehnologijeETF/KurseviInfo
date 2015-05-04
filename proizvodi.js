function dodaj(){
	var na = document.forms["kursevi_naslovna_forma"]["naziv"].value;
    var or = document.forms["kursevi_naslovna_forma"]["organizacija"].value;
    var sl = document.forms["kursevi_naslovna_forma"]["slika"].value;

    var product = {
        naziv: na,
        opis: or,
        slika: sl
    	};

    console.log(JSON.stringify(product));
    var ajax = new XMLHttpRequest();

    ajax.open("POST", "http://zamger.etf.unsa.ba/wt/proizvodi.php?brindexa=16388", true);
	ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	ajax.send("akcija=dodavanje"+"&brindexa=16388&proizvod=" + JSON.stringify(product));

	var kursevi_naslovna = document.getElementById('kursevi_naslovna');
	var kurs = napraviDiv(na, or, "1/1/1", "10", sl);
	kursevi_naslovna.appendChild(kurs);

};

function skiniProizvode(){
	var ajax = new XMLHttpRequest();
	var kursevi_naslovna = document.getElementById('kursevi_naslovna');
		ajax.onreadystatechange = function() {// Anonimna funkcija
			if (ajax.readyState == 4 && ajax.status == 200)
			{
				var array = JSON.parse(ajax.responseText);
				for(var n = 0; n < array.length; n++)
				{
    				var object = array[n];
    				var kurs = napraviDiv(object["naziv"], object["opis"], "1/1/1", "10", object["slika"]);
					kursevi_naslovna.appendChild(kurs);
				}
			} else if (ajax.status > 400) {
				console.log(ajax.status);
			};
		}
		ajax.open("POST", "http://zamger.etf.unsa.ba/wt/proizvodi.php?brindexa=16388", true);
		ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		ajax.send();
};

function napraviDiv(naziv, organizator, datum, trajanje, slika){
	var div = document.createElement('div');
	div.className="kurs";

	var sl = document.createElement('img');
	sl.className="slika_kursa";
	sl.setAttribute('src', slika);

	var no = document.createElement('div');
	no.className="naziv_organizator";

	var or = document.createElement('p');
	or.className="organizator";
	or.innerHTML = organizator;

	var na = document.createElement('a');
	na.className="naziv_kursa";
	na.innerHTML = naziv;

	no.appendChild(or);
	no.appendChild(na);

	var dt = document.createElement('div');
	dt.className="datum_trajanje";

	var da = document.createElement('p');
	da.className="datum_kursa";
	da.innerHTML = datum;

	var tr = document.createElement('p');
	tr.className="trajanje";
	tr.innerHTML = trajanje;

	dt.appendChild(da);
	dt.appendChild(tr);

	div.appendChild(sl);
	div.appendChild(no);
	div.appendChild(dt);

	return div;
};


