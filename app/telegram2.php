<?php

$name = $_POST['user_name2'];


$phone = $_POST['user-phone'];

$user_select = $_POST['user-select_quiz'];
// if ($nameSelect == 'ru') {
//  $phone = $phone1;
// }
// if ($nameSelect == 'kz') {
//  $phone = $phone2;
// }
// if ($nameSelect == 'uk') {
//  $phone = $phone3;
// }
// if ($nameSelect == 'be') {
//  $phone = $phone4;
// }
$message = $_POST['user-text2'];
// $token = "1871761928:AAGGhcA-TjASr9f4ZvtNaH6rZ4coGwUkdVA";
$token = "2003994206:AAE756gdX0BLI6zM7AHgHGWWcLDjeDxcMJU";
// $chat_id = "-477008159";
$chat_id = "-513681295";


$arr = array(
 'Имя пользователя: ' => $name,
 'Телефон: ' => $phone,
 'Вопрос' => $message,
 'Ответы' => $user_select
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

// header('Location: services/crm.html');
?>