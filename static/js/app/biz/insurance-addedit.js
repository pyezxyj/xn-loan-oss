$(function() {
    var code = getQueryString('code');
    var view = !!getQueryString('v');
  
    var fields = [{
        title: '保险公司',
        field: 'company',
        readonly:view,
        required: true
    }, {
        field: 'type',
        title: '保险类型',
        required: true,
        readonly:view
    }, {
        title: '保单号',
        field: 'orderNo',
        required: true,
        readonly:view
    }, {
        title: '起始日期',
        field: 'startDatetime',
        type: 'date',
        required: true,
        formatter:dateFormat,
        readonly:view
    }, {
        title: '终止日期',
        field: 'endDatetime',
        formatter:dateFormat,
        type: 'date',
        required: true,
        readonly:view
    }, {
        title: '',
        field: 'insureTypeList',
        type: 'o2m',
        editTable: true,
        addeditTable: true,
        readonly: view,
        requird:true,
        columns: [{
            field: '',
            title: '',
            checkbox: true
        }, {
            field: 'type',
            title: '险种',
            required: true,
            readonly: view,
            maxlength: 32
        }, {
            field: 'amount',
            title: '金额',
            amount: true,
            formatter:moneyFormat,
            required: true,
            readonly: view
        }]
    }, {
        field: 'amount',
        title: '保险金额',
        amount: true,
        required: true,
        readonly:view
    }, {
        field: 'remark',
        title: '备注',
        maxlength:255,
        readonly:view
    }];

    var options = {
        fields: fields,
        code: code,
        detailCode: '617046'
    };

    options.buttons = [{
        title: '返回',
        handler: function() {
            goBack();
        }
    }];
    !view && options.buttons.unshift({
        title: '确认',
        handler: function() {
            if ($('#jsForm').valid()) {
                var data = $('#jsForm').serializeObject();
                for (var i = 0, len = fields.length; i < len; i++) {
                    var item = fields[i];
                    if (item.equal && (!$('#' + item.field).is(':hidden') || !$('#' + item.field + 'Img').is(':hidden'))) {
                        data[item.equal] = $('#' + item.field).val() || $('#' + item.field).attr('src');
                    } else if (item.emptyValue && !data[item.field]) {
                        data[item.field] = item.emptyValue;
                    }
                }
                data['id'] = data['code'];
                data["insureTypeList"] = $('#insureTypeListList').bootstrapTable('getData');
                if( !data["insureTypeList"].length ){
                    toastr.info("险种信息不能为空");
                    return;
                }
                reqApi({
                    code: "617040",
                    json: data
                }).done(function() {
                    sucDetail();
                });
            }
        }
    });

    buildDetail(options);
});