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
        formatter: Dict.getNameForList('loan_type'),
        type: 'select',
        key: 'loan_type'
    }, {
        field: 'car',
        title: '车行',
        formatter: Dict.getNameForList('car_type'),
        key: "car_type"
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
        data: {
            '19': '已打款/代收款',
            '21': '发保合未上传',
            '22': '发保合已上传'
        },
        search: true,
        type: "select"
    }, {
        field: 'downloadTimes',
        title: '下载次数'
    }];

    buildList({
        router: 'manage',
        columns: columns,
        pageCode: '617003',
        searchParams: {
            statusList: [19, 21, 22]
        }
    });
    $("#add1Btn").on("click", function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "manage_addedit.html?code=" + selRecords[0].code + "&add=1";
    });
});