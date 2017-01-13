$(function () {
    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
    	field:'',
    	title:'类型',
    	hidden:true,
    	type:"select",
    	search:true
    },{
        field: '',
        title: '名称',
  
    }, {
        field: '',
        title: '保单前缀',
    }, {
        field: '',
        title: '地址'
    }, {
        field: '',
        title: '联系人'
    }, {
        field: '',
        title: '联系方式'
    }, {
        field: '',
        title: '所属地区'
    }, {
        field: 'remark',
        title: '备注'
    }];

    buildList({
        router: 'secure',
        columns: columns,
        pageCode: ''
    });

    
});