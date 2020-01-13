function daMai(data) {
    // console.log(data);
    let list_search = $('.list_search a');
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
    }else {
        str='';
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
        this.search.on('focus',function(){
            $(this).addClass('.border');
            this.style.border='1px solid #ff1268';
        })
        this.search.on('blur',function () {
            this.style.border='1px solid #f8f8f8';
            this.style.borderRightColor='#FF1268';
        })
        this.search.on('input', function () {
            if ($(this).val() !== '') {
                _this.list.show();
                let cScript = document.createElement('script');
                $(cScript).attr('src', 'https://api-gw.damai.cn/suggest.html?keyword='+$(this).val()+'&destCity=%E5%85%A8%E5%9B%BD&_ksTS=1578823685440_193&callback=daMai');
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

define([], function () {
    return {
        init: function () {
            new Search().init();
        }
    }
})
