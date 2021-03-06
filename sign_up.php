<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">

    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>cafe. HAILLI </title>


    <link rel="stylesheet" href="css/sign_up.css" type="text/css">

    <link rel="icon" href="img/favi.ico">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

    <script src="/js/common.js"></script>

     <script src="/js/sign_up.js"></script> 

</head>

<body>

    <header></header>

    <main>
        <div class="sign_up">

            <div class="form">
                <h2>
                    회원가입
                </h2>
                <form  method="" name="join">
                    <div class="inp">
                        <p><input type="text" required placeholder="아이디" name="id"></p>
                        <p><input type="password" required placeholder="비밀번호" name="pw"></p>
                        <p><input type="password" required placeholder="비밀번호 확인" name="pw2"></p>
                        <p><input type="text" required placeholder="이름" name="name"></p>
                        <div>
                            <input type="text" name="phone" placeholder="전화번호" required>

                            <input type="submit" value="인증번호">
                        </div>
                        <p><input type="text" required placeholder="인증번호" name="code"></p>
                        <p><input type="text" required placeholder="주소" name="address"></p>
                        <p><input type="submit" value="다음"></p>
                    </div>
                </form>
            </div>

        </div>
    </main>

    <footer></footer>
</body>

</html>
