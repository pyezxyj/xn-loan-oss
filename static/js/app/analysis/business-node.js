$(function() {
    var code = getQueryString('code');

    var fields = [{
        field: 'node',
        title: '',
        useData: true,
        type: 'o2m',
        readonly: true,
        columns: [{
            field: 'type',
            title: '节点名称',
            formatter:Dict.getNameForList("node_type")
        }, {
            field: 'distance',
            title: '耗时（时）',
            formatter: function (v) {
                if ( v != null ) {
                    return ((+v/3600000).toFixed(2));
                } else{
                    return  '-' ;
                }
            }
        }]
    }];
    var options = {
        fields: fields,
        code: {
            creditOrderCode: code
        },
        detailCode: '617093'
    };

    options.buttons = [{
        title: '返回',
        handler: function () {
            goBack();
        }
    }];

    buildDetail(options);
});