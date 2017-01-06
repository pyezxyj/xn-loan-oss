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
    }, {
        field: 'realName',
        title: '借款人',
        search: true
    }, {
        field: 'status',
        title: '状态',
        type: "select",
        data: {
            "8": "待补充请款资料"
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
            statusList: [8]
        }
    });
    $("#add1Btn").on("click", function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        var selRecord = selRecords[0];
        if(selRecord.status != "8"){
            toastr.info("该条记录不是待补充请款资料状态");
            return;
        }
        window.location.href = "add_addedit.html?code=" + selRecord.code;
    });
});