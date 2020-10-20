$(function(){
   
     $("#check_all").click(function(){
        var chk = $(this).is(":checked");//.attr('checked');
        if(chk) $(".cart_table input").prop('checked', true);
        else  $(".cart_table input").prop('checked', false);
    });
    
});