$(function() {
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	},{
		field : '',
		title : '户名',
		search: true
	},{
		field: '',
		title: '账号'
	},{
		field: '',
		title: '类型',
		type: 'select',
		search: true
	},{
		field : 'status',
		title : '状态',
		type: 'select',
		key: 'news_status',
		formatter: Dict.getNameForList('news_status'),
		search: true
	},{
    	field : '',
		title : '余额',
		formatter: moneyFormat
    },{
    	field: '',
    	title: '冻结金额',
    	formatter: moneyFormat
    },{
    	field: '',
    	title: '币种',
    	type: 'select'
    },{
		field : '',
		title : '创建时间',
		formatter: dateTimeFormat
	}];
	buildList({
		router: 'account',
		columns: columns,
		pageCode: '802500'
	});
	
	$('#flowBtn').click(function() {
		var selRecords = $('#tableList').bootstrapTable('getSelections');
		if(selRecords.length <= 0){
			toastr.info("请选择记录");
			return;
		}
		window.location.href = "ledger.html?code="+selRecords[0].code+"&name="+encodeURI(encodeURI(selRecords[0].name));
	});
	
});

