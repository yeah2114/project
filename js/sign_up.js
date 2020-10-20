$(function () {
    var userIdCheck = RegExp(/^[A-Za-z0-9_\-]{5,20}$/);
    var passwdCheck = RegExp(/^(?=.*[a-z]|[A-Z])(?=.*[0-9])(?=.*[!@#$%^*()\-_=+\\\|\[\]{};:\'",.<>\/?]).{8,16}$/);
    var codeCheck = RegExp(/^(?=.*[0-9]).{4,4}$/);
    var phonNumberCheck = RegExp(/^01[0179][0-9]{7,8}$/);
    var nameCheck = RegExp(/^[가-힣]{2,6}$/);

    $('input[type=submit]').eq(1).on('click', check);

    function check(e) {
        e.preventDefault();

        var id = $('input[name=id]').val();
        var pw = $('input[name=pw]').val();
        var pw2 = $('input[name=pw2]').val();
        var name = $('input[name=name]').val();
        var phone = $('input[name=phone]').val();
        var code = $('input[name=code]').val();



        if (!userIdCheck.test(id)) {
            feedback('2px solid #ad74ce', 'id');
            return;
        }

        if (!passwdCheck.test(pw)) {
            feedback('2px solid #ad74ce', 'pw');
            return;
        }

        if (!nameCheck.test(name)) {
            feedback('2px solid #ad74ce', 'name');
            return;
        }

        if (!phonNumberCheck.test(phone)) {
            feedback('2px solid #ad74ce', 'phone');
            return;
        }

        if (!codeCheck.test(code)) {
            feedback('2px solid #ad74ce', 'code');
            return;
        }

        function feedback(msg, el) {
            $('input[name=' + el + ']').css('border', msg);
            $('input[name=' + el + ']').val('');
            $('input[name=' + el + ']').focus();
        }

        if (pw == pw2) {
            join.action="/php/sign_up.php";
            join.submit();
        } else {
            alert('비밀번호를 확인해주세요');
        }
    }
});
