$('#bottom').load('./footer.html');
let verifyCode_login=null;
class Login {
    constructor (){
        this.inputs=$('.contentInput input');
        this.imgs=$('.panda img');
    }
    init (){
        let _this=this;
        this.inputs.on('focus',function(){
            console.log($(this).index())
            _this.inputs.parents('.inputWrap').css('borderColor','#dcdcdc');
            $(this).parents('.inputWrap').css('borderColor','#ff1268');
            _this.imgs.eq($(this).index()).addClass('pandaShow').siblings('img').removeClass('pandaShow');
        });
    }
}


define(['picCode'],function(p){
    verifyCode_login=p.init();
    return {
        init:function(){
            new Login().init();
        }
    }
})