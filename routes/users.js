const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");


mongoose.connect("mongodb://127.0.0.1:27017/formdb",{
  useNewUrlParser : true,
  useUnifiedTopology : true
}).then(()=>console.log('connected to db')).catch(err => console.log(err));

const userSchema = mongoose.Schema({ 
  firstname:{
    type : String,
    require:true
    
  },
  lastname:{
    type : String,
    require:true
    
  },
  address:{
    type:String,
    require:true
    
  },
  pincode:{
    type:Number,
    require:true
  },
  gender: {
    type: String,
    require:true
  },
  email:{
    type:String,
    require:true
  },
  phonenumber: {
    type: Number,
    require:true
    
  },
  country:{
    type:String,
    require:true
  },
  bio:{
    type:String,
    require:true
  },
  dob:{
    type:Date,
    require:true
  },
  username:{
    type:String,
    require:true
  },
  password:{
    type:String,
    require:true
  },
  cpassword:{
    type:String,
    require:true
  }


 
})
userSchema.plugin(plm);
module.exports = mongoose.model("user",userSchema );