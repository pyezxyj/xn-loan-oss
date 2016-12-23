$(function() {
	
	var code = getQueryString('code');
	
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
		maxlength: 30,
		readonly: true
	}, {
		field: 'type',
		title: '类型',
		required: true,
		type: 'select',
		key: 'merchant_kind',
		readonly: true
	},{
		field: 'legalPersonName',
		title: '法人姓名',
		required: true,
		maxlength: 30,
		readonly: true
	}, {
		field: 'userReferee',
		title: '推荐人',
		type: 'select',
		required: true,
		listCode: '805055',
		params: {
			kind: 'f2'
		},
		keyName: 'userId',
		valueName: 'loginName',
		readonly: true
	}, {
		field: 'rate1',
		title: '使用折扣券分成比例',
		required: true,
		number: true,
		readonly: true
	}, {
		field: 'rate2',
		title: '不使用折扣券分成比例',
		required: true,
		number: true,
		readonly: true
	}, {
		field: 'slogan',
		title: '广告语',
		required: true,
		maxlength: 250,
		readonly: true
	}, {
		field: 'adPic',
		title: '店铺缩略图',
		required: true,
		type: 'img',
		readonly: true
	}, {
		field: 'pic',
		title: '图片(可多张)',
		required: true,
		type: 'img',
		readonly: true
	}, {
		title: '地址',
		field: 'province1',
		readonly: true,
		formatter: function(v, r) {
			var res = $.unique([r.province, r.city, r.area]).reverse();
			return res.join(' ') + ' ' + r.address;
		}
	}, {
		title: '联系电话',
		field: 'bookMobile',
		tm: true,
		required: true,
		readonly: true
	}, {
		title: '手机号',
		field: 'smsMobile',
		mobile: true,
		readonly: true
	}, {
		field: 'description',
		title: '描述',
		required: true,
		type: 'textarea',
		readonly: true
	}, {
		title: '备注',
		field: 'remark',
		maxlength: 250,
		required: true
	}];

	var options = {
		fields: fields,
		code: code,
		detailCode: '808209'
	};

	options.buttons = [{
		title: '通过',
		handler: function() {
			if ($('#jsForm').valid()) {
				var data = $('#jsForm').serializeObject();
				data.approveResult = '1';
				data.approver = getUserName();
				reqApi({
					code: '808202',
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
					code: '808202',
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