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
        field: 'realName',
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
        pageCode: '617083'
  
    });

    $("#prebackBtn").on("click", function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "preback_addedit.html?code=" + selRecords[0].code;
    });
    
});