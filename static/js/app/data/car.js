$(function() {

    var columns = [{
        field: '',
        title: '',
        checkbox: true
    },{
    	field:'',
    	title:"简称"
    },{
    	field:'',
    	title:"地址",
    },{
       field:'',
       title:'联系人'
    },{
    	field:'',
    	title:"联系方式"
    },{
        field: 'area',
        title: '地区',
        type:"select",
        search:true,
        formatter: function (v, data) {
            var result = ( data.province || "" ) + ( data.city || "" ) + ( data.area || "" );
            return result || "-";
        }
    
    },  {
    	title:'备注',
    	field:'remark'
    }
   ];

    buildList({
        router: 'car',
        columns: columns,
        pageCode: '',
//        searchParams: {
//            status: "14"
//        }
    });
   
   
});