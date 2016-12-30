$(function() {

    var columns = [{
        field: '',
        title: '',
        checkbox: true
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
        field: 'mobile',
        title: '联系电话'
    }, {
        field: 'investigator',
        title: '调查人',
        listCode: "805055",
        keyName: "userId",
        type: "select",
        valueName: "loginName",
        params: {
            roleCode: "SR2016122515014423585"
        }
    }, {
        field: 'status',
        title: '状态',
        type: "select",
        data: {
            '1': '已通过/待分配',
            '2': '已分配/待回录',
            '3': '已回录/待资料录入/审查不通过'
        },
        search: true
    }, {
        field: 'remark',
        title: '备注'
    }];

    buildList({
        router: 'distribution',
        columns: columns,
        pageCode: '617003',
        searchParams: {
            statusList: [1, 2, 3]
        }
    });

    $("#backBtn").on("click", function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "distribution_back.html?code=" + selRecords[0].code;
    });
});