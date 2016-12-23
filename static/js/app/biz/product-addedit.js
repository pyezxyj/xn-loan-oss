$(function() {
	
	var code = getQueryString('code');
	var view = !!getQueryString('v');
	var status = getQueryString('status');
	
	var fields = [{
        field: 'companyCode',
        title: 'B端用户',
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
        readonly: view,
        required: true
    }, {
		field: 'category',
		title: '大类',
		listCode: '808006',
		detailCode: '808007',
		params: {
			parentCode: '0',
            type: '1'
		},
		type: 'select',
		keyName: 'code',
		valueName: 'name',
		readonly: view,
        required: true,
		onChange: function(v, r) {
			$('#type').renderDropdown({
                listCode: '808006',
                params: {
                    parentCode: v,
                    type: '1'
                },
                keyName: 'code',
                valueName: 'name'
            });
		}
	}, {
		field: 'type',
		title: '小类',
		detailCode: '808007',
		type: 'select',
        keyName: 'code',
        valueName: 'name',
        required: true,
		readonly: view
	}, {
		field: 'name',
		title: '名称',
        required: true,
		readonly: view
	}, {
		field: 'advTitle',
		title: '广告语',
        required: true,
		readonly: view
	}, {
		field: 'advPic',
		title: '广告图',
		readonly: view,
        required: true,
		type: 'img'
	}, {
		field: 'pic1',
		title: '展示图（可多张）',
		readonly: view,
        required: true,
		type: 'img'
	}, {
		field: 'costPrice',
		title: '成本价',
		readonly: view,
        required: true,
		amount: true
	}, {
		field: 'status',
		title: '状态',
		type: 'select',
		key: 'product_status',
		formatter: Dict.getNameForList('product_status'),
        hidden: !view,
        required: true,
		readonly: view
	}, {
		field: 'description',
		title: '描述',
        type: 'textarea',
        required: true,
		readonly: view
	}, {
		field: 'price1',
		title: '人民币',
		amount: true,
		required: true,
		hidden: status != 0
	}, {
		field: 'price2',
		title: '购物币',
		amount: true,
		required: true,
		hidden: status != 0
	}, {
		field: 'price3',
		title: '钱宝币',
		amount: true,
		required: true,
		hidden: status != 0
	}, {
		field: 'location',
		title: '位置',
		type: 'select',
		key: 'pro_location',
		formatter: Dict.getNameForList('pro_location'),
		required: true,
		hidden: status != 0
	}, {
		field: 'remark',
		title: '备注',
        required: status == 1
	}];
	var options = {
		fields: fields,
		code: code,
		detailCode: '808022',
        addCode: '808010'
	};

	if (status == 0) {
        options.buttons = [{
            title: '返回',
            handler: function() {
                goBack();
            }
        }];
		options.buttons.unshift({
			title: '上架',
			handler: function() {
				if ($('#jsForm').valid()) {
					var data = $('#jsForm').serializeObject();
					reqApi({
						code: '808013',
					    json: data
					}).done(function(data) {
						sucDetail();
					});
				}
			}
		});
	} else if (status == 1) {
        options.buttons = [{
            title: '返回',
            handler: function() {
                goBack();
            }
        }];
		options.buttons.unshift({
			title: '下架',
			handler: function() {
				if ($('#jsForm').valid()) {
					var data = $('#jsForm').serializeObject();
					reqApi({
						code: '808014',
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