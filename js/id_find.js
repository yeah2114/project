$(function () {
    var codeCheck = RegExp(/^(?=.*[0-9]).{4,4}$/);
    var phonNumberCheck = RegExp(/^01[0179][0-9]{7,8}$/);
    var nameCheck = RegExp(/^[가-힣]{2,6}$/);

    $('input[type=submit]').eq(1).on('click', function () {
        check();
        
        location.href = "id_find_result.html";
    });

    function check(){
        
        var name = $('input[name=name]').val();
        var phone = $('input[name=phone]').val();
        var code = $('input[name=code]').val();
        
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
    }

});
