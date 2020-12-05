import axios from 'axios';
//const uri = 'http://192.168.15.8:3001/api/'; //'http://localhost:3001/api/'
const uri = 'http://localhost:3001/api/'
const api = axios.create({
  baseURL: uri,
});

// const semAutorizacao = (response) => {
//   if(response.status === 401) {
//     console.log("You are not authorized");
//   }
//   return response;
// }

// const intercetor02 = (error) => {
//   if (error.response && error.response.data) {
//       console.log('mostrar modal de erro', error.response.data)
//       return Promise.reject(error.response);
//   }
//   return Promise.reject(error.message);
// }

// api.interceptors.response.use(semAutorizacao, intercetor02);

export const userService = {
  async listUser(){
    try{
      const {data} = await api.get('user');
      return data;
    }catch(error){
      throw error
    }
  },
  async createUser(user){
    try{
      const {data} = await api.post('user', user);
      return data;
    }catch(error){
      throw error
    }
  },
};

export default api;
