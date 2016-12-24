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
        formatter: Dict.getNameForList('credit_status'),
        type: 'select',
        key: 'loan_type'
    }, {
        field: 'car',
        title: '车行',
        formatter: Dict.getNameForList('car_type'),
        key:"car_type"
    }, {
        field: 'saleman',
        title: '业务员',
        type: "select",
        listCode: "805056",
        keyName: "userId",
        valueName: "loginName"
    },
    {
        field: 'status',
        title: '状态',
        formatter: Dict.getNameForList('role_level'),
        search: true,
    },
    {
        field: '',
        title: '下载次数'
    }
    ];

    buildList({
        router: 'manage',
        columns: columns,
        pageCode: '617003'
    });
//    $('#changeBtn').click(function () {
//        var selRecords = $('#tableList').bootstrapTable('getSelections');
//        if (selRecords.length <= 0) {
//            toastr.info("请选择记录");
//            return;
//        }
//        window.location.href = "manage.html?code=" + selRecords[0].code + "&name=" + encodeURI(encodeURI(selRecords[0].name));
//    });
});