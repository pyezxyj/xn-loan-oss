$(function() {
	
	var code = getQueryString('code');
	
	var fields = [{
		field: 'kind',
		type: 'hidden',
		value: '1'
	},{
		title: '借款人',
		field: 'userName',
		required: true,
		maxlength: 30
	}, {
		title: '贷款品种',
		field: 'loanType',
        formatter: Dict.getNameForList('credit_status'),
        type: 'select',
        required: true,
        key: 'loan_type'
	}, {
		title: '车行',
		field: 'car',
		formatter: Dict.getNameForList('car_type'),
        key:"car_type",
		required: true
	}, {
		field: 'saleman',
        title: '业务员',
        type: "select",
        listCode: "805056",
        keyName: "userId",
        required: true,
        valueName: "loginName"
	}, {
		title: '发票',
		field: 'receipt',
		required: true
	}, {
		title: '保单',
		field: 'policy',
		required: true
	},{
		title: '合格证/关单',
		field: 'certification',
		required: true
	}];
	
	buildDetail({
		fields: fields,
		code: code,
		addCode: '617019'
	});
	
	
//  $('#changeBtn').click(function () {
//  var selRecords = $('#tableList').bootstrapTable('getSelections');
//  if (selRecords.length <= 0) {
//      toastr.info("请选择记录");
//      return;
//  }
//  window.location.href = "manage.html?code=" + selRecords[0].code + "&name=" + encodeURI(encodeURI(selRecords[0].name));
//});
	
});