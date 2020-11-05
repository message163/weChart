import Mock from 'mockjs'

Mock.mock('/api/getCart/list', {
    "data|5-10": [
        {
            name: '@cname',
            'birthday': '@date("HH:mm")', //日期
            pic() {
                return Mock.Random.image('125x125', Mock.Random.color(), '#757575', 'png', this.name.substr(0,1))
            },
            title: "@ctitle(7, 15)"
        }
    ]
})