<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use Dotenv\Dotenv;

require 'vendor/autoload.php';

$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = $_ENV['SMTP_EMAIL'];
    $mail->Password = $_ENV['SMTP_PASSWORD'];
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

  
    $nom = htmlspecialchars($_POST['name'] ?? '');
    $prenom = htmlspecialchars($_POST['prenom'] ?? '');
    $tel = htmlspecialchars($_POST['tel'] ?? '');
    $email = filter_var($_POST['email'] ?? '', FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars($_POST['message'] ?? '');

    
    if (empty($nom) || empty($prenom) || empty($tel) || empty($email) || empty($message)) {
        echo 'Veuillez remplir tous les champs.';
        exit;
    }

   
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo 'Adresse email invalide.';
        exit;
    }

    $mail->setFrom($email, $nom . ' ' . $prenom);
    $mail->addAddress($_ENV['SMTP_EMAIL'], $_ENV['SMTP_NAME']);

    $mail->isHTML(true);
    $mail->Subject = 'Message de contact depuis le site Systeme PC';
    $mail->Body = "
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom :</strong> {$nom}</p>
        <p><strong>Prénom :</strong> {$prenom}</p>
        <p><strong>Téléphone :</strong> {$tel}</p>
        <p><strong>Email :</strong> {$email}</p>
        <p><strong>Message :</strong><br>" . nl2br($message) . "</p>
    ";

    $mail->send();
    header('Location: contact.html?success=1');
    exit;
} catch (Exception $e) {
    header('Location: contact.html?error=1');
    exit;
}