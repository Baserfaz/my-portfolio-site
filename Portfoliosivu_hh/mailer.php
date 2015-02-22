<?php
	if(isset($_POST['Submit'])) {
		$to = 'heikkiheiskanen@hotmail.com';
		
		$from = preg_replace("([\r\n])", "", $_POST['email']);
		$subject = preg_replace("([\r\n])", "", $_POST['otsikko']);
		$name = $_POST['nimi'];
		$body = $_POST['viesti'];
		
		$match = "/(bcc:|cc:|content\-type:)/i";
		if (preg_match($match, $from) || preg_match($match, $subject) || preg_match($match, $body)) {
			die("Header injektio havaittu.");
		}
		
		$header = 'From: $from\r\n';
		$header .='Reply-To: $from\r\n';
		
		if(mail($to, $subject, $message, $name, $header)){
			echo "Viesti lähetetty!";
		}else{
			echo "Viestiä ei lähetetty virheen takia!";
		}
		
	}else{
		die("Suorapääsy ei mahdollinen!");
	}
?>