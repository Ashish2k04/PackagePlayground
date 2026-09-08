
async function registerUserController(req,res,next) {
    try{
       const {username, email, password} = req.body;

       return res.status(200).json({
          message: "User info.",
          info:{
            user_email: email,
            user_name: username
          }
       })
    }
    catch(error){
        error.status = 500;
        next(error)
    }
}

export default registerUserController