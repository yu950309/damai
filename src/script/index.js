function daMai(data) {
    // console.log(data);
    let list_search = $('.list_search');
    let list = $('.search_wrap');
    if (data[0]) {
        let str = '';
        $.each(data, function (index, value) {
            str += `
        <a href="https://detail.damai.cn/item.htm?spm=a2oeg.home.searchtxt.ditem_0.591b23e1KRioyI&id=${value.id}" target="_blank">
        <span class="title_search">${value.name}</span>
        <span class="city_search">${value.cityName}</span>
    </a>
        `;
        });
        list_search.html(str);
    } else {
        str = '';
    }

}
class Search {
    constructor() {
        this.search = $('.search_header input');
        this.list = $('.search_wrap');
    }
    init() {
        $('#top').load('./header.html', () => {
            this.search = $('.search_header input');
            this.list = $('.search_wrap');
            this.getData();
        });
        $('#bottom').load('./footer.html');
    }
    getData() {
        let _this = this;
        this.search.on('focus', function () {
            $(this).addClass('.border');
            this.style.border = '1px solid #ff1268';
        })
        this.search.on('blur', function () {
            this.style.border = '1px solid #f8f8f8';
            this.style.borderRightColor = '#FF1268';
        })
        this.search.on('input', function () {
            if ($(this).val() !== '') {
                _this.list.show();
                let cScript = document.createElement('script');
                $(cScript).attr('src', 'https://api-gw.damai.cn/suggest.html?keyword=' + $(this).val() + '&destCity=%E5%85%A8%E5%9B%BD&_ksTS=1578823685440_193&callback=daMai');
                cScript.className = 'cs';
                // $(cScript).addClass('cs');
                let arr = document.querySelectorAll('.cs');
                document.body.appendChild(cScript);
                // $('body').append($(cScript));
                for (let i = 0; i < arr.length; i++) {
                    document.body.removeChild(arr[i]);
                }
            } else {
                _this.list.hide();
            }
        });
    }
}

class Render {
    constructor() {
        this.content = $('.box');
        this.concertBox = $('.content_concert .box_right_item');
        this.operaBox = $('.content_opera .box_right_item');
        this.physicalBox = $('.content_physical .box_right_item');
        this.campaignBox = $('.content_campaign .box_right_item');
    }
    init() {
        $.ajax({
            url: 'http://10.31.152.51/xwy/damai/php/indexData.php',
            data: {
                num: 1
            },
            dataType: 'json'
        }).done((data) => {
            $.each(data, ($index, $value) => {
                if ($index === 0) {
                    $('.content_concert .box_left img').attr('src', $value.url);
                    $('.content_concert .box_left .title').html($value.title);
                    $('.content_concert .box_left .details').html('¥' + $value.price + '<span>起</span>');
                } else {
                    $('.content_concert .box_right_item img').eq($index - 1).attr('src', $value.url);
                    $('.content_concert .box_right_item .title').eq($index - 1).html($value.title);
                    $('.content_concert .box_right_item .venue').eq($index - 1).html($value.address);
                    $('.content_concert .box_right_item .showtime').eq($index - 1).html($value.time);
                    $('.content_concert .box_right_item .price').eq($index - 1).html('¥' + $value.price + '<span>起</span>');
                }
            });
        });
        $.ajax({
            url: 'http://10.31.152.51/xwy/damai/php/indexData.php',
            data: {
                num: 2
            },
            dataType: 'json'
        }).done((data) => {
            $.each(data, ($index, $value) => {
                if ($index === 0) {
                    $('.content_opera .box_left img').attr('src', $value.url);
                    $('.content_opera .box_left .title').html($value.title);
                    $('.content_opera .box_left .details').html('¥' + $value.price + '<span>起</span>');
                } else {
                    $('.content_opera .box_right_item img').eq($index - 1).attr('src', $value.url);
                    $('.content_opera .box_right_item .title').eq($index - 1).html($value.title);
                    $('.content_opera .box_right_item .venue').eq($index - 1).html($value.address);
                    $('.content_opera .box_right_item .showtime').eq($index - 1).html($value.time);
                    $('.content_opera .box_right_item .price').eq($index - 1).html('¥' + $value.price + '<span>起</span>');
                }
            });
        });
        $.ajax({
            url: 'http://10.31.152.51/xwy/damai/php/indexData.php',
            data: {
                num: 4
            },
            dataType: 'json'
        }).done((data) => {
            $.each(data, ($index, $value) => {
                if ($index === 0) {
                    $('.content_physical .box_left img').attr('src', $value.url);
                    $('.content_physical .box_left .title').html($value.title);
                    $('.content_physical .box_left .details').html('¥' + $value.price + '<span>起</span>');
                } else {
                    $('.content_physical .box_right_item img').eq($index - 1).attr('src', $value.url);
                    $('.content_physical .box_right_item .title').eq($index - 1).html($value.title);
                    $('.content_physical .box_right_item .venue').eq($index - 1).html($value.address);
                    $('.content_physical .box_right_item .showtime').eq($index - 1).html($value.time);
                    $('.content_physical .box_right_item .price').eq($index - 1).html('¥' + $value.price + '<span>起</span>');
                }
            });
        });
        $.ajax({
            url: 'http://10.31.152.51/xwy/damai/php/indexData.php',
            data: {
                num: 3
            },
            dataType: 'json'
        }).done((data) => {
            $.each(data, ($index, $value) => {
                if ($index === 0) {
                    $('.content_campaign .box_left img').attr('src', $value.url);
                    $('.content_campaign .box_left .title').html($value.title);
                    $('.content_campaign .box_left .details').html('¥' + $value.price + '<span>起</span>');
                } else {
                    $('.content_campaign .box_right_item img').eq($index - 1).attr('src', $value.url);
                    $('.content_campaign .box_right_item .title').eq($index - 1).html($value.title);
                    $('.content_campaign .box_right_item .venue').eq($index - 1).html($value.address);
                    $('.content_campaign .box_right_item .showtime').eq($index - 1).html($value.time);
                    $('.content_campaign .box_right_item .price').eq($index - 1).html('¥' + $value.price + '<span>起</span>');
                }
            });
        });
    }
}

class Banner {
    constructor() {
        this.pic = $('.banner_img img');
        this.dot = $('.nav .dot');
        this.left = $('.prev');
        this.right = $('.next');
        this.index = null;
        this.timer = null;
    }
    init() {
        let _this = this;
        this.dot.hover(function () {
            _this.index = $(this).index();
            _this.tabSwitch();
        });
        this.autoPlay();
        this.left.on('click', () => {
            this.leftClick();
        });
        this.right.on('click', () => {
            this.rightClick();
        })
        $('#banner').hover(() => {
            clearInterval(this.timer);
        }, () => {
            this.autoPlay();
        })
    }
    tabSwitch() {
        this.dot.eq(this.index).addClass('current').siblings('.dot').removeClass('current');
        this.pic.hide();
        this.pic.eq(this.index).show();
    }
    autoPlay() {
        this.timer = setInterval(() => {
            this.rightClick();
        }, 3000);
    }
    leftClick() {
        this.index--;
        if (this.index < 0) {
            this.index = this.pic.size() - 1;
        }
        this.tabSwitch();
    }
    rightClick() {
        this.index++;
        if (this.index >= this.pic.size()) {
            this.index = 0;
        }
        this.tabSwitch();
    }
}
class Stair {
    constructor() {
        this.stairs = $('#stairs div');
        this.floor = $('.dm-content');
        this.sideBar = $('#sideBar');
        this.goTop = $('.go_top');
        this.header=$('#top');
        this.index = null;
    }
    init() {
        let _this = this;
        if ($(window).scrollTop() > 300) {
            this.stairs.parents('#stairs').show();
        } else {
            this.stairs.parents('#stairs').hide();
        }
        if ($(window).scrollTop() > 700) {
            this.sideBar.css('top', '65.5%');
            this.goTop.show();
        } else {
            this.sideBar.css('top', '72.5%');
            this.goTop.hide();
        }
        this.stairs.on('click', function () {
            _this.index = $(this).index();
            _this.stairsMove();
        });
        $(window).on('scroll', () => {
            if ($(window).scrollTop() > 300) {
                this.stairs.parents('#stairs').show();
            } else {
                this.stairs.parents('#stairs').hide();
            }
            if ($(window).scrollTop() > 700) {
                this.sideBar.css('top', '65.5%');
                this.goTop.show();
            } else {
                this.sideBar.css('top', '72.5%');
                this.goTop.hide();
            }
            if($(window).scrollTop()>this.header.outerHeight()) {
                this.header.css({'position':'fixed','top':0,'left':0,'zIndex':999});
            }else {
                this.header.css('position','static');
            }
            let $move_top = $(window).scrollTop();
            this.floor.each(function (index) {
                if ($(this).offset().top >= $move_top - 100) {
                    _this.stairs.eq(index).addClass('active').siblings('div').removeClass('active');
                    return false;
                }
            });
        });
        this.goTop.on('click', () => {
            $('html').animate({ scrollTop: 0 });
        })
    }
    stairsMove() {
        this.stairs.eq(this.index).addClass('active').siblings('div').removeClass('active');
        let $top = this.floor.eq(this.index).offset().top;
        $('html').animate({
            scrollTop: $top
        })
    }
}

define([], function () {
    return {
        init: function () {
            new Search().init();
            new Render().init();
            new Banner().init();
            new Stair().init();
        }
    }
})
