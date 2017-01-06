$(function() {

    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'realName',
        title: '车主',
        search:true
    }, {
        field: 'company',
        title: '保险公司',

    }, {
        field: 'type',
        title: '保险类型'
    },{
        field: 'orderNo',
        title: '保单号'
    }, {
        field: 'amount',
        title: '保费',
    }, {
        field: 'startDatetime',
        title: '保险到期时间',
    },  {
        field: '',
        title: '续保短信',
    },{
    	title:'备注',
    	field:'remark',
    	maxlength:255
    }];

    buildList({
        router: 'insurance',
        columns: columns,
        pageCode: '617045',
        detailCode:'617046'
       
    });

});