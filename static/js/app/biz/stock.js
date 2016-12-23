$(function() {
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	},{
		field : 'name',
		title : '名称'
	},{
		field : 'capital',
		title : '股份'
	},{
		field : 'price',
		title : '价格',
		formatter: moneyFormat
	},{
		field : 'status',
		title : '状态',
		type: 'select',
		key: 'stock_status',
		formatter: Dict.getNameForList('stock_status'),
		search: true,
		value: '1'
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
	buildList({
		router: 'stock',
		columns: columns,
		pageCode: '808401'
	});

	$('#buyBtn').on('click', function() {
		var selRecords = $('#tableList').bootstrapTable('getSelections');
		if(selRecords.length <= 0){
			toastr.info("请选择记录");
			return;
		}
		window.location.href = "stock_action.html?t=1&code="+selRecords[0].code;
	});

	$('#clearBtn').on('click', function() {
		var selRecords = $('#tableList').bootstrapTable('getSelections');
		if(selRecords.length <= 0){
			toastr.info("请选择记录");
			return;
		}
		window.location.href = "stock_action.html?t=2&code="+selRecords[0].code;
	});

});

