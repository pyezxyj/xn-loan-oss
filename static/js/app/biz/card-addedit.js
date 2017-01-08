$(function () {
    var code = getQueryString('code');

    var fields = [{
        field: 'bank',
        title: '代扣卡开户行',
        required: true
    }, {
        field: 'branch',
        title: '支行',
        required: true
    }, {
        field: 'cardNo',
        title: '代扣卡号码',
        required: true,
        bankCard: true,
        '[value]': 'bankcardNo'
    }, {
        field: 'remark',
        title: '备注',
        maxlength: 255
    }];

    var options = {
        fields: fields,
        code: code,
        detailCode: '617016',
        editCode: '617076'
    };

    buildDetail(options);
});