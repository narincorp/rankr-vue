import * as dotenv from 'dotenv'

dotenv.config({path : '../.env'});

declare var process: {
    env: {
        NODE_ENV: string
    }
};

const ENVIRONMENT = process.env.NODE_ENV || 'development';

export default  {
    production: {
        API_SERVER: 'http://api.rankr.narin.us',
        API_BASE_URI: '/v1',
    },
    development: {
        API_SERVER: 'http://api.rankr.narin.us',
        API_BASE_URI: '/v1',
    }
}[ENVIRONMENT];
