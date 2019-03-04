/**
 * Inspired from https://github.com/EBM-2017-2018/ebm-auth
 */
import qs from 'qs';

const TOKEN_KEY = 'irate_token';
const never = () => new Promise(() => {});

let token = localStorage.getItem(TOKEN_KEY) || null;

export const getToken = () => token;

export const setToken = updatedToken => {
    localStorage.setItem(TOKEN_KEY, updatedToken);
    token = updatedToken;
}

export const deleteToken = () => {
    localStorage.removeItem(TOKEN_KEY);
    token = null;
}

export const getAuthHeaders = (headers = {}) => (
    {
        ...headers,
        ...{
            Authorization: `JWT ${token}`
        }
    }
);

const query = { ...qs.parse(document.location.search.slice(1)) };
if (query.token) {
    setToken(query.token.split(' ')[1]);
    delete query.token;
    const newQuery = qs.stringify(query);
    window.history.replaceState(null, null, document.location.pathname + (newQuery.length > 0 ? '?' + newQuery : ''));
}

/**
 * HTTP response middleware to handle 403 errors.
 * You can use it with fetch, superagent or axios.
 *
 * @param {Function|Response} response
 */
export const checkAuthResponse = async (response) => {
    if ((response.status || response.response.status) === 401) {
        const body = typeof (response.json) === 'function' ? (await response.json()) : (
            response.data ||
            response.body ||
            (response.response && (response.response.data || response.response.body))
        );
        window.location.replace(
            `${body.login}?redirect=${encodeURIComponent(document.location.href)}`
        );
        await never();
    } else return response;
};