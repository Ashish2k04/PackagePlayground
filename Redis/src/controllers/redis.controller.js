import redis from '../config/redis.js'

async function registerController(req,res) {
    const {name, email} = req.body;

    await redis.set(name, JSON.stringify({email}));

    return res.status(201).json({
        message: "User created.",
        info: {
            username: name,
            email: email
        }
    });
}

async function getEmailController(req,res){
     const {name} = req.body;

     const user = await redis.get(name);

     if(!user){
        return res.status(404).json({
            message: "User not found.",
            success: false,
            error: "User not found, check if the spelling is correct or you registerd before."
        })
     }

     const decode = JSON.parse(user);

     return res.status(200).json({
        message: "Fetched your data successfuly.",
        success: true,
        info: {
            user: name,
            email: decode.email
        }
     })
}

async function deleteUserController(req, res) {
    const {name} = req.body;

    const deleted = await redis.del(name);

    if(!deleted){
        return res.status(404).json({
            message: "User not found.",
            success: false,
            error: "No user exists with this name."
        });
    }

    return res.status(200).json({
        message: "User deleted successfully.",
        success: true
    });
}

export {registerController, getEmailController, deleteUserController};