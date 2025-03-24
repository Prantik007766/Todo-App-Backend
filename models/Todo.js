// const mongoose = require("mongoose")

// const todoSchema  = new mongoose.Schema(
//     {
//         title:{
//             type:String,
//             required:true,
//             maxLength:50,
//         },
//         discription:{
//             type:String,
//             required:true,
//             maxlenght:50,
//         },
//         createdat:{
//             type:Date,
//             required:true,
//             default:Date.now(),
//         },
//         updatedAt:{
//             type:Date,
//             required:true,
//             default:Date.now(),

//         }
//     }
// );
// module.exports = mongoose.model("Todo",todoSchema);


const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxlength: 50,  // Fixed typo
    },
    description: {   // Fixed "discription" typo
        type: String,
        required: true,
        maxlength: 50,  // Fixed "maxlenght" typo
    },
    createdAt: {   // Fixed "createdat" case issue
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model("Todo", todoSchema);
