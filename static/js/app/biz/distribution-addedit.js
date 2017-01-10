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
        key:'loan_type',
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
        // listCode: "805060",
        // keyName: "userId",
        // required: true,
        // valueName: "loginName",
        // params: {
        //     roleCode: "SR2016122515014423585",
        //     status: "0"
        // },
        data: {},
        afterSet: function (v, data) {
            var province = data.province;
            var city = data.city;
            var area = data.area;
            // if (province == city && city == area) {
            //     city = "";
            //     area = "";
            // } else if (province == city && city != area) {
            //     city = area;
            // }
            var dcUser = $('#dcUser');
            if(!province){
                dcUser.renderDropdown2({});
                return;
            }
            dcUser.renderDropdown({
                listCode: "805060",
                params: {
                    roleCode: "SR2016122515014423585",
                    status: "0",
                    province: province,
                    city: city,
                    area: area
                },
                keyName: "userId",
                valueName: "loginName"
            });
        },
        required: true
    }, {
        title: '备注',
        field: 'remark',
        maxlength: 255
    }];

    buildDetail({
        fields: fields,
        code: code,
        detailCode: '617016',
        editCode: '617003'
    });

});