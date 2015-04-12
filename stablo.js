function stablo(){
	var godina = document.getElementsByClassName("godina");
	var mjesec = document.getElementsByClassName("mjesec");

	// kada se klikne na godina onda arhiva_mjesec se mijenja
	// kada se klikne na mjesec onda se arhiva_sedmica mijenja

	var brojMjeseci = 12;
	var brojSedmica = 4;
	for (var i = godina.length - 1; i >= 0; i--) {
		
		godina[i].addEventListener("click", function(e){
			var a_mjesec = e.target.parentElement.childNodes;
			for (var j = a_mjesec.length - 1; j >= 0; j--) {
				if(typeof a_mjesec[j] === 'undefined'){
   					continue;
 				};

				if (a_mjesec[j].className == "arhiva_mjesec") {
					if (a_mjesec[j].style.display != "none" && a_mjesec[j].style.display != "") {
						a_mjesec[j].style.display = "none";
					}
					else {
						a_mjesec[j].style.display = "block";
					}
					
				};
				
			};
			
		}, false);
	};

	for (var i = mjesec.length - 1; i >= 0; i--) {
		
		mjesec[i].addEventListener("click", function(e){
			var a_sedmica = e.target.parentElement.childNodes;
			for (var j = a_sedmica.length - 1; j >= 0; j--) {
				if(typeof a_sedmica[j] === 'undefined'){
   					continue;
 				};
 				
				if (a_sedmica[j].className == "arhiva_sedmica") {
					if (a_sedmica[j].style.display != "none" && a_sedmica[j].style.display != "") {
						a_sedmica[j].style.display = "none";
					}
					else {
						a_sedmica[j].style.display = "block";
					}
					
				};
				
			};
			
		}, false);
	};

	/*
	for (var i = mjesec.length - 1; i >= 0; i--) {
		mjesec[i].style.display = "none";
		mjesec[i].onClick() = function(){

		}
	};
	for (var i = sedmica.length - 1; i >= 0; i--) {
		sedmica[i].style.display = "none";
		sedmica[i].onClick() = function(){

		}
	};

	*/
}