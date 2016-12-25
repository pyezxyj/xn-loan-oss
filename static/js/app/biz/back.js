$(function () {
    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'code',
        title: '档案号'
    }, {
        field: 'userName',
        title: '借款人',
        type: "select",
        search: true
    }, {
        field : 'loanType',
        title : '贷款品种',
        formatter: Dict.getNameForList('loan_type')
    }, {
        field : 'loanAmount',
        title : '贷款金额',
        formatter: function(v) {
            return moneyFormat(+v);
        }
    }, {
        field: 'status',
        title: '状态',
        formatter: Dict.getNameForList('credit_status'),
        search: true,
        type: 'select',
        key: 'credit_status'
    }, {
        title: '经办银行',
        field: 'jbBank',
        formatter: Dict.getNameForList('jb_bank')
    }, {
        field : '',
        title : '收款金额',
        formatter: function(v) {
            return moneyFormat(+v);
        }
    },{
        field : 'receiptDatetime',
        title : '收款时间',
        formatter: dateTimeFormat
    }];

    buildList({
        router: 'back',
        columns: columns,
        pageCode: '617003'
    });
});