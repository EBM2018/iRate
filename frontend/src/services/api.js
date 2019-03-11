import { checkAuthResponse } from './auth';
import axios from 'axios';

const apiInstance = axios.create({
    baseURL: '/api',
    timeout: 3000
});

export const handleResponse = ({ data, status, statusText}) => {
    if (status !== 200 || statusText !== 'OK') {
        throw statusText;
    }
    return data;
};

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
    const response = await checkAuthResponse(dataRequest);
    return handleResponse(response);
};
