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
        title: '拟贷金额',
        formatter: function(v) {
            return moneyFormat(+v);
        }
    }, {
        field: 'status',
        title: '状态',
        data: {
            '3': '已回录/待录入',
            '4': '已录入/待审查',
            '5': '审查通过',
            '6': '审查不通过',
            '7': '补充资料',
            '8': '调额通过/待电话回访',
            '9': '直接通过/待电话回访'
        },
        type: "select",
        search: true
    }, {
        field: 'remark',
        title: '备注'
    }];

    buildList({
        router: 'lending',
        columns: columns,
        pageCode: '617003',
        searchParams: {
            statusList: [3, 4, 5, 6, 7, 8, 9]
        }
    });

    // $("#checkBtn").on("click", function () {
    //     var selRecords = $('#tableList').bootstrapTable('getSelections');
    //     if (selRecords.length <= 0) {
    //         toastr.info("请选择记录");
    //         return;
    //     }
    //     window.location.href = "lending_check.html?code=" + selRecords[0].code;
    // });
    $("#optionsBtn").on("click", function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "lending_options.html?code=" + selRecords[0].code;
    });
    $("#approvalBtn").on("click", function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "lending_approval.html?code=" + selRecords[0].code;
    })
});