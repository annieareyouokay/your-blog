import httpService from './http.service';

const articlesEndpoint = 'articles/';

const articlesService = {
  get: async () => {
    const { data } = await httpService.get(articlesEndpoint);
    return data;
  },
  post: async (payload) => {
    const { data } = await httpService.post(articlesEndpoint, payload);
    return data;
  }
};

export default articlesService;
