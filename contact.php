<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = htmlspecialchars(trim($_POST["name"] ?? ''));
    $email = htmlspecialchars(trim($_POST["email"] ?? ''));
    $message = htmlspecialchars(trim($_POST["message"] ?? ''));

    if (empty($nom) || empty($email) || empty($message)) {
        echo "Veuillez remplir tous les champs.";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Adresse email invalide.";
    } else {
        $to = "besimstrazimiri61@gmail.com";
        $subject = "Nouveau message de contact";
        $body = "Nom: $nom\nEmail: $email\nMessage:\n$message";
        $headers = "From: $email";

        if (mail($to, $subject, $body, $headers)) {
            echo "Merci, votre message a bien été envoyé !";
        } else {
            echo "Erreur lors de l'envoi du message.";
        }
    }
} else {
    echo "Accès non autorisé.";
}
?>