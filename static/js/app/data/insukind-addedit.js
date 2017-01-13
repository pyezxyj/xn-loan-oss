$(function(){
	var code = getQueryString('code');
	var view = getQueryString('v');
	
	var fields=[{
		title:'险种名称 ',
		field:'',
		type:"select",
		key:"secure_type",
		formatter:Dict.getNameForList("secure_type"),
		required:true,
		readony:view
	},{
		title:'类型 ',
		field:'',
		type:'select',
		required:true,
		readony:view
	},{
		title:'备注',
		field:'remark',
		maxlength:255,
		required:true,
		readony:view	
	}];
	
	  buildDetail({
		  code:code,
		  fields:fields,
		  addCode:'',
		  editCode:'',
		  deleteCode:''
	  });
	
})
