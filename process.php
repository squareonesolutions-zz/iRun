<?php 
	$emailTo = 'testmail@templatesquare.com';
	$subject = 'Impresa Contact Form';
	$name=$_REQUEST['name'];
	$email=$_REQUEST['email'];
	$msg=$_REQUEST['msg'];
	
	$body = "Name: $name \n\nEmail: $email \n\nMessage: $msg";
	$headers = 'From: '.$name.' <'.$email.'>' . "\r\n" . 'Reply-To: ' . $email;
	
	mail($emailTo, $subject, $body, $headers);
?>