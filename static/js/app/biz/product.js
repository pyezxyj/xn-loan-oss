$(function() {
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	},{
		field : 'name',
		title : '商品名称',
		search: true
	},{
		field : 'companyCode',
		title : 'B端用户',
		listCode: '805055',
		detailCode: '805056',
		params: {
			kind: 'f2',
			status: '0',
			updater: ''
		},
		type: 'select',
		keyName: 'userId',
		valueName: 'loginName',
		search: true
	},{
		field : 'type',
		title : '参与类型',
		type: 'select',
		listCode: '808006',
		params: {
			type: 1
		},
		keyName: 'code',
		valueName: 'name'
	},{
		field : 'status',
		title : '状态',
		type: 'select',
		key: 'product_status',
		formatter: Dict.getNameForList('product_status'),
		search: true
	},{
		field : 'remark',
		title : '备注'
	}];
	buildList({
		router: 'product',
		columns: columns,
		pageCode: '808020'
	});
	
	$('#updownBtn').click(function() {
		var selRecords = $('#tableList').bootstrapTable('getSelections');
		if(selRecords.length <= 0){
			toastr.info("请选择记录");
			return;
		}
		if(selRecords[0].status == 2 || selRecords[0].status == 0){
			toastr.warning("该产品还未审批通过");
			return;
		}
		location.href = 'product_addedit.html?v=1&status='+(selRecords[0].status == 3 ? '1' : '0')+'&code=' + selRecords[0].code;
	});
});

