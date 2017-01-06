$(function() {
    var code = getQueryString('code');
    var view = !!getQueryString('v');
    var code = "";
    var fields = [{
        title: '保险公司',
        field: 'company',
        required: true
    }, {
        field: 'type',
        title: '保险类型',
        required: true,
    }, {
        title: '保单号',
        field: 'orderNo',
        required: true
    }, {
        title: '起始日期',
        field: 'endDatetime',
        required: true,
    }, {
        title: '终止日期',
        field: 'startDatetime',
        required: true,
    }, {
        title: '保险金额',
        field: 'amount',
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
            field: 'insureCode',
            title: '保单编号',
            required: true,
            maxlength: 32
        }, {
            field: 'type',
            title: '险种',
            required: true
        }, {
            field: 'amounut',
            title: '保险金额',
            required: true
        }, {
            field: 'remark',
            required: true,
            title: '备注',
            maxlength:255
        }]
    }];

    var options = {
        fields: fields,
        code: code,
        detailCode: '617055'
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
                data["creditList"] = $('#creditAuditListList').bootstrapTable('getData');
                if( !data["creditList"].length ){
                    toastr.info("借款人信息不能为空");
                    return;
                }
                reqApi({
                    code: code ? "617052" : "617050",
                    json: data
                }).done(function() {
                    sucDetail();
                });
            }
        }
    });

    buildDetail(options);
});