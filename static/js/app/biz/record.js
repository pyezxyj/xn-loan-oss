$(function() {

    var columns = [{
        field: '',
        title: '',
        checkbox: true
    },{
        field: 'creditOrderCode',
        title: '业务编号',
        search:true
    }, {
        field: 'brand',
        title: '抵押物'
    }, {
        field: 'dyStartDatetime',
        title: '抵押时间',
        formatter: dateFormat
    },{
        field: 'dyEndDatetime',
        title: '抵押到期',
        formatter: dateFormat
    }, {
        field: 'status',
        title: '状态',
        data: {
            '3': '待录入',
            '1': '待释放',
            '2': '已释放'
        },
        type: "select",
        search: true
    }, {
        field: 'remark',
        title: '备注',
        maxlength:255
    }];

    buildList({
        router: 'record',
        columns: columns,
        pageCode: '617036',
        searchParams: {
            statusList: [1, 2, 3]
        }
    });
    $("#edit1Btn").on("click", function () {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        var selRecord = selRecords[0];
        if(selRecord.status != "3"){
            toastr.info("该条记录不是待录入状态");
            return;
        }
        window.location.href = "record_addedit.html?code=" + selRecord.code;
    });
    $("#releaseBtn").on("click", function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        var selRecord = selRecords[0];
        if(selRecord.status != "1"){
            toastr.info("该条记录不是待释放状态");
            return;
        }
        window.location.href = "record_release.html?code=" + selRecord.code;
    });
   
});