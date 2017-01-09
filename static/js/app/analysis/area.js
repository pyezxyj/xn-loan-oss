$(function() {

    var columns = [{
        field: '',
        title: '',
        checkbox: true
    },{
        field: 'area',
        title: '地区'
    }, {
        field: 'num',
        title: '业务数量'
    }, {
        field: 'time',
        title: '平均耗时（时）',
        formatter: function(v) {
           return ((+v/3600).toFixed(2));
        },
    },{
        field: 'money',
        title: '垫资总量',
        formatter: moneyFormat
    }, {
        field: 'sjAmount',
        title: '收款总量',
        formatter:moneyFormat
    }];

    buildList({
        router: 'area',
        columns: columns,
        pageCode: '617092'
    });
   
   
});