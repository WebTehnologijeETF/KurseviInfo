function validirajGrad(opstina, mjesto){


	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange = function() {// Anonimna funkcija
		console.log(ajax.readyState);
		console.log(ajax.status);
		console.log(ajax.responseText);
		if (ajax.readyState == 4 && ajax.status == 200)
		{
			if (ajax.responseText == "{\"ok\":\"Mjesto je iz date općine\"}") {
				console.log("pise da je vratio true");
				return true;
			}
			else {
				return false;
			}
		}
		if (ajax.readyState == 4 && ajax.status == 404)
			document.getElementById("polje").innerHTML = "Greska: nepoznat URL";
	}
	var link = "http://zamger.etf.unsa.ba/wt/mjesto_opcina.php?opcina=" + opstina + "&mjesto=" + mjesto;
	ajax.open("GET", link, true);
	ajax.send();
};