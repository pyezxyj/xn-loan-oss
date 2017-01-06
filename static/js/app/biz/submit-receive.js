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
        readonly: true,
    }, {
        title: '拟贷金额',
        field: 'loanAmount',
        readonly: true,
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
        readonly: true
    },{
        field: 'deliverCompany',
        title: '收件单位',
        readonly: true,
        type:'select'
    },{
    	field:'deliverer',
    	title:'收件人',
    	type:'select',
    	readonly:true
    },{
        field: 'deliverCompany',
        title: '寄件单位',
        type:'select',
        readonly: true
    },{
    	field:'deliverer',
    	title:'寄件人',
    	type:'select',
    	readonly: true,
    },{
        field: 'typeNote',
        title: '移交说明',
        readonly: true,
       
    },{
        field: 'logiCompany',
        title: '快递',
        type:'select',
        readonly: true,
       
    },{
        field: 'logiCode',
        title: '快递单号',
        readonly: true,
       
    },{
        field: 'deliverDatetime',
        title: '寄件时间',
        type: 'datetime',
        readonly: true,
        formatter: dateFormat
    },{
        field: 'deliverPdf',
        title: '快递单',
        type:'img',
        readonly: true
    }];

    buildDetail({
        fields: fields,
        code: code,
        editCode: '617061',
        detailCode: '617066'
    });

});