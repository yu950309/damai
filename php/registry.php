<?php
include 'conn.php';
if(isset($_POST['call']) && isset($_POST['password'])) {
    $call=$_POST['phoneNum'];
    $password=$_POST['pwd'];
    $conn-query("INSERT damai_user VALUES('$call','$password',NOW())");
}else {
    echo '非法操作';
}

?>