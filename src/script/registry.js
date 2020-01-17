$('#bottom').load('./footer.html');
let verifyCode_registry = null;
class Registry {
    constructor() {
        this.inputs = $('.contentInput input');
        this.oForm = $('form');
    }
    init() {
        let _this = this;
        let callLock = false;
        let passLock = false;
        let reLock = false;
        let yLock = false;
        this.inputs.on('focus', function () {
            $(this).parents('.inputWrap').css('borderColor', '#ff1268');
            $(this).parents('.item1').find('.tip p').show();
        });
        this.inputs.on('blur', function () {
            $(this).parents('.inputWrap').css('borderColor', '#dcdcdc');
        });
        $('.contentInput input[name=phoneNum]').on('blur', function () {
            let notice = $(this).parents('.item1').find('.tip p');
            let ok_span = $(this).parents('.contentInput').find('.info');
            if ($(this).val() !== '') {
                var reg = /^1[34578]\d{9}$/;
                if (reg.test(this.value)) {
                    $.ajax({
                        type: 'post',
                        url: 'http://10.31.152.51/xwy/damai/php/select.php',
                        data: {
                            call: $(this).val()
                        }
                    }).done((data) => {
                        if (data == 0) {
                            notice.hide().removeClass('danger').html('请输入您的常用手机号码');
                            ok_span.show();
                            callLock = true;
                        } else {
                            notice.show().addClass('danger');
                            notice.html('该手机号码已注册');
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
        $('.contentInput input[name=pwd]').on('input', function () {
            let regnum = /\d/;
            let regLower = /[a-z]/;
            let regUpper = /[A-Z]/;
            let others = /\W|\_/;
            let count = 0;
            let notice = $(this).parents('.item1').find('.tip p');
            let ok_span = $(this).parents('.contentInput').find('.info');
            if (regnum.test($(this).val())) {
                count++;
            }
            if (regLower.test($(this).val())) {
                count++;
            }
            if (regUpper.test($(this).val())) {
                count++;
            }
            if (others.test($(this).val())) {
                count++;
            }
            switch (count) {
                case 1:
                    if (this.value.length >= 6 && this.value.length <= 20) {
                        notice.addClass('danger').html('密码强度太弱，请重新输入');
                    }
                    else {
                        notice.addClass('danger').html('密码长度为6-20个字符');
                    }
                    passLock = false;
                    ok_span.hide();
                    return;
                case 2:
                case 3:
                    if (this.value.length >= 6 && this.value.length <= 20) {
                        notice.addClass('danger').html('密码强度为中');
                        passLock = true;
                    }
                    else {
                        notice.addClass('danger').html('密码长度为6-20个字符');
                        ok_span.hide();
                        passLock = false;
                    }
                    return;
                case 4:
                    if (this.value.length >= 6 && this.value.length <= 20) {
                        notice.addClass('danger').html('密码强度为强');
                        passLock = true;
                    }
                    else {
                        notice.addClass('danger').html('密码长度为6-20个字符');
                        ok_span.hide();
                        passLock = false;
                    }
                    return;
            }
        });
        $('.contentInput input[name=pwd]').on('blur', function () {
            let notice = $(this).parents('.item1').find('.tip p');
            let ok_span = $(this).parents('.contentInput').find('.info');
            let broOk = $('.pwdConfirm').parents('.item1').find('.info');
            let broNotice = $('.pwdConfirm').parents('.item1').find('.tip p');
            if ($(this).val() !== '') {
                if (passLock) {
                    notice.hide().removeClass('danger').html('请输入密码，长度为6-20个字符');
                    ok_span.show();
                    passLock = true;
                } else {
                    ok_span.hide();
                    passLock = false;
                }
                if ($('.pwdConfirm').val() !== '') {
                    if ($(this).val() !== $('.pwdConfirm').val()) {
                        ok_span.hide();
                        broNotice.show().addClass('danger').html('密码不一致');
                        passLock = false;
                    } else {
                        ok_span.show();
                        broNotice.hide().removeClass('danger').html('请再次输入密码');
                        passLock = true;
                    }
                }
                // if ($(this).val() !== $('.pwdConfirm').val() && $('.pwdConfirm').val() !== '') {
                //     ok_span.hide();
                //     broNotice.show().addClass('danger').html('密码不一致');
                //     passLock = false;
                // } else {
                //     ok_span.show();
                //     broNotice.hide().removeClass('danger').html('请再次输入密码');
                //     passLock = true;
                // }
            } else {
                notice.show().addClass('danger');
                notice.html('密码不能为空');
                ok_span.hide();
                passLock = false;
            }
        });
        $('.pwdConfirm').on('blur', function () {
            let notice = $(this).parents('.item1').find('.tip p');
            let ok_span = $(this).parents('.contentInput').find('.info');
            if ($(this).val() !== '') {
                if ($('.pwd').val() === $('.pwdConfirm').val()) {
                    ok_span.show();
                    notice.hide().removeClass('danger').html('请再次输入密码');
                    reLock = true;
                } else {
                    ok_span.hide();
                    notice.show().addClass('danger').html('密码不一致');
                    reLock = false;
                }
            } else {
                notice.show().addClass('danger');
                notice.html('确认密码不能为空');
                ok_span.hide();
                reLock = false;
            }
        });
        $('.confirmCode').on('blur', function () {
            let notice = $(this).parents('.item1').find('.tip p');
            let ok_span = $(this).parents('.contentInput').find('.info');
            if ($(this).val() !== '') {
                let value = $(this).val();
                // console.log(verifyCode_registry.validate(value));
                if (verifyCode_registry.validate(value)) {
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
        this.oForm.on('submit', function () {
            if (!callLock || !passLock || !reLock || !yLock) {
                return false;
            } else {
                _this.inputs.not('.subButton').val('');
            }
        })
    }
}


define(['picCode'], function (p) {
    verifyCode_registry = p.init();
    return {
        init: function () {
            new Registry().init();
        }
    }
})