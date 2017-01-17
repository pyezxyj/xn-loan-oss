$(function(){
	var code = getQueryString('code');
    var view = !!getQueryString('v');
    
	var fields=[{
		field:'county',
		title:'县市名称 ',
		required:true,
		readonly:view
	},{
		field:'type',
		title:'类型 ',
        key:'zone_type',
		search:true,
		type:'select',
		required:true,
		readonly:view
	},{
		field:'remark',
		title:'备注',
		readonly:view,
		maxlength:255
	}];
	
	buildDetail({
		code:code,
		fields:fields,
		addCode:'617120',
		editCode:'617122',
		detailCode:'617126',
	});
	
	
});