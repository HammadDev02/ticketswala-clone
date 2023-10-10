<?php
    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
        header('Access-Control-Allow-Headers: token, Content-Type');
        header('Access-Control-Max-Age: 1728000');
        header('Content-Length: 0');
        header('Content-Type: text/plain');
        die();
    }

    header('Access-Control-Allow-Origin: *');

    $to = $_POST['to'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $headers = "From: kateb@kateb.io" . "\r\n";
    ini_set("SMTP","kateb.io");
    ini_set("smtp_port","465");
    ini_set("sendmail_from","kateb@kateb.io");

    if (mail($to, $subject, $message, $headers)) {
        echo "Email sent successfully.";
    } else {
        echo "Error: email not sent.";
    }
?>