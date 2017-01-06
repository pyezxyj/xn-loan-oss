$(function() {

    var code = getQueryString('code');

    var fields = [{
        title: '经办银行',
        field: '',
        type:"select",
        required:true
    }, {
        title: '数据源',
        field: '',
        type:'img',
        required:true
   }, 
       // {
//        title: '备注',
//        field: 'remark',
//        required:true,
//        maxLength: 255
//    }
    ];

    buildDetail({
        fields: fields,
        code: code,
        detailCode: '',
        addCode: '',
        editCode: ''
    });
    
    
    
    

});