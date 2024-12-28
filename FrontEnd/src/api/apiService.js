import axios from 'axios'


const api = axios.create({
  baseURL: `${process.env.BASE_URI}`,
  headers: {
    'Content-Type': 'application/json',
  },
})


const apiService = {

  create: (endpoint, data) => api.post(endpoint, data),

 
  getAll: (endpoint) => api.get(endpoint),
  getById: (endpoint, id) => api.get(`${endpoint}/${id}`),


  update: (endpoint, id, data) => api.put(`${endpoint}/${id}`, data),


  delete: (endpoint, id) => api.delete(`${endpoint}/${id}`),
}


export default apiService
