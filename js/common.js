$(function () {
    $('header').load('/head_foot.html .head', menu);
    $('footer').load('/head_foot.html .footer');

    function menu() {
        //버거메뉴
        const menu = document.querySelector('.menu-trigger');

        const nav = document.querySelector('.mobile_menu');

        menu.addEventListener('click', function () {
            menu.classList.toggle('active');
            nav.classList.toggle('active');
        });
        
        
        $('.welcome').hide();
            var idV = $('input[name=id]').val();
            var pwV = $('input[name=pw]').val();

            $.ajax({
                url:'/php/login.php',
                type:'get',
                data:{id:idV, pw:pwV},
                success:function(data){
                    if(data === 'success'){
                        $('.need').hide();
                        $('.welcome').show();
                    }
                }
            });
        
        
        var logoutBtn = document.querySelector('.logout');
        logoutBtn.addEventListener('click',logout);
        
        
        //로그인이 돼있으면 사용자님 환영합니다 문구 띄우기, 로그아웃창 띄우기
        function logout(e){
            e.preventDefault();
            
            $.ajax({
                url:'/php/logout.php',
                success:function(data){
                    location.reload();
                    
                }
            });
        }
        
        
        
    }
});
