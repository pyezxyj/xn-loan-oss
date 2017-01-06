$(function() {
    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
    	field:'code',
    	title:'编号',
    	type:'hidden',
    },{
        field: '',
        title: '户名',
        formatter: Dict.getNameForList(''),
        key: '',
        type:'select',
        search:true,
        required:true
    }, {
        field: 'bank',
        title: '开户银行'
    },{
        field: 'branch',
        title: '支行'
    },  {
        field: 'cardNo',
        title: '卡号'
    }, {
        field: 'remark',
        title: '备注',
        maxlength:255
       
    }];

    buildList({
        router: 'card',
        columns: columns,
        pageCode: '617076'
    });
    
    $("#changeBtn").on("click", function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
       reqApi({
       code: "617076",
       json: {
          code: selRecords.code
       }
       }).then(function () {
       sucList();
		$('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
       });
    });
    

});