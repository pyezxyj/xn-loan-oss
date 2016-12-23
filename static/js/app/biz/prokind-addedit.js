$(function() {
	
	var code = getQueryString('code');
	var view = !!getQueryString('v');
	
	var fields = [{
		field: 'type',
		type: 'hidden',
		value: '1'
	}, {
		field: 'parentCode',
		title: '大类',
		search: true,
		listCode: '808006',
		detailCode: '808007',
		params: {
			parentCode: '0'
		},
		type: 'select',
		keyName: 'code',
		valueName: 'name',
		defaultOption: view ? '-' : '选此创建大类',
		required: true,
		readonly: view
	}, {
		field : 'name',
		title : '名称',
		required: true,
		maxlength: 100,
		readonly: view
	}, {
		field: 'pic',
		title: '图片',
		type: 'img',
		readonly: view
	}, {
		field: 'orderNo',
		title: '顺序',
		number: true,
		required: true,
		defaultValue: '0',
		readonly: view
	}];
	
	buildDetail({
		fields: fields,
		code: code,
		detailCode: '808007',
		addCode: '808000',
		editCode: '808002'
	});
	
});