$(function() {

    var code = getQueryString('code');
    var view = !!getQueryString('v');

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
        title: '车行',
        field: 'car',
        formatter: Dict.getNameForList('car_type'),
        key: "car_type",
        readonly: true
    }, {
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
        title: '发票',
        field: 'receipt',
        type: 'img',
        required: true,
        readonly: view
    }, {
        title: '保单',
        field: 'policy',
        type: 'img',
        required: true,
        readonly: view
    }, {
        title: '合格证/关单',
        field: 'certification',
        type: 'img',
        required: true,
        readonly: view
    }];
    var options = {
        fields: fields,
        code: code,
        detailCode: '617006'
    };
    options.buttons = [{
        title: '返回',
        handler: function() {
            goBack();
        }
    }];
    !view && options.buttons.unshift({
        title: '保存',
        handler: function() {
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
                $('#jsForm').find('.btn-file [type=file]').parent().next().each(function(i, el) {
                    var values = [];
                    var imgs = $(el).find('.img-ctn');
                    imgs.each(function(index, img) {
                        values.push($(img).attr('data-src') || $(img).find('img').attr('src'));
                    });
                    data[el.id] = values.join('||');
                });
                data['id'] = data['code'];
                reqApi({
                    code: "617019",
                    json: data
                }).done(function() {
                    sucDetail();
                });
            }
        }
    });
    buildDetail(options);
});