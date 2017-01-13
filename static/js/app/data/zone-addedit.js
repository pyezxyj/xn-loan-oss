$(function(){
	var code = getQueryString('code');
    var view = !!getQueryString('v');
    
	var fields=[{
		field:'',
		title:'县市名称 ',
		required:true,
		readonly:view
	},{
		field:'',
		title:'类型 ',
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
		addeCode:'',
		editCode:'',
		deleteCode:''
	});
	
	
});