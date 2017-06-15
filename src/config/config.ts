require('dotenv').config({ path: __dirname + '/.env' });
const ENVIRONMENT = process.env.NODE_ENV || 'development';


export default  {
  production: {
    API_SERVER: 'https://api.rankr.kr',
    API_BASE_URI: '/v1',
  },
  development: {
    API_SERVER: 'https://api.rankr.kr',
    API_BASE_URI: '/v1',
  },
}[ENVIRONMENT];

