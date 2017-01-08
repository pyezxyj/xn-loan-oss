$(function() {

    var code = getQueryString('code');
    var view = !!getQueryString('v');

    var fields = [{
        title: '业务编号',
        field: 'creditOrderCode',
        readonly: true
    }, {
        field: 'model',
        title: '抵押物',
        readonly: true,
        formatter: function(v, data){
        	return data.licenseNo + " + " + v
        }
    }, {
        title: '车辆号码',
        field: 'licenseNo',
        readonly: true
    }, {
        title: '车架号',
        field: 'chassisNo',
        readonly: true
    },{
        title: '发动机号',
        field: 'engineNo',
        readonly: true
    }, {
        title: '车座位数',
        field: 'seatNum',
        readonly: true,
    },{
        title: '贷款结清日期',
        field: 'loanSettleDatetime',
        formatter:dateFormat,
        type: 'date',
        required:true
    },{
        title: '权证取出日期',
        field: 'propertyOutDatetime',
        formatter:dateFormat,
        type: 'date',
        required:true
    },{
    	field: 'approveNote',
    	title: '备注',
    	maxlength: 255
    },{
    	field:'approverUser',
    	title:'审核人',
    	type:'hidden',
    	value: sessionStorage.getItem('userName')
    }];
    
    var options = {
            fields: fields,
            code: code,
            detailCode:'617035',
     		view: view
        };

    options.buttons = [{
        title: '通过',
        handler: function() {
            if ($('#jsForm').valid()) {
                var data = $('#jsForm').serializeObject();
                $('#jsForm').find('.btn-file [type=file]').parent().next().each(function(i, el) {
                    var values = [];
                    var imgs = $(el).find('.img-ctn');
                    imgs.each(function(index, img) {
                        values.push($(img).attr('data-src') || $(img).find('img').attr('src'));
                    });
                    data[el.id] = values.join('||');
                });
                data['id'] = data['code'];
                data['approveResult'] = '1';
                reqApi({
                    code: "617032",
                    json: data
                }).done(function() {
                    sucDetail();
                });
            }
        }
    },{
        title: '不通过',
        handler: function() {
            if ($('#jsForm').valid()) {
                var data = $('#jsForm').serializeObject();
                $('#jsForm').find('.btn-file [type=file]').parent().next().each(function(i, el) {
                    var values = [];
                    var imgs = $(el).find('.img-ctn');
                    imgs.each(function(index, img) {
                        values.push($(img).attr('data-src') || $(img).find('img').attr('src'));
                    });
                    data[el.id] = values.join('||');
                });
                data['id'] = data['code'];
                data['approveResult'] = '2';
                reqApi({
                    code: "617032",
                    json: data
                }).done(function() {
                    sucDetail();
                });
            }
        }
    },
    {
        title: '返回',
        handler: function() {
            goBack();
        }
    }];

        buildDetail(options);
   
});