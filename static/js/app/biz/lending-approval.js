$(function() {
    var code = getQueryString('code');

    var fields = [{
        title: '业务员',
        field: 'saleman',
        type: 'select',
        key: 'car_type',
        formatter: Dict.getNameForList('car_type'),
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
        amount: true,
        readonly: true
    }, {
        field: 'firstPay',
        title: '首付款',
        amount: true,
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
        required: true,
        amount: true,
        onKeyup: function(value) {
            if ($.isNumeric(value)) {

            }
        }
    }, {
        field: 'loanTerm',
        title: '贷款期限',
        type: 'select',
        key: 'loan_term',
        formatter: Dict.getNameForList('loan_term'),
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
        field: 'supplyInfo',
        title: '其他补充资料',
        type: "img",
        readonly: true
    }, {
        field: 'remark',
        title: '批复意见',
        maxlength: 255
    }];

    var options = {
        fields: fields,
        code: code,
        detailCode: '617006'
    };

    options.buttons = [{
        title: '直接否决',
        handler: function() {
            var data = {};
            data['code'] = code;
            data["approveResult"] = "2";
            reqApi({
                code: "617013",
                json: data
            }).done(function() {
                sucDetail();
            });
        }
    }, {
        title: '补充资料',
        handler: function() {
            var data = {};
            data['code'] = code;
            data["approveResult"] = "3";
            reqApi({
                code: "617013",
                json: data
            }).done(function() {
                sucDetail();
            });
        }
    }, {
        title: '调额通过',
        handler: function() {
            if ($('#jsForm').valid()) {
                var data = {};
                data['code'] = code;
                data["approveResult"] = "4";
                data["realLoanAmount"] = +$("#realLoanAmount").val() * 1000;
                reqApi({
                    code: "617013",
                    json: data
                }).done(function() {
                    sucDetail();
                });
            }
        }
    }, {
        title: '直接通过',
        handler: function() {
            var data = {};
            data['code'] = code;
            data["approveResult"] = "5";
            reqApi({
                code: "617013",
                json: data
            }).done(function() {
                sucDetail();
            });
        }
    }];

    buildDetail(options);
});