import {
    GVerify
} from './picCode.js';

$('#bottom').load('./footer.html');
class Login {
    constructor() {
        this.inputs = $('.contentInput input');
        this.imgs = $('.panda img');
        this.notice = $('.tip p');
        this.inNum = null;
        this.verifyCode_login = new GVerify('v_container');
        this.arr = [];
        $('.tip p').each((index, value) => {
            this.arr.push($(value).html());
        })
    }
    init() {
        let _this = this;
        let callLock = false;
        let passLock = false;
        let reLock = false;
        let yLock = false;
        this.inputs.on('focus', function () {
            _this.idNUM = $(this).attr('i');
            _this.inputFocus();
        });
        this.inputs.on('blur', function () {
            _this.idNUM = $(this).attr('i');
            _this.inputBlur();
        });
        $('.contentInput input[name=phoneNum]').on('blur', function () {
            let notice = $(this).parents('.item1').find('.tip p');
            let ok_span = $(this).parents('.contentInput').find('.info');
            if ($(this).val() !== '') {
                var reg = /^1[3456789]\d{9}$/;
                if (reg.test(this.value)) {
                    $.ajax({
                        type: 'post',
                        url: 'http://10.31.152.51/xwy/project/damai/php/select.php',
                        data: {
                            call: $(this).val()
                        }
                    }).done((data) => {
                        if (data == 1) {
                            notice.hide().removeClass('danger').html('请输入用户名/邮箱/已验证手机');
                            ok_span.show();
                            callLock = true;
                        } else {
                            notice.show().addClass('danger');
                            notice.html('该账号不存在，请先注册');
                            ok_span.hide();
                            callLock = false;
                        }
                    });
                } else {
                    notice.show().addClass('danger');
                    notice.html('手机号码格式不正确');
                    ok_span.hide();
                    callLock = false;
                }
            } else {
                notice.show().addClass('danger');
                notice.html('手机号码不能为空');
                ok_span.hide();
                callLock = false;
            }
        });
        $('.contentInput input[name=pwd]').on('blur', function () {
            let notice = $(this).parents('.item1').find('.tip p');
            let ok_span = $(this).parents('.contentInput').find('.info');
            if ($(this).val() !== '') {
                notice.hide().removeClass('danger').html('请输入密码');
                ok_span.show();
                passLock = true;
            } else {
                notice.show().addClass('danger').html('密码不能为空');
                ok_span.hide();
                passLock = false;
            }
        });
        $('.contentInput input[name=pwdConfirm]').on('blur', function () {
            let notice = $(this).parents('.item1').find('.tip p');
            let ok_span = $(this).parents('.contentInput').find('.info');
            if ($(this).val() !== '') {
                let value = $(this).val();
                if (_this.verifyCode_login.validate(value)) {
                    notice.hide().removeClass('danger').html('请输入图片验证码');
                    ok_span.show();
                    yLock = true;
                } else {
                    notice.show().addClass('danger').html('验证码错误');
                    ok_span.hide();
                    yLock = false;
                }
            } else {
                notice.show().addClass('danger').html('验证码不能为空');
                ok_span.hide();
                yLock = false;
            }
        });
        $('.subButton').on('click', function () {
            _this.inputs.each((index, value) => {
                if ($(value).val() === '') {
                    $('.tip p').eq(index).show().addClass('danger').html('输入内容不能为空');
                }
            });
            if (callLock && passLock) {
                $.ajax({
                    type: 'post',
                    url: 'http://10.31.152.51/xwy/project/damai/php/login.php',
                    data: {
                        call: $('.contentInput input[name=phoneNum]').val()
                    },
                    dataType: 'json'
                }).done((data) => {
                    if(data[0].password===$('.contentInput input[name=pwd]').val()) {
                        if(yLock) {
                            window.location.href='http://10.31.152.51/xwy/project/damai/dist?'+$('.contentInput input[name=phoneNum]').val();
                        }
                    }else {
                        $('.tip p').eq(1).show().html('密码错误').addClass('danger');
                        $('.info').eq(1).hide();
                    }
                });
            }
        })
    }
    inputFocus() {
        this.inputs.eq(this.idNUM).parents('.inputWrap').css('borderColor', '#ff1268');
        this.imgs.eq(this.idNUM).addClass('pandaShow').siblings('img').removeClass('pandaShow');
        this.notice.eq(this.idNUM).show().html(this.arr[this.idNUM]).removeClass('danger');
    }
    inputBlur() {
        this.inputs.eq(this.idNUM).parents('.inputWrap').css('borderColor', '#dcdcdc');
        this.imgs.eq(3).addClass('pandaShow').siblings('img').removeClass('pandaShow');
    }
}


// define(['picCode'],function(p){
//     verifyCode_login=p.init();
//     return {
//         init:function(){
//             new Login().init();
//         }
//     }
// })

export {
    Login
}