<?
//    $db = mysqli_connect('localhost','root','1234','yeseul');
$db = mysqli_connect('localhost','root','1234','hailli');

    function sql($query){
        global $db;
        return mysqli_query($db,$query);
    }


?>