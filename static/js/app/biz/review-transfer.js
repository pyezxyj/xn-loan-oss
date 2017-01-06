$(function() {
    var code = getQueryString('code');

    var fields = [{
        title: '借款人',
        field: 'realName',
        readonly: true
    }, {
        field: 'idNo',
        title: '身份证',
        readonly: true
    }, {
        title: '贷款品种',
        field: 'loanType',
        type: 'select',
        key: 'loan_type',
        formatter: Dict.getNameForList('loan_type'),
        readonly: true
    }, {
        title: '核定贷款金额',
        field: 'loanAmount',
        formatter: moneyFormat,
        readonly: true
    }, {
        field: 'mobile',
        title: '联系电话',
        readonly: true
    }, {
        field: 'bank',
        title: '车行卡开户行',
        required: true
    }, {
        field: 'branch',
        title: '车行卡开户支行',
        required: true
    }, {
        field: 'cardNo',
        title: '车行卡号码',
        readonly: true
    }, {
        field: 'data',
        title: '水单',
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
                data["remark"] = $("#remark").val();
                reqApi({
                    code: "617012",
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