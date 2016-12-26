$(function() {
    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'loanType',
        title: '贷款品种',
        formatter: Dict.getNameForList('loan_type'),
        key: 'loan_type'
    }, {
        field: 'loanAmount',
        title: '拟贷金额',
        formatter: function(v) {
            return moneyFormat(+v);
        }
    }, {
        field: 'userName',
        title: '姓名',
        search: true
    }, {
        field: 'relation',
        title: '关系',
        type: 'select',
        formatter: Dict.getNameForList('relation'),
        key: 'relation',
        search: true
    }, {
        field: 'status',
        title: '资信结果',
        // formatter: Dict.getNameForList('audit_status'),
        // key: 'audit_status',
        data: {
            '0': '待审核',
            '1': '审核通过',
            '2': '审核不通过'
        },
        type: "select",
        search: true
    }];

    buildList({
        router: 'credit',
        columns: columns,
        searchParams: {
            statusList: [0, 1, 2]
        },
        pageCode: '617004',
        deleteCode: '617001'
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