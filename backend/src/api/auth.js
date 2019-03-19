const fetch = require('node-fetch');
const jwt = require('jsonwebtoken');
const url = require('url');
const HttpsProxyAgent = require('https-proxy-agent');

const CHECK_TOKEN_PATH = '/api/checkandrefreshtoken';
const LOGIN_PATH = '/login';

/**
 * Express middleware to handle Authorization header, check token, and populate req.user with
 * the user informations. It will use userFactory if provided with the token data, and wait
 * for the result. The result or the token data will be populated into req.user field.
 * If authentication fails, it won't block requests, but req.user will be undefined.
 * If you want to protect route, use **requireAuth** middleware.
 *
 * @param {String} provider Linkapp URL
 * @param {Function} [userFactory] method called with token user data
 */
module.exports.initialize = ({ provider, userFactory }) => async (req, res, next) => {
  const authHeader = req.headers.authorization || '';

  const response = await fetch(url.resolve(provider, CHECK_TOKEN_PATH), {
    headers: { Authorization: authHeader },
    agent: process.env.AUTH_PROXY ? new HttpsProxyAgent(process.env.AUTH_PROXY) : null,
  });

  if (response.status !== 200) { return next(); }

  const { success, newToken: updatedToken } = await response.json();

  if (!success) return next();

  const [authToken] = updatedToken.split(' ');
  const userData = jwt.decode(authToken);
  const userFactoryResponse = typeof (userFactory) === 'function' && userFactory(userData);

  const factoryResponseHandled = userFactoryResponse
    && (typeof (userFactoryResponse.then) === 'function' ? await userFactoryResponse : userFactoryResponse);

  res.locals.user = factoryResponseHandled || userData;

  return next();
};

/**
 * Express middleware to protect routes from unauthenticated users. It will check for a
 * req.user field, so you need to use **initialize** middleware before.
 * If req.user is undefined, it will prevent next routes to load and send back a 401 response with
 * the login route in the body.
 */
module.exports.requireAuth = ({ provider }) => (req, res, next) => {
  // TODO change that to if(req.user)
  if (!req.user) { return next(); }

  return res.status(401).send({ login: url.resolve(provider, LOGIN_PATH) });
};
