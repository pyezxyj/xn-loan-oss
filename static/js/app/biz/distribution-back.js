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
        field : 'signPic',
        title : '签字照',
        type: "img",
        required: true
    }, {
        field : 'homePic',
        title : '家访照',
        type: "img",
        required: true
    }, {
        field : 'idInfo',
        title : '身份资料',
        type: "img",
        required: true
    }, {
        field : 'video',
        title : '视频',
        type: "img",
        required: true
    }, {
        field : 'report',
        title : '调查报告',
        type: "img",
        required: true
    }, {
        field : 'otherData',
        title : '其他',
        type: "img",
        required: true
    }, {
        field : 'homeAddress',
        title : '借款人家庭地址',
        required: true
    }, {
        title: '备注',
        field: 'remark'
    }];

    buildDetail({
        fields: fields,
        code: code,
        detailCode: '617006',
        addCode: '617011',
        editCode: '617011'
    });

});