<div style="font-size:1.2em; padding:1em;">
<div style ="font-size:1.5em;">
Provjerite da li ste ispravno popunili kontakt formu<br></div>
Naziv kursa: <?php echo $_POST['naziv']; ?><br>
<?php if ($_POST['organizacija'] != "" && !ctype_space($_POST['organizacija'])) {
	echo "Organizacija: ".$_POST['organizacija']."<br>"; 
} ?>
Email: <?php echo $_POST['email']; ?><br>
Kategorija: <?php echo $_POST['kategorija']; ?><br>
<?php if ($_POST['organizacija'] != "" && !ctype_space($_POST['grad'])) {
	echo "Opstina: ".$_POST['grad']."<br>"; 
} ?>
<?php if ($_POST['organizacija'] != "" && !ctype_space($_POST['mjesto'])) {
	echo "Mjesto: ".$_POST['mjesto']."<br>"; 
} ?>
Cijena: <?php echo $_POST['cijena']; ?><br>
Datum pocetka: <?php echo $_POST['pocetak']; ?><br>
Datum završetka: <?php echo $_POST['kraj']; ?><br>
<?php if ($_POST['organizacija'] != "" && !ctype_space($_POST['dodatno'])) {
	echo "Dodatno: ".$_POST['dodatno']."<br>"; 
} ?>
</div>
<form action="mail.php" style="padding:1.2em; font-size:1.1em;">
	Da li ste sigurni da želite poslati ove podatke?
	<input type="submit" value="Siguran sam">
	Ako ste pogrešno popunili formu, možete ispod prepraviti unesene podatke
</form>