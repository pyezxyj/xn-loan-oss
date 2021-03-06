$(function() {
	
	var code = getQueryString('code');
	
	var fields = [{
		field: 'kind',
		type: 'hidden',
		value: '01'
	}, {
		title: '用户名',
		field: 'loginName',
		required: true,
		maxlength: 30
	}, {
		title: '角色',
		field: 'roleCode',
		required: true,
		type: 'select',
		listCode: '805021',
		keyName: 'code',
		valueName: 'name'
	}, {
		title: '所属地区',
		field: 'province',
		listCode:"617127",
		params: {
			type: "1"
		},
        keyName:"code",
        valueName:"{{county.DATA}}",
        type: 'select',
        required: true,
	}, {
		title: '备注',
		field: 'remark',
		maxlength: 250
	}];
	
	buildDetail({
		fields: fields,
		code: code,
		detailCode: '805056',
		addCode: '805042'
	});
	
});