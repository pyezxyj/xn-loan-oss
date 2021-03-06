$(function () {
    var code = getQueryString('code');

    var fields = [{
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
        title: '贷款品种',
        field: 'loanType',
        type: 'select',
        key: 'loan_type',
        readonly: true
    }, {
        title: '拟贷金额',
        field: 'loanAmount1',
        amount: true,
        '[value]': 'loanAmount',
        readonly: true
    }, {
        title: '借款人信息',
        field: 'creditPeopleList',
        type: 'o2m',
        editTable: true,
        addeditTable: false,
        columns: [{
            field: '',
            title: '',
            checkbox: true
        }, {
            field: 'realName',
            title: '姓名',
            type: 'select',
            readonly: true,
            maxlength: 32
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
            readonly: true,
            idCard: true
        }, {
            field: 'mobile',
            title: '手机号码',
            required: true,
            mobile: true
        }, {
            field: 'workUnit',
            title: '工作单位',
            required: true,
            isNotFace: true,
            maxlength: 32
        }, {
            field: 'workPhone',
            title: '单位电话',
            required: true,
            isNotFace: true,
            tm: true
        }, {
            field: 'address',
            title: '单位地址',
            required: true,
            isNotFace: true,
            maxlength: 64
        }]
    }, {
        field: 'bank',
        title: '代扣卡开户行',
        required: true
    }, {
        field: 'branch',
        title: '支行',
        required: true
    }, {
        field: 'bankcardNo',
        title: '代扣卡号码',
        required: true,
        bankCard: true
    }, {
        field: 'brand',
        title: '汽车品牌',
        required: true,
        isNotFace: true,
        afterSet: function (v, data) {
            $("#brand").val(data.carList && data.carList.length ? data.carList[0].brand : "");
        }
    }, {
        field: 'model',
        title: '汽车型号',
        required: true,
        isNotFace: true,
        afterSet: function (v, data) {
            $("#model").val(data.carList && data.carList.length ? data.carList[0].model : "");
        }
    }, {
        field: 'price',
        title: '车价',
        amount: true,
        required: true,
        onKeyup: function (value) {
            var firstPay = $("#firstAmount").val().replace(/,/g, "");
            var price = value.replace(/,/g, "");
            if ($.isNumeric(price) && $.isNumeric(firstPay)) {
                var rate = (+firstPay * 100 / +price).toFixed(2);
                $("#firstRate").html(rate);
            }
        },
        afterSet: function (v, data) {
            $("#price").val(moneyFormat(data.carList && data.carList.length ? data.carList[0].price : ""));
        }
    }, {
        field: 'firstAmount',
        title: '首付款',
        required: true,
        amount: true,
        onKeyup: function (value) {
            var price = $("#price").val().replace(/,/g, "");
            var firstPay = value.replace(/,/g, "");
            if ($.isNumeric(price) && $.isNumeric(firstPay)) {
                var rate = (+firstPay * 100 / +price).toFixed(2);
                $("#firstRate").html(rate);
            }
        },
        afterSet: function (v, data) {
            $("#firstAmount").val(moneyFormat(data.carList && data.carList.length ? data.carList[0].firstAmount : ""));
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
        field: 'loanAmount',
        title: '贷款额',
        amount: true,
        required: true,
        onKeyup: function (value) {
            var bj = value,
                ll = $("#rate").val(),
                t = $("#loanTerm").val();
            var result = calculateMonthlyPayments(bj, ll, t);
            $("#termAmount").html(result);
        }
    }, {
        field: 'loanTerm',
        title: '贷款期限',
        type: 'select',
        key: 'loan_term',
        required: true,
        onChange: function (value) {
            var bj = $("#loanAmount").val(),
                ll = $("#rate").val(),
                t = value;
            var result = calculateMonthlyPayments(bj, ll, t);
            $("#termAmount").html(result);
        }
    }, {
        field: 'rate',
        title: '综合费率(%)',
        required: true,
        onKeyup: function (value) {
            var bj = $("#loanAmount").val(),
                ll = value,
                t = $("#loanTerm").val();
            var result = calculateMonthlyPayments(bj, ll, t);
            $("#termAmount").html(result);
        }
    }, {
        field: 'termAmount',
        title: '月供',
        readonly: true,
        required: true,
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
        required: true
    }, {
        field: 'fee',
        title: '服务费',
        required: true,
        amount: true
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

    options.buttons.unshift({
        title: '确认',
        handler: function () {
            if ($('#jsForm').valid()) {
                var termAmount = $("#termAmount").text();
                if (!termAmount) {
                    toastr.warning("月供不能为空");
                    return;
                }
                if (!$.isNumeric(termAmount)) {
                    toastr.warning("月供必须为有效数字");
                    return;
                }
                var creditPeopleList = $('#creditPeopleListList').bootstrapTable('getData');
                for (var i = 0; i < creditPeopleList.length; i++) {
                    if (!(creditPeopleList[i].mobile && creditPeopleList[i].workUnit &&
                        creditPeopleList[i].workPhone && creditPeopleList[i].address)) {
                        toastr.info("借款人信息未填完整");
                        return;
                    }
                }
                var data = $('#jsForm').serializeObject();
                for (var i = 0, len = fields.length; i < len; i++) {
                    var item = fields[i];
                    if (item.equal && (!$('#' + item.field).is(':hidden') || !$('#' + item.field + 'Img').is(':hidden'))) {
                        data[item.equal] = $('#' + item.field).val() || $('#' + item.field).attr('src');
                    } else if (item.emptyValue && !data[item.field]) {
                        data[item.field] = item.emptyValue;
                    }
                }
                $('#jsForm').find('.btn-file [type=file]').parent().next().each(function (i, el) {
                    var values = [];
                    var imgs = $(el).find('.img-ctn');
                    imgs.each(function (index, img) {
                        values.push($(img).attr('data-src') || $(img).find('img').attr('src'));
                    });
                    data[el.id] = values.join('||');
                });
                data['termAmount'] = +termAmount * 1000;
                data['id'] = data['code'];
                data["creditPeopleList"] = creditPeopleList;
                reqApi({
                    code: "617005",
                    json: data
                }).done(function () {
                    sucDetail();
                });
            }
        }
    });

    buildDetail(options);
});