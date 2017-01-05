$(function() {
    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: '',
        title: '业务编号'
    }, {
        field: 'userName',
        title: '借款人',
        type:'select',
        search: true
    }, {
        field: 'loanType',
        title: '贷款品种',
        formatter: Dict.getNameForList('loan_type')
    }, {
        field: 'loanAmount',
        title: '垫款金额',
        formatter: function(v) {
            return moneyFormat(+v);
        }
    }, {
        field: 'status',
        title: '状态',
        data: {
            '13': '发保合已上传/待收款',
            '14': '已收款/结束'
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
            statusList: [13, 14]
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