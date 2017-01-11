$(function () {
    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'creditOrderCode',
        title: '档案号',
        search: true
    }, {
        field: 'type',
        title: '交接事件',
        formatter: Dict.getNameForList('jiao_event'),
        key: "jiao_event"
    }, {
        field: 'deliverer',
        title: '收件人'
    }, {
        field: 'logiCompany',
        formatter: Dict.getNameForList('wl_company'),
        key: "wl_company",
        title: '快递公司'
    }, {
        field: 'logiCode',
        title: '单号'
    }, {
        field: 'status',
        title: '状态',
        formatter: Dict.getNameForList('express_status'),
        key: 'express_status',
        search: true,
        type: 'select'
    }, {
        field: 'remark',
        title: '备注',
        maxlength: 255
    }];

    buildList({
        router: 'submit',
        columns: columns,
        pageCode: '617065'
    });

    $("#receiveBtn").on("click", function () {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "submit_receive.html?code=" + selRecords[0].code + "&code1=" + selRecords[0].creditOrderCode;
    });
    $("#checkedBtn").on("click", function () {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "submit_checked.html?code=" + selRecords[0].code + "&code1=" + selRecords[0].creditOrderCode;
    });
});