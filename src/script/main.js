require.config({
    baseUrl: 'https://cdnjs.cloudflare.com/ajax/libs/', 
    paths: {
        'jquery': 'jquery/1.12.4/jquery.min',
        'jquery_cookie': 'jquery-cookie/1.4.1/jquery.cookie.min',
        'jquery_lazy_load': 'jquery.lazyload/1.9.1/jquery.lazyload.min'
    }
});
require(['jquery'],function(){
    $('#top').load('./header.html');
    $('#bottom').load('./footer.html');
    let target = $('#current').attr('target-page');
    if(target) {
        require([target],function(target){
            target.init();
        })
    }
})