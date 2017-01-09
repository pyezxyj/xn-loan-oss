$(function () {

    var code = getQueryString('code');
    var idKindList = Dict.getNameForList('id_kind');
    var creditResultDict = Dict.getNameForList('credit_result');
    var courtResultDict = Dict.getNameForList('court_result');

    var fields = [{
        title: '业务员',
        field: 'salesman',
        required: true,
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
        required: true,
        key: 'car_type',
        formatter: Dict.getNameForList('car_type'),
        readonly: true
    }, {
        title: '经办银行',
        field: 'jbBank',
        type: 'select',
        required: true,
        key: 'jb_bank',
        formatter: Dict.getNameForList('jb_bank'),
        readonly: true
    }, {
        title: '贷款品种',
        field: 'loanType',
        type: 'select',
        required: true,
        key: 'loan_type',
        formatter: Dict.getNameForList('loan_type'),
        readonly: true
    }, {
        title: '拟贷金额',
        field: 'loanAmount',
        formatter: function(v) {
            return moneyFormat(+v);
        },
        amount: true,
        required: true,
        readonly: true
    }, {
        title: "地区",
        field: "citySelect",
        type: 'citySelect',
        readonly: true,
        afterSet: function (v, data) {
            if (data.province == data.city && data.city != data.area) {
                data.city = data.area;
            }
            $('#province').html(data.province);
            $('#city').html(data.city);
            (data.city != data.area) && $('#area').html(data.area);
        }
    }, {
        title: '借款人信息',
        field: 'creditPeopleList',
        type: 'o2m',
        readonly: true,
        columns: [{
            field: 'realName',
            title: '姓名',
            required: true,
            maxlength: 32
        }, {
            field: 'relation',
            title: '关系',
            formatter: Dict.getNameForList('relation'),
            type: 'select',
            key: 'relation',
            required: true
        }, {
            field: 'idKind',
            title: '证件类型',
            formatter: idKindList,
            type: 'select',
            key: 'id_kind',
            required: true
        }, {
            field: 'idNo',
            required: true,
            title: '证件号',
            idCard: true
        }, {
            field: 'accreditPdf',
            title: '授权书',
            type: "img",
            required: true,
            formatter: function (value) {
                var sp = value && value.split('||') || [],
                    html = "";
                sp.length &&
                sp.forEach(function (item, i) {
                    var src = (item.indexOf('http://') > -1 ? item : (OSS.picBaseUrl + '/' + item));
                    i && (html += "、");
                    html += '<a href="' + src + '" target="_blank" style="line-height: inherit;">' + value + '</a>';
                });
                return html;
            },
            formatter1: true
        }, {
            field: 'status',
            title: '证信结果',
            formatter: Dict.getNameForList('audit_status'),
            hidden1: true,
            readonly: true,
            defaultValue: 0,
            type: 'select',
            key: 'audit_status'
        }]
    }, {
        field: 'creditResult',
        title: '资信结果',
        type: 'select',
        key: 'credit_result',
        formatter: creditResultDict,
        required: true,
        afterSet: function (v, data) {
            if(data.creditPeopleList && data.creditPeopleList.length){
                $("#creditResult").val( data.creditPeopleList[0].creditResult );
            }
        }
    }, {
        field: 'creditDescript',
        title: '资信描述',
        required: true,
        type: "textarea",
        normalArea: true,
        maxLength: 255,
        afterSet: function (v, data) {
            if(data.creditPeopleList && data.creditPeopleList.length){
                $("#creditDescript").val(data.creditPeopleList[0].creditDescript);
            }
        }
    }, {
        field: 'courtResult',
        title: '法院结果',
        type: 'select',
        key: 'court_result',
        formatter: courtResultDict,
        required: true,
        afterSet: function (v, data) {
            if(data.creditPeopleList && data.creditPeopleList.length){
                $("#courtResult").val( data.creditPeopleList[0].courtResult );
            }
        }
    }, {
        field: 'courtDescript',
        title: '法院描述',
        required: true,
        type: "textarea",
        normalArea: true,
        maxLength: 255,
        afterSet: function (v, data) {
            if(data.creditPeopleList && data.creditPeopleList.length){
                $("#courtDescript").val(data.creditPeopleList[0].courtDescript);
            }
        }
    }];

    buildDetail({
        fields: fields,
        code: code,
        detailCode: '617016',
        editCode: '617002'
    });

});