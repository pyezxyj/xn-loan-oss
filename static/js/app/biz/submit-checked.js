$(function() {

    var code = getQueryString('code');
    var  creditOrderCode=getQueryString('code1');
    var  loanTypeDict=Dict.getNameForList('loan_type');
    var data={};
    
    reqApi({
    	code:"617016",
    	json:{"code":creditOrderCode},
        sync:true
    }).done(function(data1){
    	data=data1;
    });

    var fields = [{
    	field: 'approver',
    	type: 'hidden',
    	value: sessionStorage.getItem('userName')
    }, {
        title: '档案号',
        field: 'creditOrderCode',
        readonly: true
    },{
        title: '业务编号',
        field: 'creditOrderCode1',
        '[value]': 'creditOrderCode',
        readonly: true
    },  {
        title: '贷款品种',
        field: 'loanType',
        afterSet:function(){
        	$("#loanType").html( loanTypeDict( data.loanType ) );
        },
        readonly:true
    }, {
        title: '拟贷金额',
        field: 'loanAmount',
        afterSet:function(){
        	$("#loanAmount").html( moneyFormat(data.loanAmount) );
        },
        readonly:true
    }, {
        field: 'realName',
        title: '借款人',
        afterSet:function(){
        	$("#realName").html(data.realName);
        },
        readonly:true
    }, {
        field: 'idNo',
        title: '证件号码',
        afterSet:function(){
        	$('#idNo').html(data.idNo);
        },
        readonly:true
    }, {
        field: 'type',
        title: '交接事件',
        key:"jiao_event",
        formatter: Dict.getNameForList('jiao_event'),
        readonly: true
    },{
        field: 'receiveCompany',
        title: '收件单位',
        key:"receive_company",
        formatter: Dict.getNameForList('receive_company'),
        readonly: true
    },{
    	field:'receiver',
    	title:'收件人',
    	readonly:true
    },{
        field: 'deliverCompany',
        title: '寄件单位',
        key:"deli_company",
        formatter: Dict.getNameForList('deli_company'),
        readonly: true
    },{
    	field:'deliverer',
    	title:'寄件人',
    	readonly: true
    },{
        field: 'typeNote',
        title: '移交说明',
        readonly: true
       
    },{
        field: 'logiCompany',
        title: '快递',
        key:"wl_company",
        formatter: Dict.getNameForList('wl_company'),
        readonly: true
       
    },{
        field: 'logiCode',
        title: '快递单号',
        readonly: true
    },{
        field: 'deliverDatetime',
        title: '寄件时间',
        type: 'date',
        readonly: true,
        formatter: dateFormat
    },{
        field: 'deliverPdf',
        title: '快递单',
        type:'img',
        readonly: true
    },{
        title: '抄写员',
        field: 'copier',
        required: true,
        type: 'select',
        data: {},
        afterSet: function (v) {
            var province = data.province;
            var city = data.city;
            var area = data.area;
            var dcUser = $('#copier');
            if(!province){
                dcUser.renderDropdown2({});
                return;
            }
            dcUser.renderDropdown({
                listCode: "805060",
                params: {
                    roleCode: "SR2017010713402529122",
                    status: "0",
                    province: province,
                    city: city,
                    area: area
                },
                keyName: "userId",
                valueName: "loginName"
            });
        }
    },{
    	field:'approveNote',
    	title:'备注',
    	maxlength:255
    }];

    var options = {
            fields: fields,
            code: code,
            detailCode: '617066'
        };

        options.buttons = [{
            title: '通过',
            handler: function() {
            	if ($('#jsForm').valid()) {
                    var data = $('#jsForm').serializeObject();
	                data["approveResult"] = "1";
	                reqApi({
	                    code: "617062",
	                    json: data
	                }).done(function() {
	                    sucDetail();
	                });
            	}
            }
        }, {
            title: '不通过',
            handler: function() {
            	if ($('#jsForm').valid()) {
                    var data = $('#jsForm').serializeObject();
	                data["approveResult"] = "0";
	                reqApi({
	                    code: "617062",
	                    json: data
	                }).done(function() {
	                    sucDetail();
	                });
            	}
            }
        }, {
            title: '返回',
            handler: function() {
                goBack();
            }
        }];

        buildDetail(options);
});