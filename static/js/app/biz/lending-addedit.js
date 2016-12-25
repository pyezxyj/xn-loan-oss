$(function () {
    var code = getQueryString('code');

    var fields = [{
        title: '业务员',
        field: 'salesman',
        type: 'select',
        listCode: "805055",
        keyName: "userId",
        valueName: "loginName",
        params: {
            roleCode: "SR2016122515012575166"
        },
        readonly: true
    }, {
        field: 'car',
        title: '车行',
        type: 'select',
        key: 'car_type',
        formatter: Dict.getNameForList('car_type'),
        readonly: true
    }, {
        title: '经办银行',
        field: 'jbBank',
        type: 'select',
        key: 'jb_bank',
        formatter: Dict.getNameForList('jb_bank'),
        readonly: true
    }, {
        title: '贷款品种',
        field: 'loanType',
        type: 'select',
        key: 'loan_type',
        formatter: Dict.getNameForList('loan_type'),
        readonly: true
    }, {
        title: '拟贷金额',
        field: 'loanAmount',
        formatter: function (v) {
            return moneyFormat(+v);
        },
        readonly: true
    }, {
        title: '',
        field: 'creditAuditList',
        type: 'o2m',
        editTable: true,
        addeditTable: false,
        columns: [{
            field: 'userName',
            title: '姓名',
            type: 'select'
        }, {
            field: 'relation',
            title: '关系',
            type: 'select',
            formatter: Dict.getNameForList('relation')
        }, {
            field: 'idKind',
            title: '证件类型',
            type: 'select',
            formatter: Dict.getNameForList('id_kind')
        }, {
            field: 'idNo',
            title: '证件号'
        }, {
            field: 'mobile',
            title: '手机号码',
            editable1: {
                type: 'text',
                title: '手机号码',
                validate: function (value) {
                    value = $.trim(value);
                    if (!value) {
                        return '不能为空';
                    }
                }
            }
        }, {
            field: 'workUnit',
            title: '工作单位',
            editable1: {
                type: 'text',
                title: '工作单位',
                validate: function (value) {
                    value = $.trim(value);
                    if (!value) {
                        return '不能为空';
                    }
                }
            }
        }, {
            field: 'workPhone',
            title: '单位电话',
            editable1: {
                type: 'text',
                title: '单位电话',
                validate: function (value) {
                    value = $.trim(value);
                    if (!value) {
                        return '不能为空';
                    }
                }
            }
        }, {
            field: 'workAddress',
            title: '单位地址',
            editable1: {
                type: 'text',
                title: '单位地址',
                validate: function (value) {
                    value = $.trim(value);
                    if (!value) {
                        return '不能为空';
                    }
                }
            }
        }]
    }, {
        field: 'cardBank',
        title: '代扣卡开户行',
        required: true
    }, {
        field: 'cardNumber',
        title: '代扣卡号码',
        required: true
    }, {
        field: 'brand',
        title: '汽车品牌',
        required: true
    }, {
        field: 'model',
        title: '汽车型号',
        required: true
    }, {
        field: 'price',
        title: '车价',
        amount: true,
        required: true,
        onKeyup: function (value) {
            if ($.isNumeric(value) && $.isNumeric($("#firstPay").val())) {
                $("#firstRate").val(+$("#firstPay").val() / +value)
            }
        }
    }, {
        field: 'firstPay',
        title: '首付款',
        required: true,
        amount: true,
        afterSet: function (v, data) {
            if ($.isNumeric(v) && $.isNumeric($("#firstPay").val())) {
                $("#firstRate").html(+v / +$("#price").val())
            }
        },
        onKeyup: function (value) {
            if ($.isNumeric(value) && $.isNumeric($("#price").val())) {
                $("#firstRate").html(+value / +$("#price").val());
            }
        }
    }, {
        field: 'firstRate',
        title: '首付比例',
        readonly: true
    }, {
        field: 'realLoanAmount',
        title: '贷款额',
        required: true
    }, {
        field: 'loanTerm',
        title: '贷款期限',
        type: 'select',
        key: 'loan_term',
        formatter: Dict.getNameForList('loan_term'),
        required: true
    }, {
        field: 'sumRate',
        title: '综合费率',
        required: true
    }, {
        field: '',
        title: '月供',
        readonly: true
    }, {
        field: 'fee',
        title: '服务费',
        required: true
    }, {
        field: 'urgency',
        title: '紧急度',
        type: 'select',
        key: 'urgency',
        formatter: Dict.getNameForList('urgency'),
        required: true
    }];

    var options = {
        fields: fields,
        code: code,
        detailCode: '617006'
    };

    options.buttons = [{
        title: '返回',
        handler: function () {
            goBack();
        }
    }];

    options.buttons.unshift({
        title: '确认',
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
                    code: "617012",
                    json: data
                }).done(function () {
                    sucDetail();
                });
            }
        }
    });

    buildDetail(options);
});