$(function () {

    $('.ban figure').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    var mq = window.matchMedia("screen and (max-width:480px)");

    mq.addListener(res);

    function res(e) {
        if (e.matches) {
            console.log('모바일');
            $('.ban1').attr('src', '/img/m_ban1.jpg');

            $('.ban2').attr('src', '/img/m_ban2.jpg');
           
            var txt = $('.review figcaption').eq(0).text();
            
            console.log(txt.length)
            if(txt.length > 100){
                txt = txt.substr(0,90);
                txt = txt.replace(txt, txt+'...');
            }
            
        } else {
            console.log('PC');
        }
    }

    res(mq);

});
