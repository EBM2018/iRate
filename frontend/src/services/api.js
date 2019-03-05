import { checkAuthResponse } from './auth';
import axios from 'axios';

const apiInstance = axios.create({
    baseURL: '/api',
    timeout: 5000,
    proxy: {
        host: '127.0.0.1',
        port: 4000
    }
});

/**
 *
 * @param {*} url
 * @param {*} type
 * @param {*} options
 * @param {*} bodyReq
 */
export const apiRequest = async (url, type, options = {}) => {
    const dataRequest = await apiInstance[type](`${url}`, {
        //headers: getAuthHeaders(options.headers),
        ...options
    });
    const { data } = await checkAuthResponse(dataRequest);
    return data;
};