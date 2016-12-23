$(function() {
	var code = getQueryString('code');
	var view= getQueryString('v');
	
	var fields = [{
		title: '户名',
		field: '',
		required: true,
		maxlength: 32,
		readonly: view
	}, {
		title: '账号',
		field: '',
		required: true,
		readonly: view
	}, {
		title: '流水编号',
		field: '',
		readonly: view
	}, {
		field : '',
		title : '渠道类型',
		type: 'select',
		key: '',
		formatter: Dict.getNameForList(''),
		readonly: view
	}, {
		field: '',
		title: '渠道单号',
		readonly: view
	}, {
		field : '',
		title : '业务类型',
		type: 'select',
		key: '',
		formatter: Dict.getNameForList(''),
		readonly: view
	}, {
		field: '',
		title: '变动金额',
		formatter: moneyFormat,
		readonly: view
	}, {
		field: '',
		title: '变动前金额',
		formatter: moneyFormat,
		readonly: view
	}, {
		field: '',
		title: '变动后金额',
		formatter: moneyFormat,
		readonly: view
	}, {
		field: '',
		title: '金额変动时间',
		formatter: dateTimeFormat,
		readonly: view
	}, {
		field : '',
		title : '状态',
		type: 'select',
		key: '',
		formatter: Dict.getNameForList(''),
		readonly: view
	}, {
		field: '',
		title: '拟对账时间',
		formatter: dateTimeFormat,
		readonly: view
	}, {
		field: '',
		title: '对账人',
		readonly: view
	}, {
		field: '',
		title: '对账时间',
		formatter: dateTimeFormat,
		readonly: view
	}, {
		field: '',
		title: '调账人',
		readonly: view
	}, {
		field: '',
		title: '调账时间',
		formatter: dateTimeFormat,
		readonly: view
	}, {
		title: '备注',
		field: 'remark',
		maxlength: 250,
		readonly: view
	}];
	
	var options = {
		fields: fields,
		code: code
	};
	if (view) {
		options.buttons = [{
			'title': '返回',
			handler: function() {
				goBack();
			}
		}];
	}
	
	buildDetail(options);
});