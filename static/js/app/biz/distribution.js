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
        title: '拟贷金额',
        formatter: function(v) {
            return moneyFormat(+v);
        }
    },{
        field: 'realName',
        title: '借款人',
        search: true
    }, {
        field: 'dcUser',
        title: '调查人',
        listCode: "805055",
        keyName: "userId",
        type: "select",
        valueName: "loginName",
        params: {
            roleCode: "SR2016122515014423585",
            status: '0'
        }
    }, {
        field: 'status',
        title: '状态',
        type: "select",
        data: {
            '1': '待分配',
            '2': '待回录'
        },
        search: true
    }, {
        field: 'remark',
        title: '备注'
    }];
    buildList({
        router: 'distribution',
        columns: columns,
        pageCode: '617015',
        searchParams: {
            statusList: [1, 2]
        }
    });
    $("#edit1Btn").on("click", function () {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        var selRecord = selRecords[0];
        if(selRecord.status != "1"){
            toastr.info("该条记录不是待分配状态");
            return;
        }
        window.location.href = "distribution_addedit.html?code=" + selRecord.code;
    });
    $("#backBtn").on("click", function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        var selRecord = selRecords[0];
        if(selRecord.status != "2"){
            toastr.info("该条记录不是待回录状态");
            return;
        }
        window.location.href = "distribution_back.html?code=" + selRecords[0].code;
    });
});