$(function () {
    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'name',
        title: '借款人',
        search: true
    }, {
        field: 'level',
        title: '状态',
        formatter: Dict.getNameForList(''),
        search: true,
        type: 'select',
        key: ''
    }];

    buildList({
        router: 'back',
        columns: columns,
        pageCode: '',
    });
    $('#changeBtn').click(function () {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "back.html?code=" + selRecords[0].code + "&name=" + encodeURI(encodeURI(selRecords[0].name));
    });
});