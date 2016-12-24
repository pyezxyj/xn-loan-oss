$(function() {
	
	var code = getQueryString('code');
	
	var fields = [{
		field: 'kind',
		type: 'hidden',
		value: '1'
	}, {
		field: 'updater',
		type: 'hidden',
		value: getUserName()
	}, {
		title: '档案号',
		field: 'name',
		required: true,
		maxlength: 30
	}, {
		title: '借款人',
		field: 'level',
		required: true
	}, {
		title: '贷款品种',
		field: 'remark',
		maxlength: 250
	}];
	
	buildDetail({
		fields: fields,
		code: code,
		detailCode: '',
		addCode: '',
		editCode: ''
	});
	
});