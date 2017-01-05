$(function() {

    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: '',
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
        field: 'userName',
        title: '借款人',
        search: true
    }, {
        field: 'status',
        title: '状态',
        type: "select",
        data: {
            "9": "电话回访通过/待补充请款资料/财务复核不通过",
            '10': '已补充资料/待垫款复核'
        },
        search: true
    }, {
        field: 'remark',
        title: '备注',
        maxlength:255
    }];

    buildList({
        router: 'return',
        columns: columns,
        pageCode: '617003',
        searchParams: {
            statusList: [9, 10]
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