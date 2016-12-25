$(function() {

    var code = getQueryString('code');

    var fields = [{
        title: '借款人',
        field: 'userName',
        readonly: true
    }, {
        field: 'idNo',
        title: '身份证',
        readonly: true
    }, {
        title: '贷款品种',
        field: 'loanType',
        formatter: Dict.getNameForList('loan_type'),
        readonly: true
    }, {
        title: '贷款金额',
        field: 'loanAmount',
        formatter: function (v) {
            return moneyFormat(+v);
        },
        readonly: true
    }, {
        title: '经办银行',
        field: 'jbBank',
        type: 'select',
        key: 'jb_bank',
        formatter: Dict.getNameForList('jb_bank'),
        readonly: true
    }, {
        title: '收款金额',
        field: '',
        formatter: function (v) {
            return moneyFormat(+v);
        },
        required: true,
        amount: true
    }, {
        title: '水单',
        field: '',
        required: true,
        type: 'img'
    }];
    var options = {
        fields: fields,
        code: code,
        detailCode: '617006',
        addCode: ''
    };

    options.buttons = [{
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
                reqApi({
                    code: "",
                    json: data
                }).done(function() {
                    sucDetail();
                });
            }
        }
    }, {
        title: '返回',
        handler: function () {
            goBack();
        }
    }];

    buildDetail(options);
});