$(function() {
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	},{
		field : 'name',
		title : '名字',
		search: true
	},{
    	field : 'orderNo',
		title : '顺序',
		sortable: true
    },{
		field : 'remark',
		title : '备注'
	}];
	buildList({
		router: 'menu',
		columns: columns,
		pageCode: '806050',
		deleteCode: '806041',
		searchParams: {
			type: '1',
			companyCode: '0'
		},
		sortName: 'asc',
		sortOrder: 'orderNo'
	});
});

