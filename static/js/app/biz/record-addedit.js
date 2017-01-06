$(function() {

    var code = getQueryString('code');
    var view = !!getQueryString('v');

    var fields = [{
    	title:'编号',
    	field:'code',
    	type:'hidden'
    },{
        title: '车辆品牌',
        field: 'brand',
        required:true
    }, {
        field: 'model',
        title: '车辆型号',
      
        required:true
    }, {
        title: '车辆号码',
        field: 'carNo',
        required:true
    },{
    	title:'车架号',
    	field:'chassisNo',
    	required:true
    }, {
        title: '发动机号',
        field: 'engineNo',
        required:true
    }, {
        title: '车座位数',
        field: 'seatNum',
        required:true
    },{
        title: '发票号码',
        field: 'invoiceNo',
        required:true
    },{
        title: '购车日期',
        field: 'buyDatetime',
        required:true
    },{
        title: '购置税金额',
        field: 'buyTax',
 
        required:true
    },{
        title: 'GPS厂商',
        field: 'gpsVendor',
        required:true
    },{
        title: 'GPS编号',
        field: 'gpsNo',
        required:true
    },{
        title: '抵押时间',
        field: 'dyStartDatetime',
        required:true
    },{
        title: '抵押到期',
        field: 'dyEndDatetime',
        required:true
    },{
        title: '经办人',
        field: 'agent',
        required:true
    },{
    	title:'备注',
    	field:'remark',
    	maxlength:255,
    	required:true
    },{
        title: '完税材料',
        field: 'taxPdf',
        type:'img',
        required:true
    },{
        title: '抵押登记证',
        field: 'guarantyPdf',
        type:'img',
        required:true
    },{
        title: '车辆登记证',
        field: 'registPdf',
        type:'img',
        required:true
    }];
    
    buildDetail({
		fields: fields,
		code: code,
		addCode: '617030',
		detailCode:'617035'
		view: view
	});
    
   
});