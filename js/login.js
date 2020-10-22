$(function(data){
   
    var userIdCheck = RegExp(/^[A-Za-z0-9_\-]{5,20}$/);
    var passwdCheck = RegExp(/^(?=.*[a-z]|[A-Z])(?=.*[0-9])(?=.*[!@#$%^*()\-_=+\\\|\[\]{};:\'",.<>\/?]).{8,16}$/);
    $('input[type=submit]').on('click',login);
    
    function login(e){
        e.preventDefault();
        var idV = $('input[name=id]').val();
        var pwV = $('input[name=pw]').val();
        
        $.ajax({
           url:'php/login.php',
            type:'get',
            data:{id:idV, pw:pwV},
            success:function(data){
                
                if(data.trim() === 'id_fail'){
                    alert('회원이 아닙니다.');
                    $('input[name=id]').css('border', '2px solid #ad74cd');
                }else if(data.trim() === 'pw_fail'){
                    alert('비밀번호를 확인해주세요.');
                    $('input[name=pw]').css('border','2px solid #ad74ce');
                }else{
                    location.href="index.html";
                    
                }
            }
        });
        
        
        var id = $('input[name=id]').val();
        var pw = $('input[name=pw]').val();
        
        if (!userIdCheck.test(id)) {
            feedback('2px solid #ad74ce', 'id');
            return;
        }

        if (!passwdCheck.test(pw)) {
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