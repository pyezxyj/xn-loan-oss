$(function() {

    var fields = [{
        title: '经办银行',
        field: 'jbBank',
        type:"select",
        key: 'jb_bank',
        required:true
    }, {
        title: '数据源',
        field: 'repayList',
        type:'file',
        required:true
   }];
    
    var options = {
            fields: fields
        };
    options.buttons = [{
    	title: "保存",
    	handler: function(){
    		if ( $('#jsForm').valid() ) {
                var jbBank = $("#jbBank").val();
                var list = $("#repayList").data("list");
                for(var i = list.length; i;){
                	list[--i].jbBank = jbBank;
                	if( isNaN(list[i].yhAmount) ){
                	    toastr.warning("导入的数据中\"还款金额\"包含非数值");
                	    return;
                    }
                    list[i].yhAmount = +list[i].yhAmount * 1000;
                }
                reqApi({
                	code: "617070",
                	json: {
                		repayList: list
                	}
                }).then(function(){
                	sucDetail();
                })
    		}
    	}
    },{
    	title: "返回",
    	handler: goBack
    }];
    
    buildDetail(options);
    
    
    $("#repayList").on("change",
        getImportDataFun({
            getImportData: function (list) {
                $("#repayList").data("list", list);
                toastr.success('导入成功');
            },
            error: function(){
            	$("#repayList").val("");
            }
        }));
    
    

});