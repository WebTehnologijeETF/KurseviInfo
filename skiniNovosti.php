<?php
$dir = dir("novosti");
$datoteke = array();
$datumi = array();

while (($file = $dir->read()) !== false){
	if(strlen($file) < 5 || substr($file, -4) != '.txt')
		continue;

	$tekst = file_get_contents('novosti/'.$file);
	$redovi = explode("\n", $tekst);
	$datumi[$file] = $redovi[0];
}

foreach ($datumi as $key => $value) {
	$datumi[$key] = date('Y-m-d-H-i-s', strtotime(str_replace('/', '-', $value)));
}

arsort($datumi);
$datumi = array_reverse($datumi);

foreach ($datumi as $key => $value) {
	skini('novosti/'.$key);
}

function skini($link)
{
	$tekst = file_get_contents($link);
	$redovi = explode("\n", $tekst);
	$datum = $redovi[0];
	$autor = $redovi[1];
	$naslov = ucfirst(strtolower($redovi[2]));
	$url = $redovi[3];
	$slika = "";
	if (preg_match("/\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i",$url)) {
  		$slika = $redovi[3];
	}
	$novost = "";
	$i = 4;
	for ($i; $i < sizeOf($redovi); $i++) {
		if (substr($redovi[$i], 0, 2) != '--') {
			$novost .= $redovi[$i];
		}
		else {
			break;
		}
	};
	$detaljno = "";
	$i++;
	for ($i; $i < sizeOf($redovi); $i++) {
		$detaljno .= $redovi[$i];
	};
	echo '<div class="novost"><h1 class="naslov">'.$naslov.'</h1><img src="'.$slika.'" alt=""><p class="autor">'.$autor.'</p><p class="datum">'.$datum.'</p><br><br><p>'.$novost.'</p>';

	if ($detaljno != "") {
		echo '<a href="#1" class="detaljnije">Detaljnije</a></div>';
	}
				
}
?>