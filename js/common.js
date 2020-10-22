$(function () {
    $('header').load('head_foot.html .head', menu);
    $('footer').load('head_foot.html .footer');

    function menu() {
        //버거메뉴
        const menu = document.querySelector('.menu-trigger');

        const nav = document.querySelector('.mobile_menu');

        menu.addEventListener('click', function () {
            menu.classList.toggle('active');
            nav.classList.toggle('active');
        });
        
        $('.welcome').hide();
        
    }
});
