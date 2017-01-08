$(function() {

    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'code',
        title: '业务编号'
    }, {
        field: 'loanType',
        title: '贷款品种',
        formatter: Dict.getNameForList('loan_type')
    }, {
        field: 'loanAmount',
        title: '核定贷款金额',
        formatter: function(v) {
            return moneyFormat(+v);
        }
    },{
        field: 'realName',
        title: '借款人',
        search: true
    }, {
        field: 'status',
        title: '状态',
        data: {
            '10': '待垫款复核',
            '11': '复核通过，待打款',
            '15': '垫款不通过'
        },
        type: 'select',
        search: true
    }, {
        field: 'remark',
        title: '备注',
        maxlength:255
    }];

    buildList({
        router: 'review',
        columns: columns,
        pageCode: '617015',
        searchParams: {
            statusList: [10, 11, 15]
        }
    });
    $("#add1Btn").on("click", function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        var selRecord = selRecords[0];
        if(selRecord.status != "10"){
            toastr.info("该条记录不是待垫款复核状态");
            return;
        }
        window.location.href = "review_addedit.html?code=" + selRecord.code;
    });
    $("#transferBtn").on("click", function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        var selRecord = selRecords[0];
        if(selRecord.status != "11"){
            toastr.info("该条记录不是待打款回录状态");
            return;
        }
        window.location.href = "review_transfer.html?code=" + selRecords[0].code;
    });
});
