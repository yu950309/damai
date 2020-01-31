$('#bottom').load('./footer.html');
class Details {
    constructor() {
        this.sid = location.search.slice(1).split('=')[1];
        this.skuName = $('.skuname span');
    }
    init() {
        $.ajax({
            url: 'http://192.168.0.106/xwy/project/damai/php/detail.php',
            data: {
                sid: this.sid
            },
            dataType: 'json'
        }).done((data) => {
            $('.title_content').html(data[0].title);
            $('.cover img').attr('src', data[0].url);
            $('.time').html('时间：' + data[0].time);
            $('.addr').html('场馆：' + data[0].address);
            $('.presell_time').html(data[0].time);
            document.title = data[0].title;
            this.skuName.each((index, value) => {
                $(value).html(+data[0].price + index * 300);
            })
            $('.totol__price span').html(this.skuName.last().html());
        });
    }
}

export {
    Details
}