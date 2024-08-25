const sendEmail = require("../utils/sendEmail");

// import sendEmail from "../utils/sendEmail";
const homeActions = {

 submitEnquiry: async(req, res, next)=>{
  //get user information from front
    console.log(req.body);
    res.status(200).json({
        status:"success"
    })
    if(req.body){
      (await sendEmail(req.body));
      }
  //pass user information as parameters

  //send email

 }
};

module.exports = homeActions;