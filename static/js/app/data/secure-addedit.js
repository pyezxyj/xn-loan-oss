$(function(){
	var code = getQueryString('code');
	var view = !!getQueryString('v');
	
	var fields=[{
			title:'操作人',
			field:"updater",
			value: sessionStorage.getItem('userName'),
			type:"hidden"
	   },{
			field:'salutation',
			title:"名称",
			maxlength:32,
			required:true,
			readonly:view
		},{
			field:'prefix',
			title:"保单前缀",
			maxlength:32,
			required:true,
			readonly:view
	   },{
			field:'province',
			title:"地址",
			type:'citySelect',
			formatter: function (v, data) {
		          var result = ( data.province || "" ) + ( data.city || "" ) + ( data.area || "" );
		          return result || "-";
		      },
				afterSet: function (v, data) {
		          if (view) {
		              $('#province').html(data.province);
		              data.city && $('#city').html(data.city);
		              data.area && $('#area').html(data.area);
		              }
		      },
			required:true,
			readonly:view,
	   },{
		   title:"详细地址",
		   field:"address",
		   maxlength:255,
		   required:true,
		   readonly:view,
	   },{
			field:'name',
			title:"联系人",
			required:true,
			maxlength:32,
			readonly:view
	   },{
			field:'contacts',
			title:"联系方式",
			mobile:true,
			required:true,
			readonly:view
	   },{
			field:'district',
			title:"所属地区",
			type:'select',
		    listCode:"617127",
			params: {
				type: "1"
			},
		    keyName:"code",
		    valueName:"{{county.DATA}}",
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
		addCode:'617110',
		editCode:'617112',
		detailCode: '617116',
		
	});
});