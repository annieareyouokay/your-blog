import axios from 'axios';
import configFile from '../config.json';
import authService from './auth.service';
import localStorageService from './localStorage.service';

const http = axios.create({
  baseURL: configFile.apiEndpoint
});

http.interceptors.request.use(
  async function (config) {
    if (configFile.isFireBase) {
      const containSlash = /\/$/gi.test(config.url);
      config.url =
        (containSlash ? config.url.slice(0, -1) : config.url) + '.json';
      const expiresDate = localStorageService.getTokenExpiresDate();
      const refreshToken = localStorageService.getRefreshToken();
      if (refreshToken && expiresDate < Date.now()) {
        const data = authService.refresh();

        localStorageService.setTokens({
          refreshToken: data.refresh_token,
          idToken: data.id_token,
          expiresIn: data.expires_id,
          localId: data.user_id
        });
      }
      const accessToken = localStorageService.getAccessToken();
      if (accessToken) {
        config.params = { ...config.params, auth: accessToken };
      }
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
function transformData(data) {
  return data && !data._id
    ? Object.keys(data).map((key) => ({
        ...data[key]
      }))
    : data;
}

http.interceptors.response.use(
  (res) => {
    if (configFile.isFireBase) {
      res.data = { content: transformData(res.data) };
    }
    return res;
  },
  function (error) {
    const expectedErrors =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;

    if (!expectedErrors) {
      console.error(error);
    }
    return Promise.reject(error);
  }
);

const httpService = {
  get: http.get,
  put: http.put,
  post: http.post,
  delete: http.delete
};

export default httpService;