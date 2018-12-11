import axios from 'axios'
import { Loading, Message } from 'element-ui'
import json_response_codes from './codes'
import config from '../config'

// 创建axios实例
const Axios = axios.create({
    baseURL: "http://www.newos.com/",
    timeout: 5000,
    maxRedirects: 1
})
var loadinginstace;

// override axios's default accept
Axios.defaults.headers.common['Accept'] = 'application/json'


// 拦截所有的 api 请求，未来可做权限检查，缓存，代理等
Axios.interceptors.request.use(
    config => {
        // element ui Loading方法
        loadinginstace = Loading.service({ fullscreen: true, text: '稍等片刻...' })
        return config;
    },
    error => {
        loadinginstace.close()
        return Promise.reject(error);
    },

);

// 拦截所有的 api 响应，可以实现自动弹窗报错
Axios.interceptors.response.use(

    net_response => {   // when HTTP_STATUS in [ 200 , 299 ]

        const json_response = net_response.data;
        loadinginstace.close()

        if (json_response.status === json_response_codes.status) {
            return Promise.resolve(json_response.data);
        }

        Message({
            message: json_response.message || '服务器接口异常', type: 'error', duration: 6 * 1000
        });

        return Promise.reject(json_response);
    },
    error => {      // when HTTP_STATUS in [ 300 , 599 ]

        loadinginstace.close()

        if (error === 'cancelled locally') {
            return Promise.reject(error);
        }

        if (error.message === 'timeout of 5000ms exceeded') {
            Message({
                message: '接口请求超时!', type: 'error', duration: 3 * 1000
            });
            return Promise.reject(error);
        }

        if (error.response.status === 429) {
            Message({
                message: '您的请求频率太快啦!', type: 'info', duration: 3 * 1000
            });
            return Promise.reject(error);
        }

        Message({
            message: '接口或网络异常，请稍后再试!', type: 'error', duration: 3 * 1000
        });

        return Promise.reject(error);
    }
);

export default Axios;


