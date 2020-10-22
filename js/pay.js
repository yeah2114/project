$(function(){
    $('.pay_option label').on('click',function(){
       
       $('.pay_option label').removeClass('active'); $(this).addClass('active'); 
    });
    
    
    //checkbox click
    $("#check_all").click(function(){
        var chk = $(this).is(":checked");//.attr('checked');
        if(chk) $(".goods_table input").prop('checked', true);
        else  $(".goods_table input").prop('checked', false);
    });

    
});