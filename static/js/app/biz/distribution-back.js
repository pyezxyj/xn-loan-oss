$(function() {

    var code = getQueryString('code');
    var getIdKindName = Dict.getNameForList("id_kind");
    var fields = [{
        field: 'code1',
        title: '业务编号',
        readonly: true,
        '[value]': "code"
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
        field: 'signPic',
        title: '签字照',
        type: "img",
        required: true
    }, {
        field: 'homePic',
        title: '家访照',
        type: "img",
        required: true
    }, {
        field: 'idInfo',
        title: '身份资料',
        type: "img",
        required: true
    }, {
        field: 'video',
        title: '视频',
        type: "img",
        required: true
    }, {
        field: 'deReport',
        title: '调查报告',
        type: "img",
        required: true
    }, {
        field: 'dcData',
        title: '其他',
        type: "img",
        required: true
    }, {
        field: 'address',
        title: '借款人家庭地址',
        required: true,
        maxLength: 64
    }, {
        title: '备注',
        field: 'remark',
        maxlength: 255
    }];

    buildDetail({
        fields: fields,
        code: code,
        detailCode: '617016',
        editCode: '617004'
    });

});