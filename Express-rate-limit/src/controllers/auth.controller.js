
async function loginController(req, res) {
    const {username, email} = req.body;

    return res.status(200).json({
        message: "Successfully logged in.",
        info:{
            name: username,
            email: email
        }
    })
}

export default loginController;