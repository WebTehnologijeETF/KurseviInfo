<?php

$greske = array();

function phpValidacija()
{
	GLOBAL $greske;
	
	validirajNaziv();
	validirajMail();
	validirajCijenu();
	validirajPocetakIKraj();
	if (sizeof($greske) > 0) {
		return false;
	}
	else {
		return true;
	}
}

function validirajNaziv()
{
	GLOBAL $greske;
	if (!isset($_POST['naziv'])) {
		$greske['naziv'] = "Morate unijeti naziv";
	}
	else if ($_POST['naziv'] == "" || ctype_space($_POST['naziv'])) {
		$greske['naziv'] = "Morate unijeti naziv";
	}
}

function validirajMail()
{
	GLOBAL $greske;
	if (!isset($_POST['email'])) {
		$greske['email'] = "Morate unijeti email";
	}
	else if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
  		$greske['email'] = "Email nije ispravan";
	}
}

function validirajCijenu()
{
	GLOBAL $greske;
	if (!isset($_POST['cijena'])) {
		$greske['cijena'] = "Morate unijeti cijenu";
	}
	else if (!ctype_digit($_POST['cijena']) || $_POST['cijena'] < 0) {
		$greske['cijena'] = "Cijena mora biti nenegativan broj";
	}
}

function validirajPocetakIKraj()
{
	GLOBAL $greske;
	if (!isset($_POST['pocetak'])) {
		$greske['pocetak'] = "Morate unijeti pocetak";
	}
	if (!isset($_POST['kraj'])) {
		$greske['kraj'] = "Morate unijeti kraj";
	}
	if (isset($_POST['pocetak'],$_POST['kraj'])) {
		if (strtotime($_POST['pocetak']) > strtotime($_POST['kraj'])) {
			$greske['kraj'] = "Kraj mora biti poslije početka";
		}
	}
}

?>