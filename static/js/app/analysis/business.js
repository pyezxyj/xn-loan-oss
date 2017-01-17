$(function () {

    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'code',
        title: '业务编号'
    }, {
        field: 'province',
        title: '地区',
        formatter: function (v, data) {
            var result = ( data.province || "" ) + ( data.city || "" ) + ( data.area || "" );
            return result || "-";
        }
    }, {
        field: 'realName',
        title: '借款人',
        search: true
    }, {
        field: 'loanType',
        title: '贷款品种',
        formatter: Dict.getNameForList('loan_type')
    }, {
        field: 'loanAmount',
        title: '贷款金额',
        amount: true
    }, {
        field: 'consume',
        title: '耗时（时）',
        formatter: function (v) {
            if (v != null) {
                return ((+v / 3600000).toFixed(2));
            } else {
                return '-';
            }
        }
    }, {
        field: 'status',
        title: '状态',
        key: 'credit_status',
        formatter: Dict.getNameForList("credit_status"),
        type: "select",
        search: true
    }, {
        field: 'citySelect',
        title: '地区',
        type: 'citySelect',
        visible: false,
        search: true
    }];

    buildList({
        router: 'business',
        columns: columns,
        pageCode: '617015'
    });

    $("#detail1Btn").on("click", function () {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "business_node.html?code=" + selRecords[0].code;
    });
});