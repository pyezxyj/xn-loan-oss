$(function() {
	var dw = dialog({
		'title': '申请开通',
		content: '<form class="pop-form" id="popForm" novalidate="novalidate">' +
		'<div class="alert-warning">流水统计分析，是橙袋科技针对资金流水推出的可视化统计报表'+
		'如有需要，点击下面确定按钮或者致电400-8888-999申请开通</div>' +
		'</form>'
	});
	dw.width(320);
	dw.showModal();
	toastr.success('操作成功');
});

