$('#bottom').load('./footer.html');
let verifyCode_registry=null;



define(['picCode'],function(p){
    verifyCode_registry=p.init();
    return {
        init:function(){

        }
    }
})