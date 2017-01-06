$(function() {
    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'creditOrderCode',
        title: '档案号',
        search:true,
        type:'select'
    }, {
        field: 'type',
        title: '交接事件',
    },{
        field: 'deliverer',
        title: '收件人'
    },{
        field: 'logiCompany',
        title: '快递公司'
    }, {
        field: 'logiCode',
        title: '单号'
    },{
        field: 'status',
        title: '状态',
        formatter: Dict.getNameForList('express_status'),
        key:'express_status',
        search:true,
        type:'select'
    },{
        field: 'remark',
        title: '备注',
        maxlength:255
    },];

    buildList({
        router: 'submit',
        columns: columns,
        pageCode: '617065',

    });

     $("#moveBtn").on("click", function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
         if (selRecords.length <= 0) {
             toastr.info("请选择记录");
             return;
         }
         window.location.href = "submit_addedit.html?code=" + selRecords[0].code;
     });
     $("#checkedBtn").on("click", function() {
         var selRecords = $('#tableList').bootstrapTable('getSelections');
          if (selRecords.length <= 0) {
              toastr.info("请选择记录");
              return;
          }
          window.location.href = "submit_checked.html?code=" + selRecords[0].code;
      });
});