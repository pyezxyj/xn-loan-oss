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
            roleCode: "SR2016122515012575166",
            status: "0"
        },
        readonly: true
    }, {
        field: 'carStore',
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
        field: 'creditPeopleList',
        type: 'o2m',
        readonly: true,
        columns: [{
            field: 'realName',
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
        field: 'bank',
        title: '代扣卡开户行',
        readonly: true
    }, {
        field: 'branch',
        title: '支行',
        readonly: true
    }, {
        field: 'cardNo',
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
        formatter: moneyFormat,
        readonly: true
    }, {
        field: 'firstAmount',
        title: '首付款',
        formatter: moneyFormat,
        readonly: true
    }, {
        field: 'firstRate',
        title: '首付比例(%)',
        readonly: true,
        afterSet: function(v, data) {
            var firstPay = data.firstAmount;
            var price = data.price;
            if ($.isNumeric(price) && $.isNumeric(firstPay)) {
                var rate = (+firstPay * 100 / +price).toFixed(2);
                $("#firstRate").html(rate);
            }
        }
    }, {
        field: 'loanAmount',
        title: '贷款额',
        amount: true,
        readonly: true
    }, {
        field: 'loanTerm',
        title: '贷款期限',
        type: 'select',
        key: 'loan_term',
        formatter: Dict.getNameForList('loanTerm'),
        readonly: true
    }, {
        field: 'rate',
        title: '综合费率(%)',
        readonly: true
    }, {
        field: 'termAmount',
        title: '月供',
        readonly: true,
        formatter: moneyFormat
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
        field: 'approveNote',
        title: '备注',
        maxlength: 255,
        isNotFace: true
    }];

    var options = {
        fields: fields,
        code: code,
        detailCode: '617016'
    };

    options.buttons = [{
        title: '通过',
        handler: function() {
            if ($('#jsForm').valid()) {
                var data = {};
                data['code'] = code;
                data['approverUser'] = sessionStorage.getItem('userName');
                data["approveResult"] = "1";
                data["approveNote"] = $("#approveNote").val();
                reqApi({
                    code: "617006",
                    json: data
                }).done(function () {
                    sucDetail();
                });
            }
        }
    }, {
        title: '不通过',
        handler: function() {
            if ($('#jsForm').valid()) {
                var data = {};
                data['code'] = code;
                data['approverUser'] = sessionStorage.getItem('userName');
                data["approveResult"] = "0";
                data["approveNote"] = $("#approveNote").val();
                reqApi({
                    code: "617006",
                    json: data
                }).done(function () {
                    sucDetail();
                });
            }
        }
    }, {
        title: '返回',
        handler: function() {
            goBack();
        }
    }];

    buildDetail(options);
});