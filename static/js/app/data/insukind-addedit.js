$(function(){
//	var code = getQueryString('code');
	var view = getQueryString('v');
	var id  = getQueryString("code");
	
	var fields=[{
		title:"更新人",
		field:"updater",
		type:"hidden",
	    value:sessionStorage.getItem('userName')
	},{
	   title:"",
	   field:"type",
	   value:'1',
	   type:'hidden',
	},{
		title:"类型",
		field:"parentKey",
		type:'select',
		listCode: '617136',
		params: {
			type: 2
		},
		keyName: 'dkey',
		valueName: 'dvalue',
		required:true,
		readonly:view
	},{
		title:'保险名称',
		field:'dvalue',
		required:true,
		readonly:view,
		maxlength:32,
	},{
		title:'保险键',
		field:'dkey',
		maxlength:32,
		required:true,
		readonly:view
	},{
		title:'备注',
		field:'remark',
		maxlength:255,
		readonly:view	
	}];
	
	  buildDetail({
		  code:id,
		  fields:fields,
		  //id:id,
		  addCode:'617130',
		  editCode:'617131',
		  detailCode:"617137"
	  });
	
})
