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
        formatter: Dict.getNameForList('car_status'),
        key:'car_status',
        type: 'select',
        search: true
    }, {
        field: 'remark',
        title: '备注'
    }];

    buildList({
        router: 'record',
        columns: columns,
        pageCode: '617036'
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