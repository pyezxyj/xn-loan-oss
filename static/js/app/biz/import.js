$(function() {
    var columns = [{
        field: '',
        title: '',
        checkbox: true
    },  {
        field: 'code',
        title: '档案号'
    },{
        field: 'realName',
        title: '借款人'
    }, {
        field: 'idNo',
        title: '身份证号'
    }, {
        field: 'jbBank',
        title: '经办银行',
        type:"select",
        search: true,
        key: 'jb_bank',
        formatter: Dict.getNameForList('jb_bank'),
        required:true,
    },  {
        field: 'yhDatetime',
        title: '应还时间',
        formatter: dateFormat
    },{
        field: 'yhAmount',
        title: '应还金额',
        formatter: moneyFormat
    }, {
        field: 'shDatetime',
        title: '实还时间',
        formatter: dateFormat
    }, {
        field: 'shAmount',
        title: '实还金额',
        formatter: moneyFormat
    }, {
        field: 'remark',
        title: '备注',
        maxlength:255
    }];

    buildList({
        router: 'import',
        columns: columns,
        pageCode: '617083'
    });
   
    $("#compareBtn").on("click", function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        reqApi({
            code: "617071",
            json: {
               code: selRecords[0].code
            }
        }).then(function () {
            sucList();
        });
    });
    
    
});