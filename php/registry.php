<?php
include 'conn.php';
if(isset($_POST['phoneNum']) && isset($_POST['pwd'])) {
    $call=$_POST['phoneNum'];
    $password=$_POST['pwd'];
    $conn->query("INSERT damai_user VALUES('$call','$password',NOW())");
}else {
    echo '非法操作';
}
header('location:http://10.31.152.51/xwy/project/damai/dist/login.html')

?>