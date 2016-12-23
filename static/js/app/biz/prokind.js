$(function() {
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	},{
		field : 'name',
		title : '名称',
		search: true
	}, {
		field: 'parentCode',
		title: '大类',
		search: true,
		listCode: '808006',
		params: {
			parentCode: '0'
		},
		type: 'select',
		keyName: 'code',
		valueName: 'name'
	}, {
		field: 'orderNo',
		title: '顺序',
		sortable: true
	}];
	buildList({
		router: 'prokind',
		columns: columns,
		pageCode: '808005',
		deleteCode: '808001',
		searchParams: {
			type: '1'
		},
		sortName: 'orderNo',
		sortOrder: 'asc'
	});
});

