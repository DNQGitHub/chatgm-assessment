import Axios from 'axios';

const apiClient = Axios.create({
    baseURL: 'http://localhost:3001',
});

export default apiClient;
