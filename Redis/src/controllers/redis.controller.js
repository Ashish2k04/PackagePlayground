

async function registerController(req,res) {
    const {name, email} = req.body;

    return res.status(201).json({
        message: "User created.",
        info: {
            username: name,
            email: email
        }
    });
}

export {registerController};