$(function () {
    var code1 = getQueryString('code');
    var view = !!getQueryString('v');
    var idKindList = Dict.getNameForList('id_kind');
    var idKind = Dict.getName1("id_kind");
    //var relationDict = Dict.getNameForList('relation')
    var code = "";
    code1 && reqApi({
        code: '617008',
        json: {code: code1},
        sync: true
    }).then(function(data) {
        code = data.refUser;
    });
    var fields = [{
        title: '业务员',
        field: 'salesman',
        required: true,
        type: 'select',
        listCode: "805055",
        keyName: "userId",
        valueName: "loginName",
        params: {
            roleCode: "SR2016122515012575166"
        },
        readonly: view
    }, {
        field: 'car',
        title: '车行',
        type: 'select',
        required: true,
        key: 'car_type',
        formatter: Dict.getNameForList('car_type'),
        readonly: view
    }, {
        title: '经办银行',
        field: 'jbBank',
        type: 'select',
        required: true,
        key: 'jb_bank',
        formatter: Dict.getNameForList('jb_bank'),
        readonly: view
    }, {
        title: '贷款品种',
        field: 'loanType',
        type: 'select',
        required: true,
        key: 'loan_type',
        formatter: Dict.getNameForList('loan_type'),
        readonly: view
    }, {
        title: '拟贷金额',
        field: 'loanAmount',
        formatter: function (v) {
            return moneyFormat(+v);
        },
        amount: true,
        required: true,
        readonly: view
    }, {
        title: '',
        field: 'creditAuditList',
        type: 'o2m',
        editTable: true,
        addeditTable: true,
        readonly: view,
        columns: [{
            field: '',
            title: '',
            checkbox: true
        }, {
            field: 'userName',
            title: '姓名',
            editable1: {
                type: 'text',
                title: '姓名',
                validate: function (value) {
                    value = $.trim(value);
                    if (!value) {
                        return '不能为空';
                    }
                }
            }
        }, {
            field: 'relation',
            title: '关系',
            formatter: Dict.getNameForList('relation'),
            editable1: {
                type: 'select',
                title: '关系',
                source: Dict.getName1('relation'),
                validate: function (value) {
                    value = $.trim(value);
                    if (!value) {
                        return '不能为空';
                    }
                }
            }
        }, {
            field: 'idKind',
            title: '证件类型',
            formatter: idKindList,
            editable1: {
                type: 'select',
                title: '证件类型',
                source: idKind,
                validate: function (value) {
                    value = $.trim(value);
                    if (!value) {
                        return '不能为空';
                    }
                }
            }
        }, {
            field: 'idNo',
            title: '证件号',
            editable1: {
                type: 'text',
                title: '证件号',
                validate: function (value) {
                    value = $.trim(value);
                    if (!value) {
                        return '不能为空';
                    }
                }
            }
        }, {
            field: 'accreditPdf',
            title: '授权书',
            editable1: {
                type: 'text',
                title: '授权书',
                validate: function (value) {
                    value = $.trim(value);
                    if (!value) {
                        return '不能为空';
                    }
                }
            }
        }, {
            field: 'status',
            title: '证信结果',
            formatter: Dict.getNameForList('credit_status'),
            defaultValue: "0"
        }]
    }];

    var options = {
        fields: fields,
        code: code,
        detailCode: '617006',
        // addCode: '617000',
        // editCode: '617002'
    };

    options.buttons = [{
        title: '返回',
        handler: function () {
            goBack();
        }
    }];
    !view && options.buttons.unshift({
        title: '保存',
        handler: function () {
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
                reqApi({
                    code: code ? "617002" : "617000",
                    json: data
                }).done(function() {
                    sucDetail();
                });
            }
        }
    });

    buildDetail(options);
});