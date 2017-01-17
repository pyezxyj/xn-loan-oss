$(function () {
    var code = getQueryString('code');
    var view = !!getQueryString('v');
    var idKindList = Dict.getNameForList('id_kind');
    var sale;
    if (view) {
        sale = {
            title: '业务员',
            field: 'salesman',
            required: true,
            type: 'select',
            listCode: "805060",
            keyName: "userId",
            valueName: "loginName",
            params: {
                roleCode: "SR2016122515012575166",
                status: "0"
            },
            readonly: view
        };
    } else {
        sale = {
            title: '业务员',
            field: 'salesman',
            required: true,
            type: 'select',
            data: {},
            readonly: view
        };
    }

    var fields = [{
        title: "地区",
        field: "province",
        type: 'select',
        pageCode:"617127",
        keyName:"code",
        valueName:"{{county.DATA}}",
        readonly: view,
        required: true,
        onChange: function (data) {
            var salesman = $('#salesman');
            var carStore = $("#carStore");
            if(!data){
                salesman.renderDropdown2({});
                carStore.renderDropdown2({});
                return;
            }
            salesman.renderDropdown({
                listCode: "805060",
                params: {
                    roleCode: "SR2016122515012575166",
                    status: "0",
                    province: data,
                },
                keyName: "userId",
                valueName: "loginName"
            });
            carStore.renderDropdown({
                listCode: "617107",
                params: {
                    "district": data
                },
                keyName: "code",
                valueName: "benelux"
            });
        },
//        afterSet: function (v, data) {
//            if (view) {
//                $('#province').html(data.province);
//                data.city && $('#city').html(data.city);
//                data.area && $('#area').html(data.area);
//            }
//        }
    }, sale, {
        field: 'carStore',
        title: '车行',
        type: 'select',
        data: {},
        readonly: view,
        required:true,
    }, {
        title: '经办银行',
        field: 'jbBank',
        type: 'select',
        required: true,
        key: 'jb_bank',
        readonly: view
    }, {
        title: '贷款品种',
        field: 'loanType',
        type: 'select',
        required: true,
        key: 'loan_type',
        readonly: view
    }, {
        title: '拟贷金额',
        field: 'loanAmount',
        formatter: function (v) {
            return moneyFormat(+v);
        },
        amount: true,
        required: true,
        readonly: view
    }, {
        title: '借款人信息',
        field: 'creditPeopleList',
        type: 'o2m',
        editTable: true,
        addeditTable: true,
        readonly: view,
        columns: [{
            field: '',
            title: '',
            checkbox: true
        }, {
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
            required: true,
            value: "1"
        }, {
            field: 'idNo',
            required: true,
            title: '证件号',
            idCard: true
        }, {
            field: 'accreditPdf',
            title: '授权书',
            type: "img",
            required: true,
            formatter: function (value) {
                var sp = value && value.split('||') || [],
                    html = "";
                sp.length &&
                sp.forEach(function (item, i) {
                    var src = (item.indexOf('http://') > -1 ? item : (OSS.picBaseUrl + '/' + item));
                    i && (html += "、");
                    html += '<a href="' + src + '" target="_blank" style="line-height: inherit;">' + value + '</a>';
                });
                return html;
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
    }];

    var options = {
        fields: fields,
        code: code,
        detailCode: '617016'
    };

    options.buttons = [{
        title: '返回',
        handler: function () {
            goBack();
        }
    }];
    !view && options.buttons.unshift({
        title: '确认',
        handler: function () {
            if ($('#jsForm').valid()) {
                var data = $('#jsForm').serializeObject();
                for (var i = 0, len = fields.length; i < len; i++) {
                    var item = fields[i];
                    if (item.equal && (!$('#' + item.field).is(':hidden') || !$('#' + item.field + 'Img').is(':hidden'))) {
                        data[item.equal] = $('#' + item.field).val() || $('#' + item.field).attr('src');
                    } else if (item.emptyValue && !data[item.field]) {
                        data[item.field] = item.emptyValue;
                    }
                }
                data['id'] = data['code'];
                data["creditPeopleList"] = $('#creditPeopleListList').bootstrapTable('getData');
                if (!data["creditPeopleList"].length) {
                    toastr.info("借款人信息不能为空");
                    return;
                }
                reqApi({
                    code: code ? "617001" : "617000",
                    json: data
                }).done(function () {
                    sucDetail();
                });
            }
        }
    });
    buildDetail(options);
});