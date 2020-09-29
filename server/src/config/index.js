// Environment Variable Configuration
import dotenv from 'dotenv';

dotenv.config();
module.exports = {
    environment: process.env.NODE_ENV,
    liveDB: process.env.MONGO_URI_LIVE,
    localDB: process.env.MONGO_URI_LOCAL,
    liveEndpoint: process.env.LIVE_CLIENT,
    localEndpoint: process.env.LOCAL_CLIENT,
    port: process.env.PORT,
    apiKeys: process.env.API_KEYS
};