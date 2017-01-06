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
        formatter: moneyFormat
    }, {
        field: 'startDatetime',
        title: '保险到期时间',
        formatter: dateTimeFormat
    },  {
        field: 'smsCount',
        title: '续保短信',
    },{
    	title:'备注',
    	field:'remark'
    }];

    buildList({
        router: 'insurance',
        columns: columns,
        pageCode: '617045'
    });
    $("#xbdxBtn").on("click", function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        reqApi({
            code: "617041",
            json: {
               code: selRecords[0].code
            }
        }).then(function () {
            sucList();
        });
    });
});