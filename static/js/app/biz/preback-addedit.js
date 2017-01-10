$(function() {

    var code = getQueryString('code');
    var code1 = getQueryString('code1');
    var data = {};
    reqApi({
        code: "617016",
        json: {
            code: code1
        },
        sync: true
    }).then(function (data1) {
        data = data1;
    });

    var fields = [{
        title: '业务编号',
        field: 'creditOrderCode',
        readonly: true
    },  {
        title: '贷款品种',
        field: 'loanType',
        key: 'loan_type',
        formatter: function(){
            return Dict.getNameForList('loan_type')(data.loanType);
        },
        readonly: true
    }, {
        title: '拟贷金额',
        field: 'loanAmount',
        readonly: true,
        formatter: function(){
            return moneyFormat(data.loanAmount);
        }
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
        field: 'totalAmount',
        title: '剩余欠款',
        amount: true,
        readonly: true
    },{
        title: '备注',
        field: 'remark',
        maxlength: 255
    }];

    buildDetail({
        fields: fields,
        code: code,
        detailCode: '617086',
        editCode: '617075'
    });

});