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
        type: "select",
        data: {
            '10': '电话回访通过/待补充资料',
            '12': '垫款复核不通过/财务复核不通过/财务待补充资料',
            '13': '已补充资料',
            '15': '财务待补充资料'
        },
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
            statusList: [10, 12, 13, 15]
        }
    });
    $("#add1Btn").on("click", function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "add_addedit.html?code=" + selRecords[0].code;
    });
});