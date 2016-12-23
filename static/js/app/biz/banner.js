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
		field : 'location',
		title : '位置',
		type: 'select',
		key: 'banner_location',
		formatter: Dict.getNameForList('banner_location'),
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
		router: 'banner',
		columns: columns,
		pageCode: '806050',
		deleteCode: '806041',
		searchParams: {
			type: '2',
			companyCode: '0'
		},
		sortName: 'asc',
		sortOrder: 'orderNo'
	});
});

