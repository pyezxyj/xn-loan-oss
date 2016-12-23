$(function() {
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	},{
		field : 'mobile',
		title : '手机号'
	},{
		field : 'status',
		title : '状态',
		type: 'select',
		key: 'user_status',
		formatter: Dict.getNameForList('user_status'),
		search: true
	},{
		field : 'remark',
		title : '备注'
	}];
	buildList({
		router: 'bizman',
		columns: columns,
		pageCode: '805054',
		searchParams: {
			kind: 'f2'
		}
	});
	$('#lockBtn').click(function() {
		var selRecords = $('#tableList').bootstrapTable('getSelections');
		if(selRecords.length <= 0){
			toastr.info("请选择记录");
			return;
		}
		confirm("确认执行该操作？").then(function() {
			reqApi({
				code: '805052',
				json: {
					userId: selRecords[0].userId,
					toStatus: selRecords[0].status != '0' ? '0' : '2'
				}
			}).then(function() {
				sucList();
			});
		});

	});
});

