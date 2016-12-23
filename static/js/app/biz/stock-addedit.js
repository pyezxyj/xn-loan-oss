$(function() {
	
	var code = getQueryString('code');
	var view = !!getQueryString('v');
	
	var fields = [{
		field : 'name',
		title : '名称'
	},{
		field : 'capital',
		title : '股份'
	},{
		field : 'price',
		title : '价格',
		amount: true
	},{
		field : 'status',
		title : '状态',
		type: 'select',
		key: 'stock_status',
		formatter: Dict.getNameForList('stock_status'),
		search: true
	},{
		field : 'backInterval',
		title : '返还周期'
	},{
		field : 'backCount',
		title : '返还次数'
	},{
		field : 'welfare1',
		title : '返还贡献奖励'
	},{
		field : 'welfare2',
		title : '返还购物币'
	}];

	var options = {
		fields: fields,
		code: code,
		detailCode: '808402',
		view: view
	};
	
	buildDetail(options);
	
});