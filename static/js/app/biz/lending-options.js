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
        number: true,
        readonly: true
    }, {
        field: 'firstAmount',
        title: '首付款',
        readonly: true,
        formatter: moneyFormat
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
        formatter: moneyFormat,
        readonly: true
    }, {
        field: 'loanTerm',
        title: '贷款期限',
        type: 'select',
        key: 'loan_term',
        formatter: Dict.getNameForList('loan_term'),
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
        field: 'remark',
        title: '打回理由',
        readonly: true
    }, {
        field: 'qkPdf',
        title: '附件',
        required: true,
        type: "img"
    }];

    var options = {
        fields: fields,
        code: code,
        detailCode: '617016'
    };

    options.buttons = [{
        title: '确认',
        handler: function() {
            if ($('#jsForm').valid()) {
                var data = { "code": code };
                $('#jsForm').find('.btn-file [type=file]').parent().next().each(function(i, el) {
                    var values = [];
                    var imgs = $(el).find('.img-ctn');
                    imgs.each(function(index, img) {
                        values.push($(img).attr('data-src') || $(img).find('img').attr('src'));
                    });
                    data[el.id] = values.join('||');
                });
                data.data = data.qkPdf;
                reqApi({
                    code: "617008",
                    json: data
                }).done(function() {
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