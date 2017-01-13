$(function(){
	
	var columns=[{
		field:'',
		title:'',
		checkbox:true
	},{
		field:'',
		title:'县市名称 '
	},{
		field:'',
		title:'类型 ',
		search:true,
		type:'select'
	},{
		field:'',
		title:'最近修改人 '
	},{
		field:'',
		title:'最近修改时间 '
	},{
		field:'remark',
		title:'备注'
	}];
	
	buildList({
		router:"zone",
		columns:columns,
		pageCode:''
	});
	
	
});