$(function() {

    var code = getQueryString('code');

    var fields = [{
        title: '借款人',
        field: 'userName',
        required: true,
        readonly: true
    }, {
        title: '身份证',
        field: 'idNo',
        required: true,
        readonly: true
    }, {
        title: '贷款品种',
        field: 'loanType',
        formatter: Dict.getNameForList('loan_type'),
        required: true,
        readonly: true
    }, {
        title: '拟贷金额',
        field: 'loanAmount',
        required: true,
        readonly: true,
        formatter: function(v) {
            return moneyFormat(+v);
        }
    }, {
        field: 'mobile',
        title: '联系电话',
        required: true,
        mobile: true
    }, {
        field: 'investigator',
        title: '调查员',
        type: "select",
        listCode: "805055",
        keyName: "userId",
        required: true,
        valueName: "loginName",
        params: {
            roleCode: "SR2016122515014423585"
        },
        required: true
    }, {
        title: '备注',
        field: 'remark'
    }];

    buildDetail({
        fields: fields,
        code: code,
        detailCode: '617006',
        addCode: '617010',
        editCode: '617010'
    });

});