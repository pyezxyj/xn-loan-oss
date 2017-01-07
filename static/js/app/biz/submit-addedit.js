$(function() {

    var code = getQueryString('code');

    var fields = [{
        title: '档案号',
        field: 'code',
        type:'select',
        required: true,
        
    },{
        title: '业务编号',
        field: 'creditOrderCode',
        readonly: true
    },  {
        title: '贷款品种',
        field: 'loanType',
        formatter: Dict.getNameForList('loan_type'),
        key:"loan_type",
        readonly: true,
    }, {
        title: '拟贷金额',
        field: 'loanAmount',
        readonly: true,
        formatter: moneyFormat,
    }, {
        field: 'realName',
        title: '借款人',
        readonly: true,
       
    }, {
        field: 'idNo',
        title: '证件号码',
        readonly: true,
       
    }, {
        field: 'type',
        title: '交接事件',
        type:'select',
        required: true,
        
    },{
        field: 'deliverCompany',
        title: '收件单位',
        required: true,
        type:'select',
      
    },{
    	field:'deliverer',
    	title:'收件人',
    	type:'select',
    	required:true
    },{
        field: 'deliverCompany',
        title: '寄件单位',
        type:'select',
        required: true
    },{
    	field:'deliverer',
    	title:'寄件人',
    	type:'select',
        required: true,
    },{
        field: 'typeNote',
        title: '移交说明',
        required: true,
       
    },{
        field: 'logiCompany',
        title: '快递',
        type:'select',
        required: true,
       
    },{
        field: 'logiCode',
        title: '快递单号',
        required: true,
       
    },{
        field: 'deliverDatetime',
        title: '寄件时间',
        type: 'datetime',
        required: true,
      
    },{
        field: 'deliverPdf',
        title: '快递单',
        type:'img',
        required: true
    }];

    buildDetail({
        fields: fields,
        code: code,
        editCode: '617060',
        detailCode: '617066'
    });

});