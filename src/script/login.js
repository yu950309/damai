$('#bottom').load('./footer.html');
let verifyCode_login=null;
class Login {
    constructor (){
        this.inputs=$('.contentInput input');
        this.imgs=$('.panda img');
        this.notice=$('.tip p');
        this.inNum=null;
    }
    init (){
        let _this=this;
        console.log($('.inputWrap input[name=phoneNum]'));
        this.inputs.on('focus',function(){
            _this.idNUM=$(this).attr('i');
            _this.inputFocus();
        });
        this.inputs.on('blur',function(){
            _this.idNUM=$(this).attr('i');
            _this.inputBlur();
        });
    }
    inputFocus (){
        this.inputs.eq(this.idNUM).parents('.inputWrap').css('borderColor','#ff1268');
        this.imgs.eq(this.idNUM).addClass('pandaShow').siblings('img').removeClass('pandaShow');
        this.notice.eq(this.idNUM).show();
    }
    inputBlur (){
        this.inputs.eq(this.idNUM).parents('.inputWrap').css('borderColor','#dcdcdc');
        this.imgs.eq(3).addClass('pandaShow').siblings('img').removeClass('pandaShow');
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