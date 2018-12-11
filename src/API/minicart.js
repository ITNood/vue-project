import http from '../Http'

export default {
    template: {
        async choices(url,params) {
            //请求。页面中.then执行成功时的操作。
            return await http.post(url,params)
            //return await http.post('/minicart/template/choices')
        },
        async login(url, params) {
            //console.log(data)
            return await http.post(url, params)
        },
    }

}