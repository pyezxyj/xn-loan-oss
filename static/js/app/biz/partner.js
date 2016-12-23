$(function() {
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	},{
		field : '',
		title : '姓名'
	},{
		field : '',
		title : '登录账号'
	},{
		field : '',
		title : '辖区'
	},{
		field : '',
		title : '证件号码'
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
		router: 'partner',
		columns: columns
	});
});

