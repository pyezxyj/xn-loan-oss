$(function() {
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	},{
		field : 'mobile',
		title : '手机号',
		search: true
	},{
		field : 'userReferee',
		title : '推荐人',
		listCode: '805055',
		detailCode: '805056',
		params: {
			kind: 'f2',
			status: '0',
			updater: ''
		},
		type: 'select',
		keyName: 'userId',
		valueName: 'loginName'
	},{
		field : 'realName',
		title : '姓名'
	},{
		field : 'idNo',
		title : '证件号码'
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
		router: 'customer',
		columns: columns,
		pageCode: '805054',
		searchParams: {
			kind: 'f1'
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

