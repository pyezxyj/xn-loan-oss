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
		title : '红包业绩余额',
		formatter: moneyFormat
	},{
		field : '',
		title : '转化余额',
		formatter: moneyFormat
	},{
		field : '',
		title : '转后余额',
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
		router: 'performance',
		columns: columns
	});
});

