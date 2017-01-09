$(function() {

    var columns = [{
        field: 'type',
        title: '节点名称',
        formatter:Dict.getNameForList("node_type"),
        key:'node_type'
    }, {
        field: 'average',
        title: '平均耗时（时）',
        formatter: function(v) {
            return ((+v/3600).toFixed(2));
        }
    }];

    buildList({
        router: 'node',
        columns: columns,
        pageCode: '617090'
    });
   
   
});