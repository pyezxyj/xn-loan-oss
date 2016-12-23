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
		key: 'news_status',
		formatter: Dict.getNameForList('news_status'),
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
    	formatter: moneyFormat
    },{
		field : '',
		title : '状态',
		type: 'select',
		key: 'news_status',
		formatter: Dict.getNameForList('news_status'),
		search: true
	},{
		field : 'remark',
		title : '备注'
	}];
	buildList({
		router: 'ledger',
		columns: columns
	});
});

