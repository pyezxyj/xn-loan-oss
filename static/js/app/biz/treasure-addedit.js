$(function() {
	
	var code = getQueryString('code');
	var view = !!getQueryString('v');
	
	var fields = [{
		field : 'storeCode',
		title : '商户',
		listCode: '808207',
		params: {
			start: 1,
			limit: 100000
		},
		required: true,
		type: 'select',
		keyName: 'code',
		valueName: 'name'
	},{
		field : 'name',
		title : '商品名称',
		required: true,
		maxlength: 60
	},{
		field : 'slogan',
		title : '广告语',
		required: true,
		maxlength: 100
	},{
		field : 'advPic',
		title : '图片',
		required: true,
		type: 'img'
	},{
		field : 'price',
		title : '价格',
		required: true,
		amount: true
	},{
		field : 'startDatetime',
		title : '开始时间',
		required: true,
		type: 'datetime'
	},{
		field : 'raiseDays',
		title : '募集天数',
		required: true,
		'Z+': true
	},{
		field : 'status',
		title : '状态',
		type: 'select',
		key: 'treasure_status',
		hidden: !view
	}, {
		field: 'description',
		title: '描述',
		required: true,
		type: 'textarea'
	}];

	var options = {
		fields: fields,
		code: code,
		detailCode: '808312',
		addCode: '808300',
		view: view
	};
	
	buildDetail(options);
	
});