$(function() {

    var code = getQueryString('code');
    var creditOrderCode = getQueryString('code1');
    var loanTypeDict = Dict.getNameForList('loan_type');
    var data = {};
    reqApi({
    	code: '617016',
    	json: {
    		'code': creditOrderCode
    	},
    	sync: true
    }).done(function(data1){
    	data = data1;
    })

    var fields = [{
        title: '档案号',
        field: 'creditOrderCode',
        readonly: true,
        afterSet: function(){
        	$("#creditOrderCode").html(creditOrderCode);
        }
    },{
        title: '业务编号',
        field: 'creditOrderCode1',
        readonly: true,
        afterSet: function(){
        	$("#creditOrderCode1").html(creditOrderCode);
        }
    },  {
        title: '贷款品种',
        field: 'loanType',
        afterSet: function(){
        	$("#loanType").html( loanTypeDict( data.loanType ) );
        },
        readonly:true
    }, {
        title: '拟贷金额',
        field: 'loanAmount',      		
        afterSet: function(){
        	$("#loanAmount").html( moneyFormat(data.loanAmount) );
        },
        readonly:true
    }, {
        field: 'realName',
        title: '借款人',
        afterSet:function(){
        	$("#realName").html( data.realName );
        },
        readonly:true
    }, {
        field: 'idNo',
        title: '证件号码',
        afterSet:function(){
        	$("#idNo").html(data.idNo);
        },
        readonly:true
    }, {
        field: 'type',
        title: '交接事件',
        formatter: Dict.getNameForList('jiao_event'),
        key:"jiao_event",
        type:'select',
        readonly: true
    },{
        field: 'receiveCompany',
        title: '收件单位',
        formatter: Dict.getNameForList('receive_company'),
        key:"receive_company",
        readonly: true,
        type:'select'
    },{
    	field:'receiver',
    	title:'收件人',
    	readonly:true
    },{
        field: 'deliverCompany',
        title: '寄件单位', 
        formatter: Dict.getNameForList('deli_company'),
        key:"deli_company",
        type:'select',
        readonly: true
    },{
    	field:'deliverer',
    	title:'寄件人',
    	readonly: true,
    },{
        field: 'typeNote',
        title: '移交说明',
        readonly: true,
       
    },{
        field: 'logiCompany',
        title: '快递',
        type:'select',
        formatter: Dict.getNameForList('wl_company'),
        key:"wl_company",
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