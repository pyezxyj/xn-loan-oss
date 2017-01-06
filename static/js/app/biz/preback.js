$(function() {
    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
    	field:'updater',
    	title:'更新人',
    	type:'hidden',
    	required:true,
    },{
        field: 'code',
        title: '档案号',
        required:true
    }, {
        field: '',
        title: '借款人',
        type:'select',
        search: true
    },{
        field: '',
        title: '剩余欠款'
    },{
        field: '',
        title: '剩余期数'
    }, {
        field: '',
        title: '每期金额'
    },{
        field: 'remark',
        title: '备注',
        required:true,
        maxlength:255
    },];

    buildList({
        router: 'preback',
        columns: columns,
//        searchParams: {
//            statusList: [0, 1, 2]
//        },
        pageCode: '617075',
  
    });

    $("#prebackBtn").on("click", function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
       reqApi({
       code: "617075",
       json: {
          code: selRecords.code
       }
       }).then(function () {
       sucList();
		$('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
       });
    });
    
});