import axios from 'axios';
import config from '../config/config';

export default axios.create({
  baseURL: `${config.API_SERVER}${config.API_BASE_URI}`,
});