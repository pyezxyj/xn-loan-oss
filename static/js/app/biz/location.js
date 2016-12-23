$(function() {
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	},{
		field : '',
		title : '规则名称'
	},{
		field : '',
		title : '规则分类',
		type: 'select',
		key: '',
		formatter: Dict.getNameForList(''),
		search: true
	},{
		field : '',
		title : '数值'
	},{
		field : 'remark',
		title : '备注'
	}];
	buildList({
		router: 'location',
		columns: columns
	});
});

