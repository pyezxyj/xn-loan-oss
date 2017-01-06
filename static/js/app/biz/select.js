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
        field: 'yhAmount',
        title: '应还金额'
    },{
        field: 'shAmount',
        title: '实还金额'
    }, {
        field: 'overDays',
        title: '逾期天数'
    },{
        field: 'smsCount',
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
        pageCode: '617081'
    
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
	          code: selRecords[0].code
	       }
       }).then(function () {
    	   sucList();
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
	          code: selRecords[0].code
	       }
       }).then(function () {
    	   sucList();
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
	          code: selRecords[0].code
	       }
       }).then(function () {
    	   sucList();
       });
    });
    
    
    
    
    
    
});