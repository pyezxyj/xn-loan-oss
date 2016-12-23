$(function() {
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	},{
		field : 'name',
		title : '商户'
	},{
		field: 'owner',
		title: 'B端用户',
		listCode: '805055',
		params: {
			kind: 'f2',
			status: '0',
			updater: ''
		},
		type: 'select',
		keyName: 'userId',
		valueName: 'loginName'
	}, {
		field : 'type',
		title : '类型',
		type: 'select',
		key: 'merchant_kind',
		formatter: Dict.getNameForList('merchant_kind')
	},{
		field : 'userReferee',
		title : '推荐人',
		type: 'select',
		listCode: '805055',
		params: {
			kind: 'f2'
		},
		keyName: 'userId',
		valueName: 'loginName'
	},{
		field : 'status',
		title : '状态',
		type: 'select',
		key: 'merchant_status',
		formatter: Dict.getNameForList('merchant_status'),
		search: true
	},{
		field : 'remark',
		title : '备注'
	}];
	buildList({
		router: 'seller',
		columns: columns,
		pageCode: '808207'
	});

	$('#updownBtn').click(function() {
		var selRecords = $('#tableList').bootstrapTable('getSelections');
		if(selRecords.length <= 0){
			toastr.info("请选择记录");
			return;
		}
		if(selRecords[0].status == 2 || selRecords[0].status == 0){
			toastr.warning("该商户还未审批通过");
			return;
		}
		location.href = 'seller_addedit.html?v=1&status='+((selRecords[0].status == 1 || selRecords[0].status == 2) ? '1' : '0')+'&code=' + selRecords[0].code;
	});
});

