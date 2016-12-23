$(function() {
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	},{
		field : '',
		title : '店铺名称'
	},{
		field : '',
		title : '类型',
		type: 'select',
		key: '',
		formatter: Dict.getNameForList('')
	},{
		field : '',
		title : '联系电话'
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
		router: 'myseller',
		columns: columns
	});
});

