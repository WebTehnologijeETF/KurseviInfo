<!DOCTYPE html>
<html>
<head>
	<title>KurseviInfo</title>
	<meta charset="UTF-8">
	<link rel="stylesheet" type="text/css" href="style.css">
	<script src="stablo.js"></script>
</head>
<body>
	<a name="1"></a>
	<div id="okvir">
		<div id="zaglavlje">
			<div id="logo">
				<a href="index.html">KurseviInfo</a>
				<img src="images/logo.png" alt=""/>
			</div>
			<div id="meni">
				<ul>
					<li><a href="#1" id="aindex">Početna</a></li>
					<li><a href="#1" id="akursevi">Kursevi</a></li>
					<li><a href="#1" id="adodaj">Dodaj kurs</a></li>
				</ul>
			</div>
		</div>
		<div id="tijelo"> </div>

			<?php 
			include "validacija.php";
			$rez = phpValidacija();
			if ($rez) {
				include "uneseniPodaci.php";
			}
			?>


			<div id="dodaj">

			
		<form action="dodaj.php" id="forma_dodaj" name="dodajForma" onsubmit="return validirajFormu()" method="post" >
				<table id="tabela_dodaj">
					<tr>
						<td>Naziv kursa: </td>
						<td><input type="text" name="naziv" <?php if (isset($_POST['naziv'])) {
							echo "value=".$_POST['naziv'];
						} ?>></td>
						<?php
							if (isset($greske['naziv'])) {
								echo '<td class="errorSlika" id="slikaNaziv" style="display:inline;">
								<img alt="" src="images/error.png"></td>
								<td class="errorDodaj" id="errorNaziv" style="display:inline;">'.$greske['naziv'].'</td>';
							}
						?>	
						<td class="errorSlika" id="slikaNaziv"><img alt="" src="images/error.png"></td>
						<td class="errorDodaj" id="errorNaziv">Error</td>	
					</tr>
					<tr>
						<td>Organizacija: </td>
						<td><input type="text" name="organizacija" <?php if (isset($_POST['organizacija'])) {
							echo "value=".$_POST['organizacija'];
						} ?>></td>
						<td class="errorSlika" id="slikaOrganizacija"><img alt="" src="images/error.png"></td>
						<td id="errorOrganizacija" class="errorDodaj">Error</td>

					</tr>
					<tr>
						<td>Email: </td>
						<td><input type="text" name="email" <?php if (isset($_POST['email'])) {
							echo "value=".$_POST['email'];
						} ?>></td>
						<?php
							if (isset($greske['email'])) {
								echo '<td class="errorSlika" id="slikaEmail" style="display:inline;"><img alt="" src="images/error.png"></td>
						<td id="errorEmail" class="errorDodaj" style="display:inline;">'.$greske['email'].'</td>';
							};
						?>
						<td class="errorSlika" id="slikaEmail" style="dis"><img alt="" src="images/error.png"></td>
						<td id="errorEmail" class="errorDodaj">Error</td>
					</tr>
					<tr><td>Kategorija:</td>
						<td>
							<select name="kategorija" id="kategorija">
							  <option value="jezici">Jezici</option>
							  <option value="informatika">Informatika</option>
							  <option value="ekonomija">Ekonomija</option>
							  <option value="matematika">Matematika</option>
							</select>
					</td>
					<td class="errorSlika" id="slikaKategorija"><img alt="" src="images/error.png"></td>
					<td id="errorKategorija" class="errorDodaj">Error</td>
					</tr>
					<tr id="podkategorija">
						<td>Podkategorija:</td>
						<td>
							<select name="podkategorija">
							  <option value="engleski">Engleski</option>
							  <option value="francuski">Francuski</option>
							  <option value="njemacki">Njemacki</option>
							  <option value="italijanski">Italijanski</option>
							</select>
						</td>
						<td class="errorSlika" id="slikaPodkategorija"><img alt="" src="images/error.png"></td>
						<td id="errorPodkategorija" class="errorDodaj">Error</td>
					</tr>
					<tr>
						<td>Opstina: </td>
						<td><input type="text" name="grad" <?php if (isset($_POST['grad'])) {
							echo "value=".$_POST['grad'];
						} ?>></td>
						<td class="errorSlika" id="slikaGrad"><img alt="" src="images/error.png"></td>
						<td id="errorGrad" class="errorDodaj">Error</td>
					</tr>
					<tr>
						<td>Mjesto: </td>
						<td><input type="text" name="mjesto" <?php if (isset($_POST['mjesto'])) {
							echo "value=".$_POST['mjesto'];
						} ?>></td>
						<td class="errorSlika" id="slikaMjesto"><img alt="" src="images/error.png"></td>
						<td id="errorMjesto" class="errorDodaj">Error</td>
					</tr>
					
					<td class="errorSlika" id="slikaGrad"><img alt="" src="images/error.png"></td>
					<td id="errorGrad" class="errorDodaj">Error</td></tr>
					<tr><td>Cijena:</td><td><input type="number" name="cijena" id="dodaj_cijena" 
						<?php if (isset($_POST['cijena'])) {
							echo "value=".$_POST['cijena'];
						} ?>>
					<select id="tip_cijene" name="tipcijene">
							<option value="ukupno">Ukupno</option>
							<option value="mjesecno">Mjesecno</option>
							<option value="cas">Sat</option>
						</select></td>
						<?php 
							if (isset($greske['cijena'])) {
								echo '<td class="errorSlika" id="slikaCijena" style="display:inline"><img alt="" src="images/error.png"></td>
						<td id="errorCijena" class="errorDodaj" style="display:inline;">'.$greske['cijena'].'</td>';
							}
						?>
						<td class="errorSlika" id="slikaCijena"><img alt="" src="images/error.png"></td>
						<td id="errorCijena" class="errorDodaj">Error</td></tr>
					<tr><td>Datum početka:</td><td><input type="date" name="pocetak" id="pocetakDatePick" 
						<?php if (isset($_POST['pocetak'])) {
							echo "value=".$_POST['pocetak'];
						} ?>></td>
						<?php
							if (isset($greske['pocetak'])) {
								echo '<td class="errorSlika" id="slikaPocetak" style="display:inline;"><img alt="" src="images/error.png"></td>
						<td id="errorPocetak" class="errorDodaj" style="display:inline;">'.$greske['pocetak'].'</td>';
							}
						?>
						<td class="errorSlika" id="slikaPocetak"><img alt="" src="images/error.png"></td>
						<td id="errorPocetak" class="errorDodaj">Error</td>
					</tr>
					<tr><td>Datum završetka:</td><td><input type="date" name="kraj" id="krajDatePick"
						<?php if (isset($_POST['kraj'])) {
							echo "value=".$_POST['kraj'];
						} ?>></td>
						<?php
							if (isset($greske['kraj'])) {
								echo '<td class="errorSlika" id="slikaKraj" style="display:inline;"><img alt="" src="images/error.png"></td>
						<td id="errorKraj" class="errorDodaj" style="display:inline;">'.$greske['kraj'].'</td>';
							}
						?>
						<td class="errorSlika" id="slikaKraj"><img alt="" src="images/error.png"></td>
						<td id="errorKraj" class="errorDodaj">Error</td>
					</tr>				

				</table>
				<br>
				Dodatne informacije:<br>
				<textarea name="dodatno"><?php if (isset($_POST['dodatno'])) {echo $_POST['dodatno'];}?>
				</textarea><br>
				<input id="button" type="submit" value="Dodaj">
			</form>
			</div>
		</div>
		<div id="kraj">
			<p>Razvio: Babić Mirhat - Predmet Web tehnologije - 2015</p>
		</div>
	</div>
	<script type="text/javascript" src="proizvodi.js"></script>
	<script type="text/javascript" src="ajax.js"></script>
	<script type="text/javascript">dodajListenere();</script>
	<script type="text/javascript" src="validacija.js"></script> 
	<script type="text/javascript" src="gradValidacija.js"></script>
	<script type="text/javascript" src="stablo.js"></script>
	
</body>
</html>