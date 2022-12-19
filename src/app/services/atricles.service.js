import httpService from './http.service';

const ariclesEndpoint = 'articles/';

const articlesService = {
  get: async () => {
    const { data } = await httpService.get(ariclesEndpoint);
    return data;
  }
};

export default articlesService;
