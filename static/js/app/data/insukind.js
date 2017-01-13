$(function(){
	
	
	var columns=[{
		field:'',
		checkbox:true,
		title:''	
	},{
		title:'险种名称 ',
		field:''	
	},{
		title:'类型 ',
		field:'',
		type:'select',
		key:"secure_type",
		search:true
	},{
		title:'最修改人 ',
		field:'updater'	
	},{
		title:'最近修改时间',
		field:'updateDatetime',
		formatter: dateTimeFormat
	},{
		title:'备注',
		field:'remark'	
	}];
	
	  buildList({
		  router:'insukind',
		  columns:columns,
		  pageCode:'',
		  editCode:'',
		  deleteCode:''
	  });
	
})
