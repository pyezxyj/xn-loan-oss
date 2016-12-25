$(function() {

    var columns = [{
        field : '',
        title : '',
        checkbox : true
    }, {
        field : 'code',
        title : '档案号'
    }, {
        field : 'userName',
        title : '借款人',
        search: true
    }, {
        field : 'loanType',
        title : '贷款品种',
        formatter: Dict.getNameForList('loan_type')
    }, {
        field : 'loanAmount',
        title : '核定贷款金额',
        formatter: function(v) {
            return moneyFormat(+v);
        }
    }, {
        field : 'mobile',
        title : '联系电话'
    }, {
        field : 'credit_status',
        title : '状态',
        formatter: Dict.getNameForList('credit_status'),
        key: 'credit_status',
        type: "select"
    }, {
        field : 'remark',
        title : '备注'
    }];

    buildList({
        router: 'return',
        columns: columns,
        pageCode: '617003'
    });
    $("#returnBtn").on("click", function () {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "return_return.html?code=" + selRecords[0].code;
    });
});