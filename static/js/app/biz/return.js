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
        field: 'mobile',
        title: '联系电话'
    }, {
        field: 'status',
        title: '状态',
        data: {
            '9': '直接通过/待电话回访',
            '10': '电话回访通过/待补充资料',
            '11': '电话回访不通过'
        },
        type: "select",
        search: true
    }, {
        field: 'remark',
        title: '备注'
    }];

    buildList({
        router: 'return',
        columns: columns,
        pageCode: '617003',
        searchParams: {
            statusList: [9, 10, 11]
        }
    });
    $("#returnBtn").on("click", function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "return_return.html?code=" + selRecords[0].code;
    });
});