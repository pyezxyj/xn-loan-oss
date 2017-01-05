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
        type:"select",
        search: true
    }, {
        field: 'mobile',
        title: '联系电话'
    }, {
        field: 'status',
        title: '状态',
        data: {
            '7': '调额通过/待电话回访',
            '8': '直接通过/待电话回访',
            '9': '电话回访通过/待补充请款资料/财务复核不通过'
        },
        type: "select",
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
            statusList: [7, 8, 9]
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