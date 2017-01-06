$(function() {

    var code = getQueryString('code');
    var getIdKindName = Dict.getNameForList("id_kind");
    var fields = [{
        field: 'code',
        title: '业务编号',
        readonly: true
    }, {
        title: '贷款品种',
        field: 'loanType',
        formatter: Dict.getNameForList('loan_type'),
        readonly: true
    }, {
        title: '拟贷金额',
        field: 'loanAmount',
        readonly: true,
        formatter: function(v) {
            return moneyFormat(+v);
        }
    }, {
        title: '借款人',
        field: 'realName',
        readonly: true
    }, {
        title: '证件号码',
        field: 'idNo',
        readonly: true,
        formatter: function (v, data) {
            return getIdKindName(data.idKind) + " - " + v;
        }
    }, {
        field: 'mobile',
        title: '联系电话',
        required: true,
        mobile: true
    }, {
        field: 'dcUser',
        title: '调查员',
        type: "select",
        listCode: "805055",
        keyName: "userId",
        required: true,
        valueName: "loginName",
        params: {
            roleCode: "SR2016122515014423585",
            status: "0"
        },
        required: true
    }, {
        title: '备注',
        field: 'remark',
        maxLength: 255
    }];

    buildDetail({
        fields: fields,
        code: code,
        detailCode: '617016',
        editCode: '617003'
    });

});