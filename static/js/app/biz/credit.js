$(function() {
    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: '',
        title: '业务编号',
        formatter: Dict.getNameForList(''),
        key: ''
    }, {
        field: '',
        title: '贷款品种'
    },{
        field: '',
        title: '拟贷金额'
    },  {
        field: '',
        title: '借款人',
        search: true
    }, {
        field: 'status',
        title: '资信结果',
        data: {
            '0': '待审核',
            '1': '审核通过',
            '2': '审核不通过'
        },
        type: "select",
        search: true
    }];

    buildList({
        router: 'credit',
        columns: columns,
        searchParams: {
            statusList: [0, 1, 2]
        },
        pageCode: '617004',
        deleteCode: '617001'
    });

    $("#researchBtn").on("click", function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "credit_research.html?code=" + selRecords[0].code;
    });
});