$(function() {

    var code = getQueryString('code');

    var fields = [{
    	title:'审核人',
    	field:'approver',
    	type:'hidden'
    },{
    	field:'approveResult',
    	title:'状态',
    	formatter: Dict.getNameForList('check_status'),
    	key:'check_status,'
        required: true,
    },{
        title: '档案号',
        field: 'code',
        type:'select',
        required: true,
        
    },{
        title: '业务编号',
        field: 'creditOrderCode',
        required: true,
        
    },  {
        title: '贷款品种',
        field: 'loanType',
        formatter: Dict.getNameForList('loan_type'),
        key:'loan_type',
        required: true,
    }, {
        title: '拟贷金额',
        field: '',
        required: true,
    }, {
        field: 'realName',
        title: '借款人',
        required: true,
       
    }, {
        field: 'idNo',
        title: '证件号码',
        required: true,
        
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
        required: true
    },{
        field: 'deliverPdf',
        title: '快递单',
        type:'img',
        required: true
    },{
        field: 'copier',
        title: '抄写员',
        type:'select',
        required: true
    },{
    	field:'remark',
    	title:'备注',
    	maxlength:255
    }];

    var options = {
            fields: fields,
            code: code,
            detailCode: '617062'
        };

        options.buttons = [{
            title: '通过',
            handler: function() {
                var data = { "code": code };
                data["remark"] = $("#remark").val();
                data["approveResult"] = "1";
                reqApi({
                    code: "617062",
                    json: data
                }).done(function() {
                    sucDetail();
                });
            }
        }, {
            title: '不通过',
            handler: function() {
                var data = { "code": code };
                data["remark"] = $("#remark").val();
                data["approveResult"] = "0";
                reqApi({
                    code: "617062",
                    json: data
                }).done(function() {
                    sucDetail();
                });
            }
        }, {
            title: '返回',
            handler: function() {
                goBack();
            }
        }];

        buildDetail(options);
});