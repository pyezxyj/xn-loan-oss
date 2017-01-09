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
    },{
        field: 'loanAmount',
        title: '拟贷金额',
        formatter: function(v) {
            return moneyFormat(+v);
        }
    }, {
        field: 'realName',
        title: '借款人',
        search: true
    },  {
        field: 'status',
        title: '状态',
        data: {
            '3': '待资料录入',
            '4': '待合规审查',
            '5': '合规审查不通过',
            '6': '待额度审批',
            '7': '待补充资料',
            '17': '直接否决'
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
        pageCode: '617015',
        searchParams: {
            statusList: [3, 4, 5, 6, 7, 17]
        }
    });
    $("#edit1Btn").on("click", function () {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        var selRecord = selRecords[0];
        if(selRecord.status != "3" && selRecord.status != "5"){
            toastr.info("该条记录的状态无法资料录入");
            return;
        }
        window.location.href = "lending_addedit.html?code=" + selRecord.code;
    });
    $("#check1Btn").on("click", function () {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        var selRecord = selRecords[0];
        if(selRecord.status != "4"){
            toastr.info("该条记录不是待合规审查状态");
            return;
        }
        window.location.href = "lending_check.html?code=" + selRecord.code;
    });
    $("#approvalBtn").on("click", function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        var selRecord = selRecords[0];
        if(selRecord.status != "6"){
            toastr.info("该条记录不是待额度审批状态");
            return;
        }
        window.location.href = "lending_approval.html?code=" + selRecord.code;
    });
    $("#optionsBtn").on("click", function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        var selRecord = selRecords[0];
        if(selRecord.status != "7"){
            toastr.info("该条记录不是待补充资料状态");
            return;
        }
        window.location.href = "lending_options.html?code=" + selRecord.code;
    });
});