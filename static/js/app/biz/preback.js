$(function() {
    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'creditOrderCode',
        title: '档案号',
        required:true
    }, {
        field: 'realName',
        title: '借款人',
        search: true
    },{
        field: 'totalAmount',
        title: '剩余欠款',
        formatter:moneyFormat
    },{
        field: 'totalTerm',
        title: '剩余期数'
    }, {
        field: 'yhAmount',
        title: '每期金额',
        formatter:moneyFormat
    },{
        field: 'remark',
        title: '备注',
        required:true,
        maxlength:255
    }];

    buildList({
        router: 'preback',
        columns: columns,
        pageCode: '617085',
        searchParams: {
            status: "6"
        }
    });

    $("#prebackBtn").on("click", function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "preback_addedit.html?code=" + selRecords[0].code;
    });
    
});