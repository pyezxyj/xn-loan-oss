$(function() {
	
	var code = getQueryString('code');
	
	var fields = [{
		field: 'kind',
		type: 'hidden',
		value: 'f1'
	}, {
		field: 'loginName',
		title: '登录名',
		required: true,
		maxlength: 60
	}, {
		field: 'mobile',
		title: '手机号',
		required: true,
		mobile: true
	}, {
		field: 'idKind',
		title: '证件类型',
		type: 'select',
		data: {'1': '身份证'}
	}, {
		field: 'idNo',
		title: '证件号',
		maxlength: 30
	}, {
		field: 'realName',
		title: '真实姓名',
		maxlength: 10
	}, {
		field: 'userReferee',
		title: '推荐人',
		listCode: '805055',
		params: {
			kind: 'f2',
			updater: ''
		},
		type: 'select',
		keyName: 'userId',
		valueName: '{{loginName.DATA}}-{{mobile.DATA}}',
		required: true,
	}, {
		field: 'remark',
		title: '备注',
		maxlength: 250
	}];
	
	buildDetail({
		fields: fields,
		code: code,
		addCode: '805042'
	});
	
});