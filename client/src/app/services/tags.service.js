import httpService from './http.service';

const usersEndpoint = 'tag/';

const tagsService = {
  get: async () => {
    const { data } = await httpService.get(usersEndpoint);
    return data;
  }
};

export default tagsService;
