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
		title: '渠道',
		type: 'select',
		search: true
	},{
		field : '',
		title : '业务类型',
		type: 'select',
		key: '',
		formatter: Dict.getNameForList(''),
		search: true
	},{
    	field : '',
		title : '变动金额',
		formatter: moneyFormat
    },{
    	field: '',
    	title: '变动前金额',
    	formatter: moneyFormat
    },{
    	field: '',
    	title: '变动后金额',
    	type: 'select'
    },{
		field : '',
		title : '状态',
		type: 'select',
		key: '',
		formatter: Dict.getNameForList(''),
		search: true
	},{
		field : 'remark',
		title : '备注'
	}];
	buildList({
		router: 'autoReconControl',
		columns: columns
	});
	
	$('#man-madeBtn').click(function() {
		var selRecords = $('#tableList').bootstrapTable('getSelections');
		if(selRecords.length <= 0){
			toastr.info("请选择记录");
			return;
		}
		window.location.href = "ledger.html?code="+selRecords[0].code+"&name="+encodeURI(encodeURI(selRecords[0].name));
	});
	
});

