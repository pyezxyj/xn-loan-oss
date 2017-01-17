$(function(){
	
	
	var columns=[{
		field:'',
		checkbox:true,
		title:''	
	},{
		title:'险种名称 ',
		field:'dvalue',	
	},{
		field:'type',
		title:'类型 ',
		search:true,
		key:"zone_type",
		formatter: Dict.getNameForList("zone_type"),
		type:'select'
	},{
		title:'最近修改人 ',
		field:'updater',
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
		  pageCode:'617135',
		  deleteCode:'617131',
	  });
	
})
