function pokreni(){
	skiniStranicu("novosti.php");
	dodajListenere();
};

function skiniStranicu(link){
		var ajax = new XMLHttpRequest();
		ajax.onreadystatechange = function() {// Anonimna funkcija
			if (ajax.readyState == 4 && ajax.status == 200)
			{
				if (link == "dodaj.php") {
					document.getElementById("okvir").innerHTML = ajax.responseText;
					document.getElementById("button").addEventListener( "click", function(ev){
						validirajFormu();
					}, false);
				}
				else {
					document.getElementById("tijelo").innerHTML = ajax.responseText;
				}
				dodajListenere();
				if (link == "novosti.php") {
					stablo();
				} else if (link == "kursevi.html") {
					skiniProizvode();
				};
			}
			if (ajax.readyState == 4 && ajax.status == 404)
				document.getElementById("tijelo").innerHTML = "Greska: nepoznat URL";
		}
		ajax.open("GET", link, true);
		ajax.send();
	};

function dodajListenere(){
	document.getElementById("aindex").addEventListener( "click", function(ev){
		skiniStranicu("novosti.php");
	}, false);

	document.getElementById("adodaj").addEventListener( "click", function(ev){
		skiniStranicu("dodaj.php");
	}, false);

	document.getElementById("akursevi").addEventListener( "click", function(ev){
		skiniStranicu("kursevi.html");
	}, false);

	var kursevi = document.getElementsByClassName("naziv_kursa");
	for (var i = kursevi.length - 1; i >= 0; i--) {
		kursevi[i].addEventListener( "click", function(ev){
			skiniStranicu("detaljno.html");
		}, false);
	};

}