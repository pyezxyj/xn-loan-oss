$(function() {
    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'code',
        title: '档案号'
    }, {
        field: 'realName',
        title: '借款人',
        type:'select',
        search: true
    },{
        field: '',
        title: '应还金额'
    },{
        field: '',
        title: '实还金额'
    }, {
        field: '',
        title: '逾期日期'
    },{
        field: '',
        title: '已发催款短信'
    },{
        field: 'status',
        title: '状态',
    },{
        field: 'remark',
        title: '备注',
        maxlength:255
    },];

    buildList({
        router: 'select',
        columns: columns,
//        searchParams: {
//            statusList: [0, 1, 2]
//        },
        pageCode: '617081',
    
    });

    $("#messageBtn").on("click", function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
       reqApi({
       code: "617072",
       json: {
          code: selRecords.code
       }
       }).then(function () {
       sucList();
		$('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
       });
    });
    
    $("#warnBtn").on("click", function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
       reqApi({
       code: "617073",
       json: {
          code: selRecords.code
       }
       }).then(function () {
       sucList();
		$('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
       });
    });
    
    $("#debtBtn").on("click", function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
       reqApi({
       code: "617074",
       json: {
          code: selRecords.code
       }
       }).then(function () {
       sucList();
		$('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
       });
    });
    
    
    
    
    
    
});