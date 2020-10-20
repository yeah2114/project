<?
    include_once "db.php";

    $id = $_GET['id'];
    $pw = $_GET['pw'];
    $name = $_GET['name'];

//echo $pw;

    $query = "select * from hailli where id='$id'";

    $result = sql($query);
    $row = mysqli_fetch_array($result);

    if($row){    
        if($row['id'] === $id && $row['pw'] === $pw){
            @session_start();
            
            $_SESSION['id'] = $row['id'];
            $_SESSION['name'] = $row['name'];
        
            setcookie('id',$id);
            setcookie('name',$name);
            echo "success";
        }else{
            echo "pw_fail";
        }
    }else{
        echo "id_fail";
    }

?>