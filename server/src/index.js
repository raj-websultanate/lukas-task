// External Dependencies
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const cookieParser = require('cookie-parser');

// Internal Dependencies
import { port, environment, liveEndpoint, localEndpoint } from './config';
const { notFound, errorHandler } = require('./helpers/middleware');

const app = express();
const server = require('http').Server(app);
const connectDB = require('./config/db');

if (environment == 'development') app.use(morgan('common'));    //Used to log request in console
app.set('trust proxy', 1);      //Use for Express Rate Limiter and Express Slow Down
app.use(helmet());              //Used to hide some sensitive header for security
app.use(cors({
    origin: [localEndpoint, liveEndpoint]
}));
app.use(express.json());
app.use(
    express.urlencoded({
        extended: false,
    })
);
app.use(cookieParser("cookiesecret"));
app.use("/public", express.static(__dirname + "../public"));
connectDB();

app.get('/', (req, res) => {
    res.json({ message: 'hello' });
});

app.use('/api/', require('./apis'));

app.use(notFound);
app.use(errorHandler);

server.listen(port || 3001, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on Port:${port}`);
});