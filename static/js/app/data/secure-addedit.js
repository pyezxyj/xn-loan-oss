$(function(){
	var code = getQueryString('code');
	var view = !!getQueryString('v');
	
	var fields=[{
			field:'',
			title:"名称",
			required:true,
			readonly:view
		},{
			field:'',
			title:"保单前缀",
			required:true,
			readonly:view
	   },{
			field:'',
			title:"地址",
			type:'citySelect',
			required:true,
			readonly:view
	   },{
			field:'',
			title:"联系人",
			required:true,
			readonly:view
	   },{
			field:'',
			title:"联系方式",
			mobile:true,
			required:true,
			readonly:view
	   },{
			field:'',
			title:"所属地区",
			type:'select',
			required:true,
			readonly:view
	   },{
			field:'remark',
			title:"备注",
			maxlength:255,
			readonly:view
	   }];
	buildDetail({
		fields: fields,
		code: code,
		addCode: ' ',
		editCode: ' ',
		detailCode: ' '
	});
	

	
	
	
	
});