$(function () {
    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'creditOrderCode',
        title: '档案号'
    }, {
        field: 'realName',
        title: '借款人',
        search: true
    }, {
        field: 'yhAmount',
        title: '应还金额',
        amount: true
    }, {
        field: 'shAmount',
        title: '实还金额',
        amount: true
    }, {
        field: 'overAmount',
        title: '逾期金额',
        formatter: moneyFormat
    }, {
        field: 'smsCount',
        title: '已发催款短信'
    }, {
        field: 'status',
        title: '状态',
        formatter: Dict.getNameForList('repay_status')
    }, {
        field: 'remark',
        title: '备注',
        maxlength: 255
    }];

    buildList({
        router: 'select',
        columns: columns,
        pageCode: '617081',
        searchParams: {
            statusList: ["3", "4", "5"]
        }
    });

    $("#messageBtn").on("click", function () {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        confirm("确认发送短信催款？").then(function() {
            reqApi({
                code: "617072",
                json: {
                    code: selRecords[0].code
                }
            }).then(function () {
                sucList();
            });
        });
    });

    $("#warnBtn").on("click", function () {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        confirm("确认起诉" + selRecords[0].realName + "？").then(function() {
            reqApi({
                code: "617073",
                json: {
                    code: selRecords[0].code
                }
            }).then(function () {
                sucList();
            });
        });
    });

    $("#debtBtn").on("click", function () {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        confirm("确认" + selRecords[0].realName + "已还欠款？").then(function() {
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


});