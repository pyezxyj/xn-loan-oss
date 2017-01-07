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
        formatter: Dict.getNameForList('loan_type'),
        key: 'loan_type'
    },{
        field: 'loanAmount',
        title: '拟贷金额',
        amount: true
    },  {
        field: 'realName',
        title: '借款人',
        search: true
    }, {
        field: 'status',
        title: '资信结果',
        data: {
            '0': '待审核',
            '16': '不通过'
        },
        type: "select",
        search: true
    }];

    buildList({
        router: 'credit',
        columns: columns,
        searchParams: {
            statusList: [0, 16]
        },
        pageCode: '617015'
    });

    $("#researchBtn").on("click", function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "credit_research.html?code=" + selRecords[0].code;
    });
});