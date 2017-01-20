$(function () {
    var code = getQueryString('code');
    var view = !!getQueryString('v');
   
 
    var fields = [{
        title: "全称",
        field: "benelux",
        maxlength:32,
        readonly: view,
        required: true,
    }, {
        field: 'abbreviation',
        title: '简称',
        required: true,
        maxlength:32,
        readonly: view
    }, {
        title: '法人代表',
        field: 'corporation',  
        required: true,
        maxlength:32,
        readonly: view
    }, {
    	title: '地址',
		field: 'province',
		type:'citySelect',
		formatter: function (v, data) {
          var result = ( data.province || "" ) + ( data.city || "" ) + ( data.area || "" );
          return result || "-";
         },
//		afterSet: function (v, data) {
//          if (view) {
//              $('#province').html(data.province);
//              data.city && $('#city').html(data.city);
//              data.area && $('#area').html(data.area);
//              }
//        },
	    required:true,
	    readonly:view,
    }, {
    	title:"详细地址",
    	field:'address',
    	maxlength:32,
    	required:true,
	    readonly:view,
    },{
    	title:"联系人",
		field:'name',
		required:true,
		maxlength:32,
	    readonly:view
    }, {
    	title:"联系方式",
		field:'contacts',
		mobile:true,
		required:true,
	    readonly:view
    	
    },{
		title:"所属地区",
		field:'district',
		required:true,
		listCode:'617127',
        params: {
			type: "1"
		},
		keyName:"code",
		valueName:'{{county.DATA}}',
		type:'select',
	    readonly:view
	},{
		title: '',
        field: 'bankList',
        type: 'o2m',
        editTable: true,
        addeditTable: true,
        readonly: view,
        required:true,
        columns: [{
            field: '',
            title: '',
            checkbox: true
         }, {
        	field: 'bank',
            title: '银行', 
            maxlength:32,
            required:true,
    	    readonly:view
        }, {
        	title:'开户行',
        	field:'branch', 
        	maxlength:32,
        	required:true,
    	    readonly:view
        }, {
        	field: 'accountName',
            title: '户名',
            maxlength:32, 
        	required:true,
    	    readonly:view
        }, {
        	field: 'account',
            title: '账号',
            bankCard:true, 
        	required:true,
    	    readonly:view
        }, {
        	field: 'type',
            title: '类型', 
            type:"select",
            key:"zh_type",
            formatter:Dict.getNameForList("zh_type"),
        	required:true,
    	    readonly:view
        }]
    },{
    	title:'备注',
    	field:'remark',
    	maxlength:255
    }];

    var options = {
        fields: fields,
        code: code,
        addCode:"617100",
        detailCode:"617106",
        editCode:"617102",   
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
                data["bankList"] = $('#bankListList').bootstrapTable('getData');
                if (!data["bankList"].length) {
                    toastr.info("银行账户信息不能为空");
                    return;
                }
                reqApi({
                    code: code ? "617102":"617100",
                    json: data
                }).done(function () {
                    sucDetail();
                });
            }
        }
    });
    buildDetail(options);
});