$(function() {
    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: '',
        title: '经办银行',
        type:"select",
        search: true,
        required:true,
    },  {
        field: '',
        title: '借款人',
        search: true
    }, {
        field: '',
        title: '还款金额'
    },{
        field: '',
        title: '还款时间'
    }, {
        field: '',
        title: '备注',
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