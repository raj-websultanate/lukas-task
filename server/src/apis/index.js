const router = require('express').Router();

const logs = require('./logs');
const mars = require('./mars');

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏'
  });
});

router.use('/mars-weather', mars);
router.use('/logs', logs);

module.exports = router;