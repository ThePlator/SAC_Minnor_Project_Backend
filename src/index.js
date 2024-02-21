const express = require("express");
const bodyParser = require("body-parser");

const {PORT} = require('./config/server-config');
const ApiRoutes = require('./routes/index');
// const db = require('./models/index');
// Multer configuration
// const StudentController = require('./controllers/student-controller');



const setupAndStartServer = () =>{

    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}))
   
   

    app.use('/api',ApiRoutes);

    app.listen(PORT, async()=>{
        // if(process.env.SYNC_DB){
        //     db.sequelize.sync({alter: true});
        // }
        console.log(`server started at ${PORT}`);
        
    });
}


setupAndStartServer();

