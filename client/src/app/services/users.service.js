import httpService from './http.service';

const usersEndpoint = 'users/';

const usersService = {
  get: async () => {
    const { data } = await httpService.get(usersEndpoint);
    return data;
  }
};

export default usersService;
