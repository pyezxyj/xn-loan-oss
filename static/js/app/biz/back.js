$(function() {
    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'code',
        title: '档案号'
    }, {
        field: 'userName',
        title: '借款人',
        search: true
    }, {
        field: 'loanType',
        title: '贷款品种',
        formatter: Dict.getNameForList('loan_type')
    }, {
        field: 'loanAmount',
        title: '贷款金额',
        formatter: function(v) {
            return moneyFormat(+v);
        }
    }, {
        field: 'status',
        title: '状态',
        data: {
            '22': '发保合已上传',
            '19': '已打款/代收款',
            '20': '已收款'
        },
        search: true,
        type: 'select',
    }, {
        title: '经办银行',
        field: 'jbBank',
        formatter: Dict.getNameForList('jb_bank')
    }, {
        field: 'receiptAmount',
        title: '收款金额',
        formatter: function(v) {
            return moneyFormat(+v);
        }
    }, {
        field: 'receiptDatetime',
        title: '收款时间',
        formatter: dateTimeFormat
    }];

    buildList({
        router: 'back',
        columns: columns,
        pageCode: '617003',
        searchParams: {
            statusList: [19, 20, 22]
        }
    });
    $("#add1Btn").on("click", function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "back_addedit.html?code=" + selRecords[0].code;
    });
});