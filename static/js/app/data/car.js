$(function() {

    var columns = [{
        field: '',
        title: '',
        checkbox: true
    },{
    	field:'abbreviation',
    	title:"简称"
    },{
    	field:'address',
    	title:"地址",
    },{
       field:'name',
       title:'联系人'
    },{
    	field:'contacts',
    	title:"联系方式"
    },{
    	field: 'district',
        title: '地区',
        listCode:"617127",
        keyName:"code",
        valueName:"{{county.DATA}}",
        type: 'select',
        search:true,
    },  {
    	title:'备注',
    	field:'remark'
    }
   ];

    buildList({
        router: 'car',
        columns: columns,
        pageCode: '617105',
        deleteCode:"617101"
    });
   
   
});