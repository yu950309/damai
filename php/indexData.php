<?php
include 'conn.php';
$result=$conn->query("SELECT * FROM damai");
$num=$_GET['num'];
if($num==1) {
    $result=$conn->query("SELECT * FROM damai limit 0,7");
}else if($num==2) {
    $result=$conn->query("SELECT * FROM damai limit 7,14");
}else if($num==3) {
    $result=$conn->query("SELECT * FROM damai limit 14,21");
}else {
    $result=$conn->query("SELECT * FROM damai limit 21,28");
}
$arr=array();
for($i=0;$i<$result->num_rows;$i++) {
    $arr[$i]=$result->fetch_assoc();
}
echo json_encode($arr);


?>