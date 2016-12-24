$(function() {
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	},{
		field : 'jbBank',
		title : '经办银行'
	},{
		field : 'userName',
		title : '车主'
	},{
    	field : '',
		title : '还款金额'
    },{
		field : 'updater',
		title : '还款时间'
	}, {
		field: 'remark',
		title: '备注'
	}];
	buildList({
		router: 'import',
		columns: columns,
		pageCode: '617000',
		
	});
});