$(function() {

    var code = getQueryString('code');
    var view = !!getQueryString('v');

    var fields = [{
        title: '车辆品牌',
        field: 'brand',
        readonly: true
    }, {
        field: 'model',
        title: '车辆型号',
        readonly: true
    }, {
        title: '车辆号码',
        field: 'licenseNo',
        required:true,
        readonly: view
    },{
    	title:'车架号',
    	field:'chassisNo',
    	required:true,
        readonly: view
    }, {
        title: '发动机号',
        field: 'engineNo',
        required:true,
        readonly: view
    }, {
        title: '车座位数',
        field: 'seatNum',
        required:true,
        readonly: view,
        "Z+": true
    },{
        title: '发票号码',
        field: 'invoiceNo',
        required:true,
        readonly: view
    },{
        title: '购车日期',
        field: 'buyDatetime',
        type: "date",
        formatter:dateFormat,
        required:true,
        readonly: view
    },{
        title: '购置税金额',
        field: 'buyTax',
        required:true,
        readonly: view,
        amount: true
    },{
        title: 'GPS厂商',
        field: 'gpsVendor',
        required:true,
        readonly: view
    },{
        title: 'GPS编号',
        field: 'gpsNo',
        required:true,
        readonly: view
    },{
        title: '抵押时间',
        field: 'dyStartDatetime',
        type: "date",
        formatter:dateFormat,
        required:true,
        readonly: view
    },{
        title: '抵押到期',
        field: 'dyEndDatetime',
        type: "date",
        formatter:dateFormat,
        required:true,
        readonly: view
    },{
        title: '经办人',
        field: 'agent',
        required:true,
        readonly: view
    },{
        title: '完税材料',
        field: 'taxPdf',
        type:'img',
        required:true,
        readonly: view
    },{
        title: '抵押登记证',
        field: 'guarantyPdf',
        type:'img',
        required:true,
        readonly: view
    },{
        title: '车辆登记证',
        field: 'registPdf',
        type:'img',
        required:true,
        readonly: view
    }, {
    	title: '备注',
    	field: 'remark',
    	maxlength: 255
    }];
    
    buildDetail({
		fields: fields,
		code: code,
		editCode: '617030',
		detailCode:'617035',
		view: view
	});
    
   
});