$(function () {
    var code = getQueryString('code');
    var spd = {};
    reqApi({
        code: '617127',
        json: {type: 0},
        sync: true
    }).then(function (data) {
    	for(var i = 0; i < data.length; i++){
    		spd[data[i]['code']] = data[i]['county'];
    	}
    })
    
    var fields = [{
        field: 'realName',
        title: '借款人',
        readonly: true
    }, {
        title: '贷款品种',
        field: 'loanType',
        type: 'select',
        key: 'loan_type',
        readonly: true
    }, {
        title: '贷款金额',
        field: 'loanAmount',
        amount: true,
        readonly: true
    }, {
        field: 'status',
        title: '状态',
        formatter: Dict.getNameForList("credit_status"),
        readonly: true
    }, {
        title: '业务员',
        field: 'salesman',
        type: 'select',
        listCode: "805060",
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
        listCode: "617107",
        keyName: "code",
        valueName: "benelux",
        readonly: true
    }, {
        title: '经办银行',
        field: 'jbBank',
        type: 'select',
        key: 'jb_bank',
        readonly: true
    }, {
        title: '借款人信息',
        field: 'creditPeopleList',
        type: 'o2m',
        readonly: true,
        columns: [{
            field: 'realName',
            title: '姓名'
        }, {
            field: 'relation',
            title: '关系',
            formatter: Dict.getNameForList('relation'),
            readonly: true
        }, {
            field: 'idKind',
            title: '证件类型',
            formatter: Dict.getNameForList('id_kind'),
        }, {
            field: 'idNo',
            title: '证件号'
        }, {
            field: 'mobile',
            title: '手机号码'
        }, {
            field: 'workUnit',
            title: '工作单位'
        }, {
            field: 'workPhone',
            title: '单位电话'
        }, {
            field: 'address',
            title: '单位地址'
        }, {
            field: 'status',
            title: '证信结果',
            formatter: Dict.getNameForList('audit_status'),
        }]
    }, {
        title: '调查员',
        field: 'dcUser',
        type: 'select',
        listCode: "805060",
        keyName: "userId",
        valueName: "loginName",
        params: {
            roleCode: "SR2016122515014423585",
            status: "0"
        },
        readonly: true
    }, {
        field: 'signPic',
        title: '签字照',
        type: "img",
        readonly: true
    }, {
        field: 'homePic',
        title: '家访照',
        type: "img",
        readonly: true
    }, {
        field: 'idInfo',
        title: '身份资料',
        type: "img",
        readonly: true
    }, {
        field: 'video',
        title: '视频',
        type: "img",
        readonly: true
    }, {
        field: 'dcReport',
        title: '调查报告',
        type: "img",
        readonly: true
    }, {
        field: 'dcData',
        title: '其他',
        type: "img",
        readonly: true
    }, {
        field: 'address',
        title: '借款人家庭地址',
        readonly: true
    }, {
        field: 'bank',
        title: '代扣卡开户行',
        readonly: true
    }, {
        field: 'branch',
        title: '支行',
        readonly: true
    }, {
        field: 'bankcardNo',
        title: '代扣卡号码',
        readonly: true
    }, {
        field: 'brand',
        title: '汽车品牌',
        readonly: true,
        afterSet: function (v, data) {
            $("#brand").html(data.carList && data.carList.length ? data.carList[0].brand : "");
        }
    }, {
        field: 'model',
        title: '汽车型号',
        readonly: true,
        afterSet: function (v, data) {
            $("#model").html(data.carList && data.carList.length ? data.carList[0].model : "");
        }
    }, {
    	field: 'area',
        title: '上牌地',
        readonly: true,
        type: 'select',
        afterSet: function (v, data) {
            $("#area").html(data.carList && data.carList.length ? spd[data.carList[0].area] : "");
        }
    },{
        field: 'price',
        title: '车价',
        amount: true,
        readonly: true,
        afterSet: function (v, data) {
            $("#price").html(moneyFormat(data.carList && data.carList.length ? data.carList[0].price : ""));
        }
    }, {
        field: 'firstAmount',
        title: '首付款',
        readonly: true,
        amount: true,
        afterSet: function (v, data) {
            $("#firstAmount").html(moneyFormat(data.carList && data.carList.length ? data.carList[0].firstAmount : ""));
        }
    }, {
        field: 'firstRate',
        title: '首付比例(%)',
        readonly: true,
        afterSet: function (v, data) {
            if (data.carList.length) {
                var firstPay = data.carList[0].firstAmount;
                var price = data.carList[0].price;
                if ($.isNumeric(price) && $.isNumeric(firstPay)) {
                    var rate = (+firstPay * 100 / +price).toFixed(2);
                    $("#firstRate").html(rate);
                }
            }
        }
    }, {
        field: 'loanTerm',
        title: '贷款期限',
        readonly: true,
        formatter: Dict.getNameForList("loan_term")
    }, {
        field: 'rate',
        title: '综合费率(%)',
        readonly: true
    }, {
        field: 'termAmount',
        title: '月供',
        readonly: true,
        afterSet: function (v, data) {
            var bj = +data.loanAmount / 1000,
                ll = data.rate,
                t = data.loanTerm;
            var result = calculateMonthlyPayments(bj, ll, t);
            $("#termAmount").html(result);
        }
    }, {
        field: 'urgent',
        title: '紧急度',
        type: 'select',
        key: 'urgent',
        readonly: true
    }, {
        field: 'fee',
        title: '服务费',
        readonly: true,
        amount: true
    }, {
        field: 'fkPdf',
        title: '额度审批补充附件',
        readonly: true,
        type: "img"
    }, {
        field: 'qkPdf',
        title: '请款附件',
        readonly: true,
        type: "img"
    }, {
        field: 'dkPdf',
        title: '打款水单',
        readonly: true,
        type: "img"
    }, {
        title: '发票',
        field: 'invoice',
        type: 'img',
        readonly: true,
        value1: "carList.invoice"
    }, {
        title: '保单',
        field: 'policy',
        type: 'img',
        readonly: true,
        value1: "carList.policy"
    }, {
        title: '合格证/关单',
        field: 'certification',
        type: 'img',
        readonly: true,
        value1: "carList.certification"
    }, {
        title: '收款水单',
        field: 'skPdf',
        required: true,
        readonly: true,
        type: 'img'
    }, {
        title: '备注',
        field: 'remark',
        readonly: true
    }];

    var options = {
        fields: fields,
        code: code,
        detailCode: '617016'
    };

    options.buttons = [{
        title: '返回',
        handler: function () {
            goBack();
        }
    }];

    buildDetail(options);
});