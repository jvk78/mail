<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
    echo 'Message has been sent';

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language');
$mail->IsHTML(true);

$mail->setFrom('karev_e@mail.ru', 'Mailer');
$mail->addAddress('karev_e@mail.ru', 'Joe User');
$mail->Subject = 'Here is the subject';

$body = '<h1>TEST</h1>';

$mail->Body = $body;

  if(!$mail->send()) {
    $message = 'error';
  } else {
    $message = 'send';
  }
$response = ['message' => $message]

header('Content-type: application/json');
echo json_encode($response)

?>