$(function () {
    $('.paging a').eq(localStorage.pageNum).addClass('active');
    
    $('.paging a').on('click', function () {
        $('.paging a').removeClass('active');
        localStorage.pageNum = $(this).index();
        location.href = $(this).attr('href');
    });
});
