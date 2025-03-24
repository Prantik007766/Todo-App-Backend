// const mongoose = require("mongoose");
// require("dotenv").config();
// const dbConnect = ()=>{
//     mongoose.connect(process.env.DATABASE_URL,{
//         useNewUrlParser:true,
//         useUnifiedTopology:true,
//     })
//     .then(()=>{console.log(" database connection successful")})
//     .catch((error)=>{
//         console.log("issue in db connection");
//         console.log(error.message);
//         process.exit(1);
//     });

// }
// module.exports = dbConnect;

const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL)
        .then(() => {
            console.log("Database connection successful");
        })
        .catch((error) => {
            console.error("Issue in DB connection:", error.message);
            process.exit(1); // Exit with failure
        });
};

module.exports = dbConnect;