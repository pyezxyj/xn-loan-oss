$(function() {

    var columns = [{
        field : '',
        title : '',
        checkbox : true
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
        title : '拟贷金额',
        formatter: function(v) {
            return moneyFormat(+v);
        }
    }, {
        field : 'mobile',
        title : '联系电话'
    }, {
        field : 'investigator',
        title : '调查人',
        listCode: "805055",
        keyName: "userId",
        type: "select",
        valueName: "loginName",
        params: {
            roleCode: "SR2016122515014423585"
        },
        search: true
    },{
        field : 'credit_status',
        title : '状态',
        formatter: Dict.getNameForList('credit_status'),
        key: 'credit_status'
    }, {
        field : 'remark',
        title : '备注'
    }];

    buildList({
        router: 'distribution',
        columns: columns,
        pageCode: '617003'
    });

    $("#backBtn").on("click", function () {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "distribution_back.html?code=" + selRecords[0].code;
    });
});