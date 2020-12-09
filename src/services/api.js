/* eslint-disable no-unused-vars */
import qs from 'qs';
import axios from 'axios';
//const uri = 'http://192.168.15.8:3001/api/'; //'http://localhost:3001/api/'
const uri = 'http://localhost:3001'
const api = axios.create({
  baseURL: uri,
});

const clearAccess = () =>{
  console.log('clearing access')
  localStorage.clear();
}


//Interceptors
api.interceptors.request.use(function (config) {
  //Adicionando o token as chamadas
  config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

const semAutorizacao = (response) => {
  if(response.status === 401) {
    console.log("You are not authorized");
    clearAccess();
  }
  return response;
}

const intercetor02 = (error) => {
  if (error.response && error.response.data) {
      return Promise.reject(error.response);
  }
  return Promise.reject(error.message);
}

api.interceptors.response.use(semAutorizacao, intercetor02);

export const userService = {
  async login(user){
    try{
      const {data} = await api.post('/login',user);
      return data;
    }catch(error){
      throw error
    }
  },
  async getUser(id){
    try{
      const {data} = await api.get(`/api/user/${id}`);
      return data;
    }catch(error){
      throw error
    }
  },
  async listUser(params = ''){
    try{
      //const q = query ? `?${qs.stringify(query)}` : ''
      //console.log('q', q)
      //const {data} = await api.get(`/api/user`,{params:params});
      const {data} = await api.get(`/api/user${params}`);
      return data;
    }catch(error){
      throw error
    }
  },
  async createUser(user){
    try{
      const {data} = await api.post('/join', user);
      return data;
    }catch(error){
      throw error
    }
  },
  async updateUser(user){
    try{
      const {data} = await api.put(`/api/user/${user._id}`, user);
      return data;
    }catch(error){
      throw error
    }
  },
};

export const skillService = {
  
  async listSkill(){
    try{
      const {data} = await api.get('/api/skill');
      return data;
    }catch(error){
      throw error
    }
  }
};

export default api;
