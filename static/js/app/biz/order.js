$(function() {
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	},{
		field : 'code',
		title : '订单编号'
	},{
		field : 'status',
		title : '状态',
		type: 'select',
		key: 'order_status',
		formatter: Dict.getNameForList('order_status'),
		search: true
	},{
		field : 'totalAmount',
		title : '订单总额',
		formatter: moneyFormat
	},{
		field : 'receiver',
		title : '商户'
	},{
		field : 'applyUser',
		title : '下单用户',
		listCode: '805055',
		type: 'select',
		params: {
			kind: 'f1',
			status: '0',
			updater: ''
		},
		keyName: 'userId',
		valueName: 'loginName',
		search: true
	},{
		field : 'applyDatetime',
		title : '下单时间',
		formatter: dateTimeFormat
	},{
		field : 'remark',
		title : '备注'
	}];
	buildList({
		router: 'order',
		columns: columns,
		pageCode: '808070'
	});
});

