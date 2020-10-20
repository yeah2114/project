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
        $('textarea').val('');



        //클릭시 값 받아오기
        sizeCheck = $('input:checkbox[name="size"]').is(":checked");
        if (sizeCheck == true) {
            size = parseInt($(this).val());

            //체크박스 해제
            $('input[type="checkbox"]').prop('checked', false);
//            $('.sel textarea').val('0');

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

    
    
    
    //계산함수
    function total() {
        /*var check = $('.sel input[type=checkbox]').length;
        for(var i=0;i<check;i++){
            aa += Number($('.sel input[type=checkbox]').eq(i).val());
        }*/
        $('.gw').val(size + '원');
        $('.op').val('+' + (shape + taste + cream + option) + '원');
        $('.sum').val('+' + (size + shape + taste + cream + option) + '원');
    }



});
