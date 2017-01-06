$(function () {

    var code = getQueryString('code');
    var fields = [{
        title: '业务员',
        field: 'salesman',
        required: true,
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
            type1: "img",
            required: true,
            formatter: function (value, row) {
                return '<a href="' + value + '" target="_blank">' + value + '</a>';
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
        formatter: Dict.getNameForList('credit_result'),
        required: true
    }, {
        field: 'creditDescript',
        title: '资信描述',
        required: true,
        type: "textarea",
        normalArea: true,
        maxLength: 255
    }, {
        field: 'courtResult',
        title: '法院结果',
        type: 'select',
        key: 'court_result',
        formatter: Dict.getNameForList('court_result'),
        required: true
    }, {
        field: 'courtDescript',
        title: '法院描述',
        required: true,
        type: "textarea",
        normalArea: true,
        maxLength: 255
    }];

    buildDetail({
        fields: fields,
        code: code,
        detailCode: '617016',
        editCode: '617002'
    });

});