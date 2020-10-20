$(function () {
    var passwdCheck = RegExp(/^(?=.*[a-z]|[A-Z])(?=.*[0-9])(?=.*[!@#$%^*()\-_=+\\\|\[\]{};:\'",.<>\/?]).{8,16}$/);
    var pw, pw2;
    
    
    $('input[type=submit]').on('click', function (e) {
        e.preventDefault();
        pw = $('input[name=pw]').val();
        pw2 = $('input[name=pw2]').val();
        if (pw == pw2 && pw != '') {            
            location.href = "login.html";
        } else {
            check();
            alert('비밀번호가 다릅니다.');
        }
        console.log(pw)
        console.log(pw2)

    });

    function check() {
        

        if (!passwdCheck.test(pw)) {
            feedback('2px solid #ad74ce', 'pw');
            return;
        }

        if (!passwdCheck.test(pw2)) {
            feedback('2px solid #ad74ce', 'pw');
            return;
        }

        function feedback(msg, el) {
            $('input[name=' + el + ']').css('border', msg);
            $('input[name=' + el + ']').val('');
            $('input[name=' + el + ']').focus();

        }

    }


});
