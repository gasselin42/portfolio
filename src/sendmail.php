<?php

// if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // if(
    //     !empty($_POST['name'])
    //     && !empty($_POST['email'])
    //     && !empty($_POST['message'])
	// 	&& isset($_POST['submit'])
    // ){
        $name = $_POST["name"];
        $email = $_POST["email"];
        $message = $_POST["message"];

        $to = "gabhabs@yahoo.com";
        $subject = "New Contact Form Submission";
        $body = "Name: {$name}\nEmail: {$email}\nMessage: {$message}";

        if (mail($to, $subject, $body)) {
            echo "Message sent successfully!";
        } else {
            echo "Failed to send message.";
        }
    // }
// }

?>