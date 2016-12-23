$(function() {
	
	var code = getQueryString('code');
	
	var fields = [{
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
		search: true,
		readonly: true
	},{
		field: 'category',
		title: '大类',
		listCode: '808007',
		type: 'select',
		keyName: 'code',
		valueName: 'name',
		readonly: true
	}, {
		field: 'type',
		title: '小类',
		listCode: '808007',
		type: 'select',
		keyName: 'code',
		valueName: 'name',
		readonly: true
	}, {
		field: 'name',
		title: '名称',
		readonly: true
	}, {
		field: 'advTitle',
		title: '广告语',
		readonly: true
	}, {
		field: 'advPic',
		title: '广告图',
		readonly: true,
		type: 'img'
	}, {
		field: 'pic1',
		title: '展示图',
		readonly: true,
		type: 'img'
	}, {
		field: 'costPrice',
		title: '成本价',
		readonly: true,
		amount: true
	}, {
		field: 'status',
		title: '状态',
		type: 'select',
		key: 'product_status',
		formatter: Dict.getNameForList('product_status'),
		readonly: true
	}, {
		field: 'description',
		title: '描述',
		readonly: true
	}, {
		field: 'remark',
		title: '备注',
		readonly: true
	}, {
		field: 'approveNote',
		title: '审核意见',
		required: true,
		maxlength: 250
	}];
	var options = {
		fields: fields,
		code: code,
		detailCode: '808022'
	};
	options.buttons = [{
		title: '通过',
		handler: function() {
			if ($('#jsForm').valid()) {
				var data = $('#jsForm').serializeObject();
				data.approveResult = '1';
				data.approver = getUserName();
				reqApi({
					code: '808015',
				    json: data
				}).done(function(data) {
					sucDetail();
				});
			}
		}
	}, {
		title: '不通过',
		handler: function() {
			if ($('#jsForm').valid()) {
				var data = $('#jsForm').serializeObject();
				data.approveResult = '0';
				data.approver = getUserName();
				reqApi({
					code: '808015',
				    json: data
				}).done(function(data) {
					sucDetail();
				});
			}
		}
	}, {
		title: '返回',
		handler: function() {
			goBack();
		}
	}];
	buildDetail(options);
	
});