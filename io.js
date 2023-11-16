import axios from 'axios';
import store from '../store';
import Toast from 'react-native-toast-message'; // Import the react-native-toast-message package

const baseURL = '/unite49/h5/';

axios.defaults.timeout = 30000;
axios.defaults.withCredentials = true;
axios.interceptors.request.use(config => {
    config.headers['lotteryType'] =
        config.headers['lotteryType'] || store.state.lotteryType || 1;
    return config;
});

export default async (option, fn, error) => {
    const opt = {
        method: 'get',
        ...option,
    };

    if (opt.url[0] !== '/') {
        opt.url = baseURL + opt.url;
    }

    try {
        const response = await axios(opt);

        const data = response.data;
        if (data.code === 10000 && data.subCode === 10000) {
            fn && fn(data);
        } else {
            error && error(data);

            if (data.subCode !== 40001) {
                Toast.show({
                    type: 'error',
                    text1: data.subMsg,
                    position: 'bottom',
                });
            }
        }

        return data;
    } catch (e) {
        let msg = '';
        if (e && e.code && e.code === 'ECONNABORTED') {
            msg = '网络连接超时，请检查网络';
        } else {
            msg = e.message || e.toString();
        }

        const obj = {
            code: -50,
            msg: msg,
        };

        Toast.show({
            type: 'error',
            text1: obj.msg,
            position: 'bottom',
        });

        error && error(obj);

        throw obj;
    }
};
