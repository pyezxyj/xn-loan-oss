$(function() {
	
	var code = getQueryString('code');
	var view = true;
	var type = getQueryString('t');
	
	var fields = [{
		field : 'name',
		title : '名称'
	},{
		field : 'capital',
		title : '股份'
	},{
		field : 'price',
		title : '价格',
		amount: true
	},{
		field : 'status',
		title : '状态',
		type: 'select',
		key: 'stock_status',
		formatter: Dict.getNameForList('stock_status'),
		search: true
	},{
		field : 'backInterval',
		title : '返还周期'
	},{
		field : 'backCount',
		title : '返还次数'
	},{
		field : 'welfare1',
		title : '返还贡献奖励'
	},{
		field : 'welfare2',
		title : '返还购物币'
	},{
		field: 'userId',
		title: 'C端用户',
		listCode: '805055',
		detailCode: '805056',
		params: {
			kind: 'f1',
			status: '0',
			updater: ''
		},
		type: 'select',
		keyName: 'userId',
		valueName: 'loginName',
		readonly: false,
		required: true
	}];

	var options = {
		fields: fields,
		code: code,
		detailCode: '808402',
		view: view,
		buttons: [{
			title: '返回',
			handler: function() {
				goBack();
			}
		}]
	};

	if (type == 1) {
		options.buttons.unshift({
			title: '代购',
			handler: function() {
				if ($('#jsForm').valid()) {
					var data = $('#jsForm').serializeObject();
					reqApi({
						code: '808403',
						json: data
					}).done(function(data) {
						sucDetail();
					});
				}
			}
		});
	} else if (type == 2) {
		options.buttons.unshift({
			title: '清算',
			handler: function() {
				if ($('#jsForm').valid()) {
					var data = $('#jsForm').serializeObject();
					reqApi({
						code: '808405',
						json: data
					}).done(function(data) {
						sucDetail();
					});
				}
			}
		});
	}
	
	buildDetail(options);
	
});