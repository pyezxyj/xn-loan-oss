$(function() {
    var columns = [{
        field: '',
        title: '',
        checkbox: true
    },  {
        field: '',
        title: '档案号'
    },{
        field: 'realName',
        title: '借款人'
    }, {
        field: 'idNo',
        title: '身份证号'
    }, {
        field: '',
        title: '经办银行',
        type:"select",
        search: true,
        required:true,
    },  {
        field: '',
        title: '应还时间'
    },{
        field: '',
        title: '应还金额'
    }, {
        field: '',
        title: '实还时间'
    }, {
        field: '',
        title: '实还金额'
    }, {
        field: 'remark',
        title: '备注',
        maxlength:255
    }];

    buildList({
        router: 'import',
        columns: columns,
//        searchParams: {
//            statusList: [0, 1, 2]
//        },
        pageCode: '617070',
   
    });
   
    $("#compareBtn").on("click", function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        reqApi({
            code: "617071",
            json: {
               code: selRecords.code
            }
            }).then(function () {
            sucList();
			$('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
            });
    });
    
    
});