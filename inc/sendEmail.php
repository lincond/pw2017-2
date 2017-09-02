<?php

if($_POST) 
{
	$name = trim(stripslashes($_POST['contactName']));
	$email = trim(stripslashes($_POST['contactEmail']));
	$subject = trim(stripslashes($_POST['contactSubject']));
	$contact_message = trim(stripslashes($_POST['contactMessage']));

    // Check Name
	if (strlen($name) < 2) {
		$error['name'] = "Por favor, entre com o seu nome!";
	}
	// Check Email
	if (!preg_match('/^[a-z0-9&\'\.\-_\+]+@[a-z0-9\-]+\.([a-z0-9\-]+\.)*+[a-z]{2}/is', $email)) {
		$error['email'] = "Por favor, digite um e-mail válido";
	}
	// Check Message
	if (strlen($contact_message) < 15) {
		$error['message'] = "Por favor, a sua mensagem deve conter no mínimo 15 caracteres";
	}
    // Subject
	if ($subject == '') { $subject = "Contato via Pág. Pessoal"; }

	if (!$error)
	{
		if ($mail) { echo "OK"; }
		  else { echo "Alguma coisa deu errado, por favor tente novamente."; }
		
	} # end if - no validation error
	else
	{
		$response = (isset($error['name'])) ? $error['name'] . "<br /> \n" : null;
		$response .= (isset($error['email'])) ? $error['email'] . "<br /> \n" : null;
		$response .= (isset($error['message'])) ? $error['message'] . "<br />" : null;
		
		echo $response;

	} # end if - there was a validation error
}

?>
