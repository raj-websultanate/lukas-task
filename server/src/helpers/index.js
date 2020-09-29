import rateLimit  from 'express-rate-limit';
const slowDown = require("express-slow-down");

export const rateLimiter = rateLimit({
    windowMs: 30 * 1000, // 30 seconds
    max: 10  // only 10 requests in 30 seconds
});

export const speedLimiter = slowDown({
    windowMs: 30, // 30 seconds
    delayAfter: 1, // allow 1 requests to go at full-speed, then...
    delayMs: 500 // 2nd request has a 500ms delay, 3rd has a 500ms delay, 4th gets 100ms, etc.
});

export const isValidRequest = (req, res, next) => {
    const apiKey = req.get('X-API-KEY');
    if (apiKeys.has(apiKey)) {
        next();
    } else {
        const error = new Error('Invalid API Keys');
        next(error);
    }
}