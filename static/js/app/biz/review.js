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
        title: '核定贷款金额',
        formatter: function(v) {
            return moneyFormat(+v);
        }
    }, {
        field: 'status',
        title: '状态',
        data: {
            '13': '已补充资料',
            '16': '待垫款复核',
            '17': '垫款复核不通过',
            '18': '垫款复核通过/代打款',
            '19': '已打款/代收款'
        },
        type: 'select',
        search: true
    }, {
        field: 'remark',
        title: '备注'
    }];

    buildList({
        router: 'review',
        columns: columns,
        pageCode: '617003',
        searchParams: {
            statusList: [13, 16, 17, 18, 19]
        }
    });
    $("#add1Btn").on("click", function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "review_addedit.html?code=" + selRecords[0].code;
    });
    $("#transferBtn").on("click", function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "review_transfer.html?code=" + selRecords[0].code;
    });
});