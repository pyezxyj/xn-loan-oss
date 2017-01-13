$(function () {
    var code = getQueryString('code');
    var view = !!getQueryString('v');
   
 
    var fields = [{
        title: "全称",
        field: "",
        type: '',
        readonly: view,
        required: true,
    }, {
        field: '',
        title: '简称',
        required: true,
        readonly: view
    }, {
        title: '法人代表',
        field: '',  
        required: true,
        readonly: view
    }, {
    	title: '地址',
		field: '',
		type:'citySelect',
	    required:true,
	    readonly:view
    }, {
    	title:"联系人",
		field:'',
		required:true,
	    readonly:view
    }, {
    	title:"联系方式",
		field:'',
		mobile:true,
		required:true,
	    readonly:view
    	
    },{
		title:"所属地区",
		field:'citySelect',
		required:true,
		type:'select',
	    readonly:view
	},{
		title: '',
        field: 'nn',
        type: 'o2m',
        editTable: true,
        addeditTable: true,
        readonly: view,
        requird:true,
        columns: [{
            field: '',
            title: '',
            checkbox: true
         }, {
        	field: '',
            title: '银行', 
            type: 'select',
            formatter: Dict.getNameForList('jb_bank'),
            key:'jb_bank',
            required:true,
    	    readonly:view
        }, {
        	title:'开户行',
        	field:'', 
        	required:true,
    	    readonly:view
        }, {
        	field: '',
            title: '户名',
            maxlength:32, 
        	required:true,
    	    readonly:view
        }, {
        	field: '',
            title: '账号',
            idCard:true, 
        	required:true,
    	    readonly:view
        }, {
        	field: '',
            title: '类型', 
        	required:true,
    	    readonly:view
        }, {
            field: 'status',
            title: '证信结果',
            readonly: view,
            required:true,
            type: 'select',
            key: 'audit_status'
        }]
    },{
    	title:'备注',
    	field:'remark',
    	maxlength:255
    }];

    var options = {
        fields: fields,
        code: code,
        detailCode: ''
    };

    options.buttons = [{
        title: '返回',
        handler: function () {
            goBack();
        }
    }];
    !view && options.buttons.unshift({
        title: '确认',
        handler: function () {
            if ($('#jsForm').valid()) {
                var data = $('#jsForm').serializeObject();
                for (var i = 0, len = fields.length; i < len; i++) {
                    var item = fields[i];
                    if (item.equal && (!$('#' + item.field).is(':hidden') || !$('#' + item.field + 'Img').is(':hidden'))) {
                        data[item.equal] = $('#' + item.field).val() || $('#' + item.field).attr('src');
                    } else if (item.emptyValue && !data[item.field]) {
                        data[item.field] = item.emptyValue;
                    }
                }
                data['id'] = data['code'];
                data["nn "] = $('# nn').bootstrapTable('getData');
                if (!data["nn "].length) {
                    toastr.info("账号信息不能为空");
                    return;
                }
                reqApi({
                    code: code,
                    json: data
                }).done(function () {
                    sucDetail();
                });
            }
        }
    });
    buildDetail(options);
});