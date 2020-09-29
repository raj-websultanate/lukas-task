const router = require('express').Router();
import { rateLimiter, speedLimiter, isValidRequest } from '../helpers';

let cachedData;
let cacheTime;

// Generally Used for public apis, to slow down the api calls.
router.get('/', rateLimiter, speedLimiter, isValidRequest, async (req, res) => {
    // In-memory Cache
    if (cacheTime && cacheTime > Date.now() - 30 * 1000) {
        return cachedData;
    }
    try {
        let data;   // Data we get from the api call to datase;
        cacheTime = Date.now();
        cacheData = data;
        res.status(200).json('hello mars');
    } catch (error) {
        console.log('Error', error.message);
    }
});

module.exports = router;
