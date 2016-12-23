$(function() {
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	},{
		field : 'name',
		title : '商品名称'
	},{
		field : 'storeCode',
		title : '商户',
		listCode: '808207',
		params: {
			start: 1,
			limit: 100000
		},
		type: 'select',
		keyName: 'code',
		valueName: 'name',
		search: true
	},{
		field : 'status',
		title : '状态',
		type: 'select',
		key: 'treasure_status',
		formatter: Dict.getNameForList('treasure_status'),
		search: true
	}];
	buildList({
		router: 'treasure',
		columns: columns,
		pageCode: '808310'
	});

	$('#updownBtn').click(function() {
		var selRecords = $('#tableList').bootstrapTable('getSelections');
		if(selRecords.length <= 0){
			toastr.info("请选择记录");
			return;
		}
		if(selRecords[0].status == 2 || selRecords[0].status == 0){
			toastr.warning("该宝贝还未审批通过");
			return;
		}
		location.href = 'treasure_addedit.html?v=1&status='+((selRecords[0].status == 1 || selRecords[0].status == 2) ? '1' : '0')+'&code=' + selRecords[0].code;
	});
});

