$(function() {
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	},{
		field : 'userId',
		title : '树主人',
		listCode: '805055',
		params: {
			kind: 'f1',
			status: '0',
			updater: ''
		},
		type: 'select',
		keyName: 'userId',
		valueName: 'loginName'
	},{
		field : 'price',
		title : '树价格',
		formatter: moneyFormat
	},{
		field : 'status',
		title : '状态',
		type: 'select',
		key: 'tree_status',
		formatter: Dict.getNameForList('tree_status'),
		search: true
	},{
		field : 'totalRockNum',
		title : '被摇次数'
	}];
	buildList({
		router: 'moneytree',
		columns: columns,
		pageCode: '808458'
	});
	$('#activeBtn').click(function() {
		var selRecords = $('#tableList').bootstrapTable('getSelections');
		if(selRecords.length <= 0){
			toastr.info("请选择记录");
			return;
		}

		confirm("确认是否执行此操作？").then(function() {
			reqApi({
				code: '808453',
				json: {userId: selRecords[0].userId}
			}).done(function(data) {
				sucList();

			});
		});

	});

	$('#lockBtn').click(function() {
		var selRecords = $('#tableList').bootstrapTable('getSelections');
		if(selRecords.length <= 0){
			toastr.info("请选择记录");
			return;
		}

		confirm("确认是否执行此操作？").then(function() {
			reqApi({
				code: '808454',
				json: {userId: selRecords[0].userId}
			}).done(function(data) {
				sucList();
			});
		});

	});
});

