import httpService from './http.service';

const articlesEndpoint = 'article/';

const articlesService = {
  get: async () => {
    const { data } = await httpService.get(articlesEndpoint);
    return data;
  },
  post: async (payload) => {
    const { data } = await httpService.post(articlesEndpoint, payload);
    return data;
  },
  update: async (articleId, payload) => {
    const { data } = await httpService.patch(
      articlesEndpoint + articleId,
      payload
    );
    return data;
  },
  delete: async (articleId) => {
    const { data } = await httpService.delete(articlesEndpoint + articleId);
    return data;
  }
};

export default articlesService;
