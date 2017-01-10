$(function() {
    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'code',
        title: '业务编号'
    }, {
        field: 'realName',
        title: '借款人',
        search: true
    }, {
        field: 'loanType',
        title: '贷款品种',
        formatter: Dict.getNameForList('loan_type')
    }, {
        field: 'loanAmount',
        title: '垫款金额',
        formatter: moneyFormat
    }, {
        field: 'status',
        title: '状态',
        data: {
            '13': '待收款',
            '14': '已收款'
        },
        search: true,
        type: 'select'
    }, {
        title: '经办银行',
        field: 'jbBank',
        formatter: Dict.getNameForList('jb_bank')
    }, {
        field: 'skAmount',
        title: '收款金额',
        formatter: moneyFormat
    }, {
        field: 'skDatetime',
        title: '收款时间',
        formatter: dateFormat
    }];

    buildList({
        router: 'back',
        columns: columns,
        pageCode: '617015',
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
        var selRecord = selRecords[0];
        if(selRecord.status != "13"){
            toastr.info("该条记录不是待收款状态");
            return;
        }
        window.location.href = "back_addedit.html?code=" + selRecords[0].code;
    });
});