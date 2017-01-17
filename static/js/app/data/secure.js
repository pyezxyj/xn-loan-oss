$(function () {
    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
    	field:'type',
		title:'类型 ',
		search:true,
		pageList:"617127",
		key:"zone_type",
		formatter: Dict.getNameForList("zone_type"),
		type:'select',
		visible: false
    },{
        field: 'salutation',
        title: '名称',
    }, {
        field: 'prefix',
        title: '保单前缀',
    }, {
        field: 'address',
        title: '地址'
    }, {
        field: 'name',
        title: '联系人'
    }, {
        field: 'contacts',
        title: '联系方式'
    }, {
        field: 'district',
        title: '所属地区',
        listCode:"617127",
        keyName:"code",
        valueName:"{{county.DATA}}",
        type: 'select'
    }, {
        field: 'remark',
        title: '备注'
    }];

    buildList({
        router: 'secure',
        columns: columns,
        pageCode: '617115',
        deleteCode:"617111"
    });

    
});