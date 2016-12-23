$(function() {
	var code = getQueryString('code');
	var view = !!getQueryString('v');
	var isBranch = getQueryString('b');
	
	var fields = [{
		field: 'isCompanyEdit',
		type: 'hidden',
		value: '0'
	}, {
		field: 'status',
		type: 'hidden',
		value: '1'
	}, {
		field: 'type',
		type: 'hidden',
		value: '2'
	}, {
		field: 'belong',
		type: 'hidden',
		defaultValue: '3'
	}, {
		field: 'parentCode',
		type: 'hidden',
		value: '0'
	}, {
		field: 'companyCode',
		type: 'hidden',
		value: '0'
	}, {
		title: '名字',
		field: 'name',
		required: true,
		maxlength: 30,
		readonly: view
	}, {
		title: '位置',
		field: 'location',
		required: true,
		type: 'select',
		key: 'banner_location',
		readonly: view,
		hidden: isBranch
	}, {
		title: '顺序',
		field: 'orderNo',
		required: true,
		maxlength: 10,
		number: true,
		readonly: view,
		hidden: isBranch
	}, {
		title: '图片',
		field: 'pic',
		required: true,
		type: 'img',
		readonly: view
	}, {
		title: '备注',
		field: 'remark',
		maxlength: 250,
		readonly: view
	}];
	
	var options = {
		fields: fields,
		code: code,
		addCode: '806040',
		editCode: '806042',
		detailCode: '806053'
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