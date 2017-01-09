$(function() {

    var columns = [{
        field: '',
        title: '',
        checkbox: true
    },{
        field: '',
        title: '节点名称'
    }, {
        field: '',
        title: '平均耗时（时）'
    }];

    buildList({
        router: 'node',
        columns: columns,
        pageCode: '617090'
    });
   
   
});