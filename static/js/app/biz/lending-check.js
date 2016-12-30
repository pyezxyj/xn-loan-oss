$(function() {
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
        formatter: function(v) {
            return moneyFormat(+v);
        },
        readonly: true
    }, {
        title: '借款人信息',
        field: 'creditAuditList',
        type: 'o2m',
        readonly: true,
        columns: [{
            field: 'userName',
            title: '姓名',
            type: 'select',
            readonly: true
        }, {
            field: 'relation',
            title: '关系',
            type: 'select',
            formatter: Dict.getNameForList('relation'),
            readonly: true
        }, {
            field: 'idKind',
            title: '证件类型',
            type: 'select',
            formatter: Dict.getNameForList('id_kind'),
            readonly: true
        }, {
            field: 'idNo',
            title: '证件号',
            readonly: true
        }, {
            field: 'mobile',
            title: '手机号码',
            readonly: true
        }, {
            field: 'workUnit',
            title: '工作单位',
            readonly: true
        }, {
            field: 'workPhone',
            title: '单位电话',
            readonly: true
        }, {
            field: 'workAddress',
            title: '单位地址',
            readonly: true
        }]
    }, {
        field: 'cardBank',
        title: '代扣卡开户行',
        readonly: true
    }, {
        field: 'cardNumber',
        title: '代扣卡号码',
        readonly: true
    }, {
        field: 'brand',
        title: '汽车品牌',
        readonly: true
    }, {
        field: 'model',
        title: '汽车型号',
        readonly: true
    }, {
        field: 'price',
        title: '车价',
        number: true,
        readonly: true
    }, {
        field: 'firstPay',
        title: '首付款',
        number: true,
        afterSet: function(v, data) {
            if ($.isNumeric(data.firstPay) && $.isNumeric(data.price)) {
                $("#firstRate").val(+data.firstPay / +data.price)
            }
        },
        readonly: true
    }, {
        field: 'firstRate',
        title: '首付比例',
        readonly: true
    }, {
        field: 'realLoanAmount',
        title: '贷款额',
        amount: true,
        readonly: true
    }, {
        field: 'loanTerm',
        title: '贷款期限',
        type: 'select',
        key: 'urgency',
        formatter: Dict.getNameForList('loanTerm'),
        readonly: true
    }, {
        field: 'sumRate',
        title: '综合费率',
        readonly: true
    }, {
        field: '',
        title: '月供',
        readonly: true
    }, {
        field: 'fee',
        title: '服务费',
        readonly: true
    }, {
        field: 'urgency',
        title: '紧急度',
        type: 'select',
        key: 'urgency',
        formatter: Dict.getNameForList('urgency'),
        readonly: true
    }, {
        field: 'remark',
        title: '备注',
        maxlength: 255
    }];

    var options = {
        fields: fields,
        code: code,
        detailCode: '617006'
    };

    options.buttons = [{
        title: '通过',
        handler: function() {
            var data = {};
            data['code'] = code;
            data["approveResult"] = "1";
            reqApi({
                code: "617013",
                json: data
            }).done(function() {
                sucDetail();
            });
        }
    }, {
        title: '不通过',
        handler: function() {
            var data = {};
            data['code'] = code;
            data["approveResult"] = "0";
            reqApi({
                code: "617013",
                json: data
            }).done(function() {
                sucDetail();
            });
        }
    }, {
        title: '返回',
        handler: function() {
            goBack();
        }
    }];

    buildDetail(options);
});