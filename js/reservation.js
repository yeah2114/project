$(function () {

    //썸네일 변경
    $('.small a').on('click', function (e) {
        idx = $(this).index();
        e.preventDefault();

        var img = $('.small a').eq(idx).find('img').attr('src');

        $('.big img').attr('src', img);
    });





    //주문 양식
    var size = 0;
    var shape = 0;
    var taste = 0;
    var cream = 0;
    var option = 0;

    //케이크 사이즈 변경
    $('.sel input[name=size]').on('click', function () {


        size = 0;
        shape = 0;
        taste = 0;
        cream = 0;
        option = 0;
        $('input[type=text]').val('');



        //클릭시 값 받아오기
        sizeCheck = $('input:checkbox[name="size"]').is(":checked");
        if (sizeCheck == true) {
            size = parseInt($(this).val());

            //체크박스 해제
            $('input[type="checkbox"]').prop('checked', false);
            //            $('.sel textarea').val('0');
            $(this).prop('checked', true);

        } else {
            size -= parseInt($(this).val());
        }

        //중복 방지
        if ($(this).prop('checked')) {
            $('input[type="checkbox"][name="size"]').prop('checked', false);
            $(this).prop('checked', true);
        }


        total();

    });





    //케이크 모양 변경
    $('.sel input[name=shape]').on('click', function () {

        //클릭시 값 받아오기
        shapeCheck = $('input:checkbox[name="shape"]').is(":checked");
        if (shapeCheck == true) {
            shape += parseInt($(this).val());

        } else {
            shape -= parseInt($(this).val());
        }

        //중복 방지
        if ($(this).prop('checked')) {
            $('input[type="checkbox"][name="shape"]').prop('checked', false);
            $(this).prop('checked', true);
        }


        total();
    });




    //케이크 시트 맛 변경
    $('.sel input[name=cake_taste]').on('click', function () {
        //클릭시 값 받아오기
        tasteCheck = $('input:checkbox[name="cake_taste"]').is(":checked");
        if (tasteCheck == true) {
            taste += parseInt($(this).val());

        } else {
            taste -= parseInt($(this).val());
        }

        //중복 방지
        if ($(this).prop('checked')) {
            $('input[type="checkbox"][name="cake_taste"]').prop('checked', false);
            $(this).prop('checked', true);
        }


        total();
    });






    //생크림 모양 변경
    $('.sel input[name=cream_shape]').on('click', function () {
        //클릭시 값 받아오기
        creamCheck = $(this).is(":checked");
        if (creamCheck == true) {
            cream += parseInt($(this).val());

        } else {
            cream -= parseInt($(this).val());
        }


        total();
    });





    //추가옵션 변경
    $('.sel input[name=option]').on('click', function () {
        //클릭시 값 받아오기
        optionCheck = $('input:checkbox[name="option"]').is(":checked");
        if (optionCheck == true) {
            option += parseInt($(this).val());

        } else {
            option -= parseInt($(this).val());
        }

        //중복 방지
        if ($(this).prop('checked')) {
            $('input[type="checkbox"][name="option"]').prop('checked', false);
            $(this).prop('checked', true);
        }


        total();

    });


    var textCheck = RegExp(/^[가-힣]|[A-Za-z0-9_\-]{2,6}$/);


    //체크박스 유효성 검사
    $('#cart').on('click', function (e) {
        e.preventDefault();

        if ($('.box:checked').length >= 4 && $('input[name=caketxt]').val() != '') {
            location.href = "reservation_ok.html";
        } else {
            test();
        }
    });

    $('#pay').on('click', function (e) {
        e.preventDefault();

        if ($('.box:checked').length >= 4 && $('input[name=caketxt]').val() != '') {
            test();
            location.href = "pay.html";
        } else {
            test();
        }
    });

    function test() {
        //케이크 사이즈 검사
        if (!$('input[name=size]').is(':checked')) {
            alert('케이크 사이즈를 선택해주세요.');
            return;
        }

        //케이크 모양 검사
        if (!$('input[name=shape]').is(':checked')) {
            alert('케이크 모양을 선택해주세요.');
            return;
        }

        //케이크 시트 맛 검사
        if (!$('input[name=cake_taste]').is(':checked')) {
            alert('케이크 시트  맛을 선택해주세요.');
            return;
        }

        //생크림 모양 검사
        if (!$('input[name=cream_shape]').is(':checked')) {
            alert('생크림 모양을 선택해주세요.');
            return;
        }

        //케이크 문구 검사
        var cakeTxt = $('input[name=caketxt]').val();

        if (!textCheck.test(cakeTxt)) {
            feedback('2px solid #ad74ce', 'caketxt');
            return;
        }
        var opTxt = $('input[name="optxt]').val();


        //추가옵션 검사
        if (!$('input[name=option]').is(':checked')) {
            alert('추가옵션을 선택해주세요.');
            
            return;
        }

        function feedback(msg, el) {
            $('input[name=' + el + ']').css('border', msg);
            $('input[name=' + el + ']').val('');
            $('input[name=' + el + ']').focus();
        }
    }



    //계산함수
    function total() {
        $('.gw').val(size + '원');
        $('.op').val('+' + (shape + taste + cream + option) + '원');
        $('.sum').val('+' + (size + shape + taste + cream + option) + '원');
    }



    //스크롤 내리면 상단올리는버튼 보여주기  
    var top = document.querySelector('.re');
    var aside = document.querySelector('aside');
    window.addEventListener('scroll', function () {
        if (window.scrollY > top.offsetHeight) {
            aside.classList.add('active');
        } else {
            aside.classList.remove('active');
        }
    });



    //상단올리기  
    aside.addEventListener('click', function () {
        window.scrollTo({
            left: 0,
            top: 0,
            behavior: 'smooth'
        })
    });



});
