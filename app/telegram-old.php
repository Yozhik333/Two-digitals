<?php

$name = $_POST['user_name'];

$nameSelect = $_POST['select_phone'];

$phone = $_POST['user_phone1'];
$phone1 = $_POST['user_phone1'];
$phone2 = $_POST['user_phone2'];
$phone3 = $_POST['user_phone3'];
$phone4 = $_POST['user_phone4'];

if ($nameSelect == 'ru') {
 $phone = $phone1;
}
if ($nameSelect == 'kz') {
 $phone = $phone2;
}
if ($nameSelect == 'uk') {
 $phone = $phone3;
}
if ($nameSelect == 'be') {
 $phone = $phone4;
}
$message = $_POST['user_message'];
$token = "1871761928:AAGGhcA-TjASr9f4ZvtNaH6rZ4coGwUkdVA";
$chat_id = "-477008159";
$arr = array(
 'Имя пользователя: ' => $name,
 'Телефон: ' => $phone,
 'Вопрос' => $message
);

foreach($arr as $key => $value) {
 $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: index.html');
} else {
  echo "Error";
}
?>