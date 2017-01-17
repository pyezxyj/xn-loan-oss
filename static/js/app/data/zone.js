$(function(){
	
	var columns=[{
		field:'',
		title:'',
		checkbox:true
	},{
		field:'county',
		title:'县市名称 '
	},{
		field:'type',
		title:'类型 ',
		search:true,
		key:"zone_type",
		formatter: Dict.getNameForList("zone_type"),
		type:'select'
	},{
		field:'updater',
		title:'最近修改人 '
	},{
		title:'最近修改时间',
		field:'updaterDatetime', 
		formatter: dateTimeFormat
	},{
		field:'remark',
		title:'备注'
	}];
	
	buildList({
		router:"zone",
		columns:columns,
		pageCode:'617125',
		deleteCode:'617121'
	});
	
	
});