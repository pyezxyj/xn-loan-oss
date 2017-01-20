$(function(){
	
	
	var columns=[{
		field:'',
		checkbox:true,
		title:''	
	},{
		title:'险种名称 ',
		field:'dvalue',	
	},{
		field:'parentKey',
		title:'类型 ',
		search:true,
		listCode: '617136',
		params: {
			type: 2
		},
		keyName: 'dkey',
		valueName: 'dvalue',
		formatter: Dict.getNameForList("insure_type", 617136),
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
		  searchParams: {
			type: 1  
		  },
		  deleteCode:'617131',
	  });
	
})
