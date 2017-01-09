$(function() {

    var columns = [{
        field: '',
        title: '',
        checkbox: true
    },{
        field: '',
        title: '地区'
    }, {
        field: '',
        title: '业务数量'
    }, {
        field: '',
        title: '平均耗时'
    },{
        field: '',
        title: '垫资总量',
        formatter: moneyFormat
    }, {
        field: '',
        title: '收款总量',
        formatter:moneyFormat
    }];

    buildList({
        router: 'area',
        columns: columns,
        pageCode: ''
    });
   
   
});