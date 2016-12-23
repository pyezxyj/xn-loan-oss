$(function() {
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	},{
		field : '',
		title : '申请人'
	},{
		field : '',
		title : '分润余额',
		formatter: moneyFormat
	},{
		field : '',
		title : '提现分润',
		formatter: moneyFormat
	},{
		field : '',
		title : '转后金额',
		formatter: moneyFormat
	},{
		field : '',
		title : '状态',
		type: 'select',
		key: '',
		formatter: Dict.getNameForList(''),
		search: true
	},{
		field : 'remark',
		title : '备注'
	}];
	buildList({
		router: 'withdraw',
		columns: columns
	});
});

