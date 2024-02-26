const express = require("express");
const connect = require('./config/database');
const { PORT } = require('./config/server-config');
const apiRoutes = require('./routes/index');
const cors = require('cors');


const setupAndStartServer = () => {
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cors({
        origin: 'https://sacc-minor-project.vercel.app'
      }));
      
    app.use('/api', apiRoutes);

    app.listen(PORT, async () => {
        console.log(`Server started at ${PORT}`);
        await connect();
        console.log('MongoDB connected');
    });
}

setupAndStartServer();
