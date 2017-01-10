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
        formatter: moneyFormat
    }, {
        field: 'realName',
        title: '借款人',
        search: true
    }, {
        field: 'mobile',
        title: '联系电话'
    }, {
        field: 'status',
        title: '状态',
        data: {
            '9': '待电话回访'
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
        pageCode: '617015',
        searchParams: {
            statusList: [9]
        }
    });
    $("#returnBtn").on("click", function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        var selRecord = selRecords[0];
        if(selRecord.status != "9"){
            toastr.info("该条记录不是待电话回访状态");
            return;
        }
        window.location.href = "return_return.html?code=" + selRecord.code;
    });
});