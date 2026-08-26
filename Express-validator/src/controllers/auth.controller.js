async function registerController(req,res) {
    const {username, email, password} = req.body;

    return res.status(200).json({
        message: "User data.",
        username,
        email,
        password
    })
}

export {registerController}