$(function () {

    var code = getQueryString('code');
    var loanTypeDict = Dict.getNameForList('loan_type');

    var fields = [{
        field: 'creditOrderCode',
        title: '档案号',
        required: true,
        type: 'select',
        pageCode: '617015',
        keyName: 'code',
        valueName:  '{{code.DATA}} - {{realName.DATA}}',
        onChange: function (value) {
            if (value) {
                $("#code1, #loanType, #loanAmount, #realName, #idNo").parent().show();
                reqApi({
                    code: '617016',
                    json: {
                        code: value
                    }
                }).done(function (data) {
                    $("#code1").html(value);
                    $("#loanType").html(loanTypeDict(data.loanType));
                    $("#loanAmount").html(moneyFormat(data.loanAmount));
                    $("#realName").html(data.realName);
                    $("#idNo").html(data.idNo);
                });
                return;
            }
            $("#code1, #loanType, #loanAmount, #realName, #idNo").parent().hide();
        }
    }, {
        title: '业务编号',
        field: 'code1',
        readonly: true,
        hidden: true
    }, {
        title: '贷款品种',
        field: 'loanType',
        formatter: loanTypeDict,
        key: "loan_type",
        readonly: true,
        hidden: true
    }, {
        title: '拟贷金额',
        field: 'loanAmount',
        readonly: true,
        formatter: moneyFormat,
        hidden: true
    }, {
        field: 'realName',
        title: '借款人',
        readonly: true,
        hidden: true
    }, {
        field: 'idNo',
        title: '证件号码',
        readonly: true,
        hidden: true
    }, {
        field: 'type',
        title: '交接事件',
        key: "jiao_event",
        type: 'select',
        required: true
    }, {
        field: 'receiveCompany',
        title: '收件单位',
        key: "receive_company",
        required: true,
        type: 'select'
    }, {
        field: 'receiver',
        title: '收件人',
        required: true
    }, {
        field: 'deliverCompany',
        title: '寄件单位',
        key: "deli_company",
        type: 'select',
        required: true
    }, {
        field: 'deliverer',
        title: '寄件人',
        required: true
    }, {
        field: 'typeNote',
        title: '移交说明',
        required: true
    }, {
        field: 'logiCompany',
        title: '快递',
        key: "wl_company",
        type: 'select',
        required: true
    }, {
        field: 'logiCode',
        title: '快递单号',
        required: true
    }, {
        field: 'deliverDatetime',
        title: '寄件时间',
        type: 'date',
        required: true
    }, {
        field: 'deliverPdf',
        title: '快递单',
        type: 'img',
        required: true
    }];

    buildDetail({
        fields: fields,
        addCode: '617060',
        saveText: '移交'
    });

});