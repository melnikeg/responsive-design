<?php
$recaptchaSecretKey = '6Lf1AYooAAAAAKzu3aRSdnu5jACaeFuKtBvfs-gH';

if (isset($_POST['g-recaptcha-response'])) {
    $recaptchaResponse = $_POST['g-recaptcha-response'];
    
    $url = 'https://www.google.com/recaptcha/api/siteverify';
    $data = [
        'secret'   => $recaptchaSecretKey,
        'response' => $recaptchaResponse,
        'remoteip' => $_SERVER['REMOTE_ADDR'],
    ];

    $options = [
        'http' => [
            'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
            'method'  => 'POST',
            'content' => http_build_query($data),
        ],
    ];

    $context  = stream_context_create($options);
    $result = file_get_contents($url, false, $context);
    $result = json_decode($result, true);

    if ($result['success'] === true) {
       
        echo '<div>reCAPTCHA verification succeeded. Continue with form processing.</div>';
    } else {
        echo '<div>reCAPTCHA verification failed.</div>';
    }
} else {
    echo '<div>reCAPTCHA not submitted.</div>';
}
?>