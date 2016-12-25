$(function () {
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
        type: 'select',
        search: true
    }, {
        field: 'loanType',
        title: '贷款品种',
        formatter: Dict.getNameForList('loan_type'),
        type: 'select',
        key: 'loan_type'
    }, {
        field: 'car',
        title: '车行',
        formatter: Dict.getNameForList('car_type'),
        key:"car_type"
    }, {
        title: '业务员',
        field: 'salesman',
        type: 'select',
        listCode: "805055",
        keyName: "userId",
        valueName: "loginName",
        params: {
            roleCode: "SR2016122515012575166"
        }
    }, {
        field: 'status',
        title: '状态',
        formatter: Dict.getNameForList('credit_status'),
        search: true,
        key: 'credit_status',
        type: "select"
    }, {
        field: 'downloadTimes',
        title: '下载次数'
    }];

    buildList({
        router: 'manage',
        columns: columns,
        pageCode: '617003'
    });
    $("#add1Btn").on("click", function () {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "manage_addedit.html?code=" + selRecords[0].code+"&add=1";
    });
});