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
            statusList: [1, 2]
        }
    });
    $("#releaseBtn").on("click", function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "record_release.html?code=" + selRecords[0].code;
    });
   
});