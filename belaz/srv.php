<?php

if($_SERVER['REQUEST_METHOD'] == 'POST') {
 
    $tel = strip_tags($_POST['tel']);
 
    $res = array();
 
    if(empty($tel)) {
        $res['error'] = "Нужно добавить номер телефона!";
        echo json_encode($res);
 
        exit();
    }
}