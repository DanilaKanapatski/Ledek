<?php

require_once ('phpmailer/PHPMailerAutoload.php');

$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$phone = $_POST['phone'];
// $file = $_POST['file'];

// $email = $_POST['user_email'];

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.yandex.com';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'danila.konopatscky@yandex.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'dankv12345kon'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('danila.konopatscky@yandex.ru'); // от кого будет уходить письмо?
$mail->addAddress('sales@ledek.ru');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка с Ledek';
$mail->Body = '' . 'Вам' . ' оставили заявку, телефон ' . $phone . '.';
// $mail->AltBody = $file;
$mail->headerLine('From: ', 'ledek.com');

try {
    if ($mail->send()) {
        // Перенаправление пользователя на страницу send.html после успешной отправки
        header('Location: pages/send.html');
        exit(); // Завершает выполнение скрипта после перенаправления
    } else {
        echo "Ошибка отправки письма.";
    }
} catch (phpmailerException $e) {
    echo "Произошла ошибка: " . $e->getMessage();
}