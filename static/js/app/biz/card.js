$(function () {
    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'code',
        title: '编号',
        type: 'hidden'
    }, {
        field: 'realName',
        title: '户名',
        search: true
    }, {
        field: 'bank',
        title: '开户银行'
    }, {
        field: 'branch',
        title: '支行'
    }, {
        field: 'bankcardNo',
        title: '卡号'
    }, {
        field: 'remark',
        title: '备注',
        maxlength: 255

    }];

    buildList({
        router: 'card',
        columns: columns,
        pageCode: '617015',
        searchParams: {
            statusList: [12, 13, 14]
        }
    });
});