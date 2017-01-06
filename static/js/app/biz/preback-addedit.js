$(function() {

    var code = getQueryString('code');

    var fields = [{
        title: '业务编号',
        field: 'creditOrderCode',
        readonly: true
    },  {
        title: '贷款品种',
        field: 'loanType',
        key: 'loan_type',
        formatter: Dict.getNameForList('loan_type'),
        readonly: true
    }, {
        title: '拟贷金额',
        field: 'loanAmount',
        readonly: true,
        formatter: moneyFormat
    }, {
        field: 'realName',
        title: '借款人',
        readonly: true
    }, {
        field: 'idNo',
        title: '证件号码',
        required: true,
        readonly: true
    }, {
        field: '',
        title: '剩余欠款',
        required: true,
        readonly: true
    },{
        title: '备注',
        field: 'remark',
        maxLength: 255
    }];

    buildDetail({
        fields: fields,
        code: code,
        detailCode: '617082',
        editCode: '617075'
    });

});