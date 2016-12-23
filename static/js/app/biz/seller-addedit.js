$(function() {
	
	var code = getQueryString('code');
	var view = !!getQueryString('v');
	var status = getQueryString('status');
	
	var fields = [{
		field: 'longitude',
		type: 'hidden',
		value: '0'
	}, {
		field: 'latitude',
		type: 'hidden',
		value: '0'
	}, {
		field: 'name',
		title: '名称',
		required: true,
		maxlength: 30
	}, {
		field: 'type',
		title: '类型',
		required: true,
		type: 'select',
		key: 'merchant_kind'
	},{
		field: 'legalPersonName',
		title: '法人姓名',
		required: true,
		maxlength: 30
	}, {
		field: 'userReferee',
		title: '推荐人',
		type: 'select',
		listCode: '805055',
		params: {
			kind: 'f2'
		},
		keyName: 'userId',
		valueName: 'loginName'
	}, {
		field: 'rate1',
		title: '使用折扣券分成比例',
		required: true,
		number: true
	}, {
		field: 'rate2',
		title: '不使用折扣券分成比例',
		required: true,
		number: true
	}, {
		field: 'slogan',
		title: '广告语',
		required: true,
		maxlength: 250
	}, {
		field: 'adPic',
		title: '店铺缩略图',
		required: true,
		type: 'img'
	}, {
		field: 'pic',
		title: '图片(可多张)',
		required: true,
		type: 'img'
	}, {
		title: '地址',
		required: true,
		type: 'citySelect',
		required: true,
		hidden: view
	}, {
		placeholder: '详细地址（如街道、门牌号等）',
		field: 'address',
		required: true,
		maxlength: 100,
		hidden: view
	}, {
		title: '地址',
		field: 'province1',
		hidden: !view,
		readonly: true,
		formatter: function(v, r) {
			var res = $.unique([r.province, r.city, r.area]).reverse();
			return res.join(' ') + ' ' + r.address;
		}
	}, {
		title: '联系电话',
		field: 'bookMobile',
		tm: true,
		required: true
	}, {
		title: '手机号',
		field: 'smsMobile',
		mobile: true
	}, {
		field: 'status',
		title: '状态',
		type: 'select',
		key: 'merchant_status',
		hidden: !view
	}, {
		field: 'description',
		title: '描述',
		required: true,
		type: 'textarea'
	}, {
		title: '备注',
		field: 'remark',
		maxlength: 250
	}, {
		field: 'payRecords',
		title: '消费记录',
		pageCode: '808211',
		key: 'storeCode',
		type: 'o2m',
		hidden: !view,
		columns: [{
			field : 'userId',
			title : '用户'
		}, {
			field: 'amount',
			title: '消费金额',
			formatter: moneyFormat
		}, {
			field: 'createDatetime',
			title: '消费时间',
			formatter: dateTimeFormat
		}, {
			field: 'remark',
			title: '备注'
		}]
	}, {
		field: 'cardRecords',
		title: '折扣券',
		pageCode: '808224',
		key: 'storeCode',
		type: 'o2m',
		hidden: !view,
		detailFormatter: function(index, r) {
			return r.description;
		},
		columns: [{
			field : 'name',
			title : '名称'
		}, {
			field: 'type',
			title: '种类',
			type: 'select',
			key: 'card_kind',
			formatter: Dict.getNameForList('card_kind')
		}, {
			field: 'price',
			title: '售价'
		}, {
			field: 'status',
			title: '状态'
		}, {
			field: 'validDatetime',
			title: '有效时间',
			formatter: function(v, r) {
				return dateTimeFormat(r.validateStart) + ' ~ ' + dateTimeFormat(r.validateEnd);
			}
		}]
	}];

	var options = {
		fields: fields,
		code: code,
		detailCode: '808209',
		addCode: '808200',
		editCode: '808203',
		view: view
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
						code: '808205',
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
						code: '808205',
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