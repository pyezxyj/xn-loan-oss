$(function() {

    var columns = [{
        field: '',
        title: '',
        checkbox: true
    },{
        field: 'province',
        title: '地区',
        type: 'select',
        listCode: '617127',
        keyName: 'code',
        valueName: "county",
    }, {
        field: 'num',
        title: '业务数量'
    }, {
        field: 'time',
        title: '平均耗时（时）',
        formatter: function (v) {
            if ( v != null ) {
                     return ((+v/3600000).toFixed(2)); 
            } else{
            	return  '-' ;
            }
        }
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
        pageCode: '617092',
        searchParams: {
            status: "14"
        }
    });
   
   
});