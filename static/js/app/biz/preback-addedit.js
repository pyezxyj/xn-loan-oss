$(function() {

    var code = getQueryString('code');

    var fields = [{
        title: '业务编号',
        field: '',
        required: true,
        readonly: true
    },  {
        title: '贷款品种',
        field: 'loanType',
        formatter: Dict.getNameForList('loan_type'),
        readonly: true
    }, {
        title: '拟贷金额',
        field: 'loanAmount',
        readonly: true,
//        formatter: function(v) {
//            return moneyFormat(+v);
//        }
    }, {
        field: '',
        title: '借款人',
        required: true,
        readonly: true
    }, {
        field: '',
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
        detailCode: '',
        addCode: '',
        editCode: ''
    });

});