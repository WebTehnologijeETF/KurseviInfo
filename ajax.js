function pokreni(){
	dodajListenere();
};


function skiniStranicu(link){
		var ajax = new XMLHttpRequest();
		ajax.onreadystatechange = function() {// Anonimna funkcija
			console.log(ajax.readyState);
			if (ajax.readyState == 4 && ajax.status == 200)
			{
				document.getElementById("okvir").innerHTML = ajax.responseText;
				dodajListenere();
				if (link == "/projekt/index.html") {
					stablo();
				};
				console.log(ajax.responseText);
				console.log(link);
			}
			if (ajax.readyState == 4 && ajax.status == 404)
				document.getElementById("okvir").innerHTML = "Greska: nepoznat URL";
		}
		ajax.open("GET", link, true);
		ajax.send();
	};

function dodajListenere(){
	document.getElementById("aindex").addEventListener( "click", function(ev){
		skiniStranicu("/projekt/index.html");
	}, false);

	document.getElementById("adodaj").addEventListener( "click", function(ev){
		skiniStranicu("/projekt/dodaj.html");
	}, false);

	document.getElementById("akursevi").addEventListener( "click", function(ev){
		skiniStranicu("/projekt/kursevi.html");
	}, false);
	var kursevi = document.getElementsByClassName("naziv_kursa");
	for (var i = kursevi.length - 1; i >= 0; i--) {
		kursevi[i].addEventListener( "click", function(ev){
			skiniStranicu("/projekt/detaljno.html");
		}, false);
	};

}