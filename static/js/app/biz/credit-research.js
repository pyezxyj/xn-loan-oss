$(function() {

    var code = getQueryString('code');
    var fields = [
       {
        field: 'userName',
        title: '调查对象',
        required: true,
        readonly: true
    }, {
        field: 'idNo',
        title: '身份证',
        required: true,
        readonly: true
    }, {
        field: 'relation',
        title: '对象关系',
        type: 'select',
        key: 'relation',
        formatter: Dict.getNameForList('relation'),
        required: true,
        readonly: true
    }, {
        field: '',
        title: '授权书',
        required: true,
        readonly: true
    },{
        field: 'creditResult',
        title: '资信结果',
        type: 'select',
        key: 'credit_result',
        formatter: Dict.getNameForList('credit_result'),
        required: true
    }, {
        field: 'creditDescript',
        title: '资信描述',
        required: true,
        type: "textarea",
        normalArea: true,
        maxLength: 255
    }, {
        field: 'courtResult',
        title: '法院结果',
        type: 'select',
        key: 'court_result',
        formatter: Dict.getNameForList('court_result'),
        required: true
    }, {
        field: 'courtDescript',
        title: '法院描述',
        required: true,
        type: "textarea",
        normalArea: true,
        maxLength: 255
    }];

    buildDetail({
        fields: fields,
        code: code,
        detailCode: '617008',
        addCode: '617009',
        editCode: '617009'
    });

});